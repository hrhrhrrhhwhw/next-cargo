// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//     const { searchParams } = new URL(req.url);
//     const email = searchParams.get("email");

//     console.log("Unsubscribe:", email);

//     return new NextResponse("Вы успешно отписались от рассылки");
// }

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
        return new NextResponse("Email не указан", { status: 400 });
    }

    console.log("Unsubscribe:", email);

    // Отправляем уведомление об отписке
    try {
        await resend.emails.send({
            from: "12cargo@12cargo.ru",
            to: "smr@12cargo.ru",
            subject: "❌ Отписка от рассылки",
            html: `
                <h2>Пользователь отписался от рассылки</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Дата:</strong> ${new Date().toLocaleString("ru-RU")}</p>
                <hr>
                <p>Это автоматическое уведомление об отписке.</p>
            `,
        });

        console.log(`Уведомление об отписке ${email} отправлено`);
    } catch (error) {
        console.error("Ошибка при отправке уведомления:", error);
    }

    // Упрощенный ответ
    return new NextResponse("Вы отписаны", {
        status: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}
