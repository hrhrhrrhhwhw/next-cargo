import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Row = {
    destination: string;
    distance: string;
    wagonType: string;
    wagonModel: string;
};

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { emails, rows } = body as {
            emails: string[];
            rows: Row[];
        };

        if (!emails || !emails.length) {
            return NextResponse.json({ error: "Emails are required" }, { status: 400 });
        }

        if (!rows || !rows.length) {
            return NextResponse.json({ error: "Table rows are required" }, { status: 400 });
        }

        // HTML-строки таблицы
        const rowsHtml = rows
            .map(
                (row) => `
          <tr>
            <td style="border:1px solid #ddd;padding:8px;">${row.destination}</td>
            <td style="border:1px solid #ddd;padding:8px;">${row.distance}</td>
            <td style="border:1px solid #ddd;padding:8px;">${row.wagonType}</td>
            <td style="border:1px solid #ddd;padding:8px;">${row.wagonModel}</td>
          </tr>
        `
            )
            .join("");

        // HTML письма
        const html = `
<div style="font-family: Arial, sans-serif; font-size:14px; color:#111">

  <h2 style="margin-bottom:12px">Свободные вагоны</h2>



  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">

    <tbody>
    <tr style="background:#f5f5f5;font-weight:600">
    <td style="border:1px solid #ddd;padding:8px">
      Станция назначения
    </td>
    <td style="border:1px solid #ddd;padding:8px">
      Расстояние (км)
    </td>
    <td style="border:1px solid #ddd;padding:8px">
      Тип вагона
    </td>
    <td style="border:1px solid #ddd;padding:8px">
      Модель вагона
    </td>
  </tr>
      ${rows
          .map(
              (row) => `
        <tr>
          <td style="border:1px solid #ddd;padding:8px">
            ${row.destination || "—"}
          </td>
          <td style="border:1px solid #ddd;padding:8px">
            ${row.distance || "—"}
          </td>
          <td style="border:1px solid #ddd;padding:8px">
            ${row.wagonType || "—"}
          </td>
          <td style="border:1px solid #ddd;padding:8px">
            ${row.wagonModel || "—"}
          </td>
        </tr>
      `
          )
          .join("")}
    </tbody>
  </table>
          <div style="margin-top:24px;">
  <a
    href="https://wa.me/79600806661"
    target="_blank"
    style="
      display:inline-block;
      background-color:#25D366;
      color:#ffffff;
      text-decoration:none;
      padding:12px 20px;
      border-radius:6px;
      font-weight:600;
      font-size:14px;
    "
  >
    💬 Написать в WhatsApp
  </a>
</div>
</div>
`;

        const validEmails = emails.map((e: string) => e.trim()).filter((e: string) => e && e.includes("@"));

        if (!validEmails.length) {
            return NextResponse.json({ error: "No valid email addresses" }, { status: 400 });
        }

        // Отправка
        await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: validEmails,
            subject: "Свободные вагоны",
            html,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("SEND EMAIL ERROR:", error);
        return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
    }
}
