"use client";

import { Sparkle, Briefcase, Mail, MessageCircle, Wallet, House } from "lucide-react";
import CopyEmail from "@/components/web/email";

export default function WorkPage() {
    return (
        <main className="mt-10">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground px-4 md:px-10 mb-10 text-center">
                Вакансии
            </h2>

            {/* Список вакансий */}
            <div className="w-200 mx-auto">
                <div className="border rounded-lg p-6 hover:border-primary transition">
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="text-primary" />
                        <h2 className="text-2xl font-semibold">
                            Менеджер по продажам транспортных услуг
                        </h2>
                    </div>
                    <div className="md:flex gap-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-base font-medium text-green-700 bg-green-50 rounded-md mb-4">
                            <Wallet size={14} />
                            Зарплата от 150&nbsp;000 ₽
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-base font-medium text-green-700 bg-green-50 rounded-md mb-4">
                            <House size={14} />
                            Удаленная работа
                        </span>
                    </div>

                    <p className="text-base text-muted-foreground pl-2 md:pl-5 mb-4">
                        <li>
                            Развитие существующей клиентской базы, поддержание и развитие отношений
                            с клиентами
                        </li>
                        <li>Привлечение новых клиентов и активные продажи</li>
                        <li>Ведение отчетности по клиентам</li>
                        <li>Активность, коммуникабельность и ответственность</li>
                    </p>

                    <a
                        href="https://wa.me/79600806661?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                        <MessageCircle size={18} />
                        Написать в WhatsApp
                    </a>
                </div>
            </div>

            {/* CTA */}
            <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 w-200 mx-auto">
                <div className="flex items-center gap-3">
                    <Mail />
                    <CopyEmail />
                </div>
            </div>
        </main>
    );
}
