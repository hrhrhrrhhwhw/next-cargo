import { Sparkle, Mail } from "lucide-react";
import Link from "next/link";
import CopyEmail from "@/components/web/email";
import Diadoc from "@/components/web/diadoc";
const Footer = () => {
    return (
        <div className="p-4 pt-16 md:p-12 flex-col justify-between border-t">
            <div className="flex gap-4 items-center mb-10">
                <Sparkle width={24} height={24} />
                <h2 className="font-medium text-2xl md:text-3xl">Гарантированное качество на каждом километре</h2>
            </div>
            <div className="md:flex md:justify-between gap-4 mb-6">
                <div className="mb-8">
                    <p className="font-medium mb-2">По общим вопросам и для заказа вагонов</p>
                    <span className="flex gap-2 items-center">
                        <Mail />
                        <CopyEmail />
                    </span>
                </div>

                <div className="flex-col mb-2 md:flex">
                    <p>Общество с ограниченной ответственностью «12КАРГО»</p>
                    <p>ОГРН 1211600051178</p>
                    <p>ИНН/КПП 1656119812/165601001</p>
                    <p>
                        Контур Диадок: <Diadoc />
                    </p>
                </div>
            </div>
            <hr className="my-8 border-t" />

            <div className="md:flex md:justify-between flex-col">
                <div className="flex-col gap-4 font-bold justify-between md:justify-start mb-8 md:items-center">
                    <Link href="/" className="flex pb-4">
                        <span className="text-3xl font-extrabold">
                            12<span className="text-red-800">CARGO</span>
                        </span>
                    </Link>
                    <div className="flex md:flex-row gap-4">
                        <Link className="hover:text-red-800" href="/about">
                            О нас
                        </Link>
                        <Link className="hover:text-red-800" href="/work">
                            Вакансии
                        </Link>
                        <Link className="hover:text-red-800" href="/contact">
                            Контакты
                        </Link>
                    </div>
                </div>
                <div className="mb-10">
                    <p className="text-sm text-muted-foreground mb-2">Готовы рассчитать перевозку?</p>
                    <a
                        href="https://wa.me/79600806661"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-red-800 font-medium hover:underline"
                    >
                        Оставить заявку →
                    </a>
                </div>
                <p className="text-xs text-muted-foreground mt-4">© {new Date().getFullYear()} 12CARGO</p>
            </div>
        </div>
    );
};

export default Footer;
