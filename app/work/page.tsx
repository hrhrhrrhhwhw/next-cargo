"use client";

import { Sparkle, Briefcase, Mail, MessageCircle, Wallet, House } from "lucide-react";
import Link from "next/link";
import CopyEmail from "@/components/web/email";

export default function WorkPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 md:px-12 py-16">
            {/* Заголовок */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <Sparkle className="text-red-800" />
                    <h1 className="text-3xl md:text-4xl font-bold">Вакансии</h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                    Мы развиваемся и всегда открыты для профессионалов, которым близка сфера логистики и железнодорожных
                    перевозок.
                </p>
            </div>

            {/* Список вакансий */}
            <div className="space-y-6 mb-20">
                {/* Вакансия 1 */}
                <div className="border rounded-lg p-6 hover:border-red-800 transition">
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="text-red-800" />
                        <h2 className="text-xl font-semibold">Менеджер по продажам транспортных услуг</h2>
                    </div>
                    <div className="md:flex gap-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-green-700 bg-green-50 rounded-md mb-4">
                            <Wallet size={14} />
                            Зарплата от 150&nbsp;000 ₽
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-green-700 bg-green-50 rounded-md mb-4">
                            <House size={14} /> 
                            Удаленная работа
                        </span>
                    </div>

                    <p className="text-sm text-muted-foreground pl-2 md:pl-5 mb-4">
                        <li>Развитие существующей клиентской базы, поддержание и развитие отношений с клиентами</li>
                        <li>Привлечение новых клиентов и активные продажи</li>
                        <li>Ведение отчетности по клиентам</li>
                        <li>Активность, коммуникабельность и ответственность</li>
                    </p>

                    <a
                        href="https://wa.me/79600806661?text=Здравствуйте!%20Хочу%20оставить%20заявку"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-800 font-medium hover:underline"
                    >
                        <MessageCircle size={18} />
                        Написать в WhatsApp
                    </a>
                </div>
            </div>

            {/* CTA */}
            <div className="border-t pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-semibold">Не нашли подходящую вакансию?</h3>
                    <p className="text-muted-foreground">Отправьте резюме — мы обязательно свяжемся с вами</p>
                </div>

                <div className="flex items-center gap-3">
                    <Mail />
                    <CopyEmail />
                </div>
            </div>
        </main>
    );
}
