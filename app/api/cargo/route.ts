import { Resend } from "resend";
import { NextResponse } from "next/server";
import Email from "@/emails/notion-cargo";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { emails } = await req.json();

        if (!emails || !Array.isArray(emails) || emails.length === 0) {
            return NextResponse.json({ error: "Не указаны email получателей" }, { status: 400 });
        }

        if (emails.length > 50) {
            return NextResponse.json({ error: "Максимум 50 email за раз" }, { status: 400 });
        }

        const results = await Promise.allSettled(
            emails.map((email) =>
                resend.emails.send({
                    from: "12cargo@12cargo.ru",
                    to: email,
                    subject: "предоставление вагонов",
                    react: Email({ email }),
                }),
            ),
        );

        const successful = results.filter((r) => r.status === "fulfilled").length;
        const failed = results.filter((r) => r.status === "rejected").length;

        return NextResponse.json({
            message: `Отправлено ${successful} из ${emails.length} писем`,
            successful,
            failed,
            details: results.map((r, i) => ({
                email: emails[i],
                status: r.status,
                ...(r.status === "rejected" && { error: r.reason?.message }),
            })),
        });
    } catch (error) {
        console.error("Error sending emails:", error);
        return NextResponse.json({ error: "Ошибка при отправке писем" }, { status: 500 });
    }
}

export async function GET() {
    const testEmails = ["806661@mail.ru"];

    try {
        const data = await Promise.all(
            testEmails.map((email) =>
                resend.emails.send({
                    from: "12cargo@12cargo.ru",
                    to: email,
                    subject: "предоставление вагонов",
                    react: Email({ email }),
                }),
            ),
        );
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Ошибка при отправке тестовых писем" }, { status: 500 });
    }
}
