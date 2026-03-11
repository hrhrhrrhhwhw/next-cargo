import Image from "next/image";
import Link from 'next/link'
import { Button } from "../ui/button";

export default function Lading() {
    return (
        <div className="w-full pt-4 border-t bg-[#242424] rounded-4xl flex flex-col md:flex-row items-center gap-6 px-4 md:px-8 py-6">
            <div className="flex flex-col gap-4 w-full md:max-w-xl mx-auto">
                <h2 className="text-[#f1f1f1] text-2xl md:text-5xl font-semibold text-center md:text-left pb-2">
                    Погрузка и крепление груза
                </h2>

                <p className="text-[#f1f1f1] text-sm md:text-base text-center md:text-left border-b pb-2">
                    найдем ближайшую станцию к месту нахождения груза, с подъездными путями, краном
                    и работниками имеющими аттестацию ржд
                </p>

                <div className="flex flex-col gap-1">
                    <span className="text-[#f1f1f1] text-center md:text-left">
                        стоимость погрузки в среднем:
                    </span>

                    <span className="text-[#f1f1f1] text-2xl md:text-4xl font-bold text-center md:text-left">
                        от 60000 до 90000 рублей
                    </span>
                </div>
                <Link href='/lading'><Button className="w-full cursor-pointer" variant='default'>Подробнее</Button></Link>
            </div>

            <Image
                className="rounded-4xl w-full md:w-175 h-auto"
                src="/image/g.png"
                width={700}
                height={400}
                alt="Погрузка груза"
            />
        </div>
    );
}
