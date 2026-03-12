import type { Metadata } from "next";
import Script from "next/script";
import { Mulish } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/session-provider";
import Navbar from "@/components/web/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/web/footer";

const FontVariable = Mulish({
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
        "перевозки",
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
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
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
            <body className={`${FontVariable.variable} antialiased max-w-380 mx-auto`}>
                {/* Yandex Metrika */}
                <Script id="yandex-metrika" strategy="afterInteractive">
                    {`(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107199842', 'ym');

        ym(107199842, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`}
                </Script>

                <Script
                    id="yourgood-widget"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
      (function () {
        var widget = document.createElement('script');
        widget.defer = true;
        widget.dataset.pfId = '92039f37-a4d4-4d50-bc18-8e3118adc062';
        widget.src = 'https://widget.yourgood.app/script/widget.js?id=92039f37-a4d4-4d50-bc18-8e3118adc062&now=' + Date.now();
        document.head.appendChild(widget);
      })();
    `,
                    }}
                />

                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/107199842"
                            style={{ position: "absolute", left: "-9999px" }}
                            alt=""
                        />
                    </div>
                </noscript>
                <AuthProvider>
                    <main className="mx-auto">
                        <Toaster position="top-right" />
                        <Navbar />
                        {children}
                        <Footer />
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
