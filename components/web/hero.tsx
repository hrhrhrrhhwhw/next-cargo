import Image from "next/image";
import HeroImage from "@/public/img.webp";
import RZD from "@/public/rzd-logo.svg";
import CopyEmail from "@/components/web/email";
import { Mail } from "lucide-react";

export default function Hero() {
    return (
        <div className="p-4 lg:py-5 lg:px-12 lg:flex lg:gap-10 lg:items-center">
            <div className="max-w-2xl lg:max-w-96 flex flex-col gap-4">
                <h1 className="font-medium text-3xl pb-4 border-b border-red-800">Железнодорожные перевозки грузов</h1>
                <p className="text-lg">
                    «12КАРГО» осуществляет предоставление вагонов для перевозки грузов, в{" "}
                    <b>полувагонах, крытых вагонах и цистернах.</b>
                </p>
                <p className="flex gap-2 items-center text-lg">
                    Стань участником перевозок на
                    <span>
                        <Image src={RZD} alt="RZD" width={50} height={34} />
                    </span>
                </p>
                <p className="text-md">
                    Для уточнения деталей и стоимости перевозки, отправьте сообщение на электронный адрес:{" "}
                    <span className="flex gap-2 items-center">
                        <Mail />
                        <CopyEmail />
                    </span>
                </p>
                <div className="flex items-center mb-4">
                    <a
                        href="https://wa.me/79600806661"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-red-800 text-white rounded-md hover:bg-black cursor-pointer"
                    >
                        Оставить заявку →
                    </a>
                </div>
            </div>
            <div>
                <Image src={HeroImage} alt="asd" loading="eager" />
            </div>
        </div>
    );
}
