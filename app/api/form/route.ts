import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const BOT_TOKEN = process.env.BOT_TOKEN!;
        const CHAT_ID = process.env.CHAT_ID!;

        const message = `
📨 <b>Новая заявка</b>

🚉 Отправление: ${data.departure}
🏁 Назначение: ${data.arrive}
📦 Груз: ${data.cargo}
🚋 Вагон: ${data.wagonType}
📧 Email: ${data.email}
    `;

        const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        await fetch(telegramUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "HTML",
            }),
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Telegram error" }, { status: 500 });
    }
}
