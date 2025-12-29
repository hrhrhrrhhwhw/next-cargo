import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/web/navbar";
import { ThemeProvider } from "@/components/theme-provider";

import { Toaster } from "react-hot-toast";

const FontVariable = Montserrat({
    variable: "--font-google-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Железнодорожные перевозки по России | 12КАРГО",
        template: "%s | 12КАРГО",
    },
    description:
        "Предоставление подвижного состава и организация железнодорожных перевозок грузов по России. Полувагоны, крытые вагоны, цистерны. Быстро и надежно.",
    keywords: [
        "железнодорожные перевозки",
        "грузовые перевозки",
        "вагоны",
        "подвижной состав",
        "аренда вагонов",
        "логистика",
    ],
    authors: [{ name: "12КАРГО" }],
    creator: "12КАРГО",
    publisher: "12КАРГО",

    metadataBase: new URL("https://12cargo.ru"),

    openGraph: {
        title: "Железнодорожные перевозки по России | 12КАРГО",
        description:
            "Аренда вагонов и организация грузовых железнодорожных перевозок. Надежная логистика по всей России.",
        url: "https://12cargo.ru",
        siteName: "12CARGO",
        locale: "ru_RU",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body className={`${FontVariable.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <main className="mx-auto w-full">
                        <Toaster position="top-right" />
                        <Navbar />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
