"use client";

import { useEffect, useState } from "react";

export default function CargoPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState(""); // ❌ Этой переменной не было
    const [error, setError] = useState(""); // ❌ Этой переменной не было
    const [emails, setEmails] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [response, setResponse] = useState<any>(null);

    useEffect(() => {
        // Проверяем, есть ли уже авторизация в sessionStorage
        const auth = sessionStorage.getItem("cargo-auth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === process.env.NEXT_PUBLIC_CARGO) {
            sessionStorage.setItem("cargo-auth", "true");
            setIsAuthenticated(true);
            setError("");
        }
        else {
            setError("Неверный пароль");
        }
    };

    // Если не авторизован, показываем форму входа
    if (!isAuthenticated) {
        return (
            <div style={styles.loginContainer}>
                <div style={styles.loginBox}>
                    <h1 style={styles.loginTitle}>12CARGO</h1>
                    <h2 style={styles.loginSubtitle}>Введите пароль для доступа</h2>

                    <form onSubmit={handleLogin} style={styles.loginForm}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Пароль"
                            style={styles.loginInput}
                            autoFocus
                        />
                        {error && <p style={styles.loginError}>{error}</p>}
                        <button type="submit" style={styles.loginButton}>
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setResponse(null);

        // Разбиваем текст на массив email'ов
        const emailList = emails
            .split(/[,\n]/)
            .map((email) => email.trim())
            .filter((email) => email.length > 0 && email.includes("@"));

        if (emailList.length === 0) {
            alert("Введите хотя бы один корректный email");
            setStatus("idle");
            return;
        }

        if (emailList.length > 50) {
            alert("Максимум 50 email за раз");
            setStatus("idle");
            return;
        }

        try {
            const res = await fetch("/api/cargo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ emails: emailList }),
            });

            const data = await res.json();
            setResponse(data);
            setStatus("success");
        } catch (error) {
            console.error("Error:", error);
            setStatus("error");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>12CARGO - Отправка писем</h1>
                <button
                    onClick={() => {
                        sessionStorage.removeItem("cargo-auth");
                        setIsAuthenticated(false);
                    }}
                    style={styles.logoutButton}
                >
                    Выйти
                </button>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email получателей (до 50 шт):</label>
                    <p style={styles.hint}>Введите email через запятую или с новой строки</p>
                    <textarea
                        value={emails}
                        onChange={(e) => setEmails(e.target.value)}
                        placeholder="example1@mail.ru, example2@mail.ru&#10;example3@mail.ru"
                        rows={8}
                        style={styles.textarea}
                        disabled={status === "loading"}
                    />
                </div>

                <button type="submit" style={styles.button} disabled={status === "loading"}>
                    {status === "loading" ? "Отправка..." : "Отправить письма"}
                </button>
            </form>

            {status === "success" && response && (
                <div style={styles.success}>
                    <h3>✅ Письма отправлены!</h3>
                    <p>Отправлено: {response.successful} писем</p>
                    {response.failed > 0 && (
                        <p style={{ color: "#e53e3e" }}>Не удалось отправить: {response.failed}</p>
                    )}
                </div>
            )}

            {status === "error" && (
                <div style={styles.error}>
                    <h3>❌ Ошибка при отправке</h3>
                    <p>Попробуйте еще раз</p>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: "relative" as const,
    },
    header: {
        display: "flex" as const,
        justifyContent: "space-between" as const,
        alignItems: "center" as const,
        marginBottom: "30px",
    },
    title: {
        color: "#9f0712",
        margin: 0,
    },
    form: {
        backgroundColor: "#f9f9f9",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    formGroup: {
        marginBottom: "20px",
    },
    label: {
        display: "block",
        marginBottom: "10px",
        fontWeight: "bold",
        fontSize: "16px",
    },
    hint: {
        color: "#666",
        fontSize: "14px",
        marginBottom: "10px",
    },
    textarea: {
        width: "100%",
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        fontSize: "14px",
        fontFamily: "monospace",
        resize: "vertical" as const,
    },
    button: {
        backgroundColor: "#9f0712",
        color: "white",
        padding: "12px 24px",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    success: {
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#f0fff4",
        border: "1px solid #9ae6b4",
        borderRadius: "5px",
    },
    error: {
        marginTop: "20px",
        padding: "20px",
        backgroundColor: "#fff5f5",
        border: "1px solid #fc8181",
        borderRadius: "5px",
    },
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f6f9fc",
    },
    loginBox: {
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
    },
    loginTitle: {
        color: "#9f0712",
        fontSize: "30px",
        marginBottom: "10px",
        textAlign: "center" as const,
    },
    loginSubtitle: {
        color: "#525f7f",
        fontSize: "16px",
        marginBottom: "30px",
        textAlign: "center" as const,
    },
    loginForm: {
        display: "flex",
        flexDirection: "column" as const,
    },
    loginInput: {
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        marginBottom: "15px",
    },
    loginButton: {
        backgroundColor: "#9f0712",
        color: "white",
        padding: "12px",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
    },
    loginError: {
        color: "#e53e3e",
        fontSize: "14px",
        marginBottom: "15px",
        textAlign: "center" as const,
    },
    logoutButton: {
        padding: "8px 16px",
        backgroundColor: "#ddd",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
    },
} as const;
