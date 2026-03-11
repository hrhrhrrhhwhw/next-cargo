"use client";

import { Briefcase, Mail, MessageCircle, Wallet, House } from "lucide-react";
import CopyEmail from "@/components/web/email";

export default function WorkPage() {
    return (
        <main className="my-10 px-4 md:px-10">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-10 text-center">
                Вакансии
            </h2>

            {/* Список вакансий */}
            <div className="max-w-3xl mx-auto">
                <div className="border rounded-xl p-6 hover:border-primary transition flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                        <Briefcase className="text-primary mt-1 shrink-0" />
                        <h3 className="text-xl md:text-2xl font-semibold">
                            Менеджер по продажам транспортных услуг
                        </h3>
                    </div>

                    {/* условия */}
                    <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-sm md:text-base font-medium text-green-700 bg-green-50 rounded-md">
                            <Wallet size={16} />
                            Зарплата от 150 000 ₽
                        </span>

                        <span className="inline-flex items-center gap-2 px-3 py-1 text-sm md:text-base font-medium text-green-700 bg-green-50 rounded-md">
                            <House size={16} />
                            Удаленная работа
                        </span>
                    </div>

                    {/* обязанности */}
                    <ul className="text-muted-foreground text-sm md:text-base space-y-2 list-disc pl-6">
                        <li>
                            Развитие существующей клиентской базы и поддержание отношений с
                            клиентами
                        </li>
                        <li>Привлечение новых клиентов и активные продажи</li>
                        <li>Ведение отчетности по клиентам</li>
                        <li>Активность, коммуникабельность и ответственность</li>
                    </ul>

                    {/* кнопка */}
                    <a
                        href="https://wa.me/79600806661"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-2"
                    >
                        <MessageCircle size={18} />
                        Написать в WhatsApp
                    </a>
                </div>
            </div>
        </main>
    );
}
