"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import AdminMailTable, { TableRow } from "@/components/web/admin-mail-table";

const ADMIN_EMAIL = "12cargo@12cargo.ru";

export default function AdminMailPage() {
    const { data: session, status } = useSession();

    const [emails, setEmails] = useState("");
    const [rows, setRows] = useState<TableRow[]>([{ destination: "", distance: "", wagonType: "", wagonModel: "" }]);
    const [loading, setLoading] = useState(false);
    const [route, setRoute] = useState("");
    const [wagonType, setWagonType] = useState("");
    const [loadingDate, setLoadingDate] = useState("");

    if (status === "loading") {
        return <p className="p-8">Загрузка…</p>;
    }

    if (!session) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Админка рассылки</h1>
                <button onClick={() => signIn("email")} className="bg-red-800 text-white px-4 py-2 rounded">
                    Войти
                </button>
            </div>
        );
    }

    if (session.user?.email !== ADMIN_EMAIL) {
        return (
            <div className="p-8 text-center">
                <h1 className="text-xl font-bold text-red-700">Нет доступа</h1>
                <button onClick={() => signOut()} className="underline mt-4">
                    Выйти
                </button>
            </div>
        );
    }

    async function send() {
        const validEmails = emails
            .split("\n")
            .map((e) => e.trim())
            .filter(Boolean);

        if (!validEmails.length) {
            toast.error("Введите email адреса");
            return;
        }

        if (!rows.length) {
            toast.error("Добавьте хотя бы одну строку");
            return;
        }

        const toastId = toast.loading("Отправляем рассылку...");
        setLoading(true);

        const res = await fetch("/api/send-email-bulk", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                emails: validEmails,
                rows,
                wagonType,
                loadingDate,
                route,
            }),
        });

        setLoading(false);

        if (!res.ok) {
            toast.error("Ошибка при отправке", { id: toastId });
            return;
        }

        toast.success("Рассылка отправлена", { id: toastId });
        setEmails("");
        setRows([{ destination: "", distance: "", wagonType: "", wagonModel: "" }]);
    }

    return (
        <div className="max-w-5xl mx-auto p-8 space-y-6">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Email-рассылка</h1>
                <button onClick={() => signOut()} className="underline">
                    Выйти
                </button>
            </div>

            <div>
                <label className="font-medium">Email получателей (по одному в строке)</label>
                <textarea
                    className="w-full border p-2 h-32 mt-1"
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                />
            </div>
            
            <AdminMailTable rows={rows} setRows={setRows} />

            <button
                onClick={send}
                disabled={loading}
                className="bg-red-800 text-white px-6 py-3 rounded disabled:opacity-50"
            >
                {loading ? "Отправка..." : "Отправить рассылку"}
            </button>
        </div>
    );
}
