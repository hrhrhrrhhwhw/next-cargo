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

        // Формируем массив писем для batch отправки
        const batchEmails = emails.map((email) => ({
            from: "12cargo@12cargo.ru",
            to: email,
            subject: "предоставление вагонов",
            react: Email({ email }),
        }));

        // Отправляем одним батч-запросом
        const { data, error } = await resend.batch.send(batchEmails);

        if (error) {
            console.error("Batch error:", error);
            return NextResponse.json({ error: "Ошибка при отправке" }, { status: 500 });
        }

        return NextResponse.json({
            message: `Отправлено ${batchEmails.length} писем`,
            successful: batchEmails.length,
            failed: 0,
            details: data,
        });

    } catch (error) {
        console.error("Error sending emails:", error);
        return NextResponse.json({ error: "Ошибка при отправке писем" }, { status: 500 });
    }
}