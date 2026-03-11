import { Mail } from "lucide-react";
import CopyEmail from "@/components/web/email";
import Diadoc from "@/components/web/diadoc";
const Footer = () => {
    return (
        <div className="p-4 pt-16 md:p-12 flex-col justify-between border-t">
            <div className="md:flex md:justify-between gap-4 mb-6">
                <div className="mb-8">
                    <span className="flex gap-2 items-center text-2xl md:text-4xl">
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

            <div className="md:flex md:justify-between flex-col"></div>
        </div>
    );
};

export default Footer;
