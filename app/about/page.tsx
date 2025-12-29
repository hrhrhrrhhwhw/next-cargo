
import { Sparkle, Truck, Users, Map } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "О компании",
    description: "О компании 12КАРГО — опыт, показатели, надежность",
};

export default function AboutPage() {
    return (
        <main className="max-w-5xl mx-auto px-4 md:px-12 py-16">
            {/* Заголовок */}
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-4">
                    <Sparkle className="text-red-800" />
                    <h1 className="text-3xl md:text-4xl font-bold">О компании</h1>
                </div>

                <p className="text-muted-foreground max-w-3xl">
                    Компания <strong>12CARGO</strong> специализируется на организации железнодорожных перевозок по
                    территории России и СНГ. Мы помогаем бизнесу эффективно и надёжно доставлять грузы, подбирая
                    оптимальный подвижной состав и маршруты.
                </p>
            </div>

            {/* Ключевая информация */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="border rounded-lg p-6">
                    <Truck className="text-red-800 mb-4" />
                    <p className="text-2xl font-bold mb-1">27&nbsp;000 тонн</p>
                    <p className="text-sm text-muted-foreground">перевезено за 2025 год</p>
                </div>

                <div className="border rounded-lg p-6">
                    <Users className="text-red-800 mb-4" />
                    <p className="text-2xl font-bold mb-1">37+</p>
                    <p className="text-sm text-muted-foreground">довольных клиентов</p>
                </div>

                <div className="border rounded-lg p-6">
                    <Map className="text-red-800 mb-4" />
                    <p className="text-2xl font-bold mb-1">15+ регионов</p>
                    <p className="text-sm text-muted-foreground">география перевозок</p>
                </div>
            </div>

            {/* Текстовый блок */}
            <div className="max-w-3xl mb-20 space-y-6">
                <p>
                    Мы работаем как с разовыми перевозками, так и с постоянными потоками грузов. В центре нашего подхода
                    — прозрачные условия, соблюдение сроков и индивидуальная работа с каждым клиентом.
                </p>

                <p>
                    Наша команда сопровождает перевозку на всех этапах — от подбора вагона до контроля движения и
                    оформления документов. Мы ценим долгосрочные партнёрские отношения и стремимся быть надёжным
                    логистическим партнёром для бизнеса.
                </p>
            </div>

            {/* Ценности */}
            <div className="border-t pt-12">
                <h2 className="text-2xl font-semibold mb-6">Наши принципы</h2>

                <ul className="grid md:grid-cols-2 gap-6 text-sm">
                    <li className="border rounded-lg p-4">Надёжность и ответственность на каждом этапе перевозки</li>
                    <li className="border rounded-lg p-4">Прозрачные условия и честный подход к расчётам</li>
                    <li className="border rounded-lg p-4">Индивидуальные решения под задачи клиента</li>
                    <li className="border rounded-lg p-4">Долгосрочное сотрудничество и доверие</li>
                </ul>
            </div>
        </main>
    );
}
