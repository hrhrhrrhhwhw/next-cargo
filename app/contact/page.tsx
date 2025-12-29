"use client";

import { Mail, Sparkle, MessageCircle } from "lucide-react";
import CopyEmail from "@/components/web/email";
import Diadoc from "@/components/web/diadoc";

export default function ContactPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 md:px-12 py-16">
            {/* Заголовок */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <Sparkle className="text-red-800" />
                    <h1 className="text-3xl md:text-4xl font-bold">Контакты</h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                    Свяжитесь с нами любым удобным способом — мы оперативно ответим и поможем с подбором подвижного
                    состава.
                </p>
            </div>

            {/* Основные контакты */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Связь с нами</h2>

                    <div className="flex items-center gap-3">
                        <Mail />
                        <CopyEmail />
                    </div>

                    <a
                        href="https://wa.me/79600806661?text=Здравствуйте!%20Хочу%20оставить%20заявку"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-800 font-medium hover:underline"
                    >
                        <MessageCircle size={18} />
                        Написать в WhatsApp
                    </a>

                    <p className="text-sm text-muted-foreground">Работаем по всей России и СНГ</p>
                </div>

                {/* Юридическая информация */}
                <div className="bg-muted/30 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Реквизиты</h2>

                    <div className="space-y-2 text-sm">
                        <p>Общество с ограниченной ответственностью «12КАРГО»</p>
                        <p>ОГРН: 1211600051178</p>
                        <p>ИНН/КПП: 1656119812 / 165601001</p>
                        <p className="flex gap-1">
                            Контур Диадок: <Diadoc />
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="border-t pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-semibold">Готовы рассчитать перевозку?</h3>
                    <p className="text-muted-foreground">Оставьте заявку — мы свяжемся с вами в ближайшее время</p>
                </div>

                <a
                    href="https://wa.me/79600806661?text=Здравствуйте!%20Хочу%20получить%20расчёт"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-red-800 text-white rounded-md hover:bg-red-900 transition"
                >
                    Оставить заявку
                </a>
            </div>
        </main>
    );
}
