"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="h-screen flex items-center justify-center">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    signIn("credentials", {
                        email,
                        password,
                        callbackUrl: "/admin/mail",
                    });
                }}
                className="flex flex-col gap-4 w-80"
            >
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2"
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2"
                />
                <button className="bg-black text-white py-2">Войти</button>
            </form>
        </div>
    );
}
