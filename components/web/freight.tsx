import Image from "next/image";

const IMAGES = [
    { id: 1, url: "/image/lom.png", name: "Лом" },
    { id: 2, url: "/image/pilomaterialy.png", name: "Пиломатериалы" },
    { id: 3, url: "/image/sheben.png", name: "Щебень" },
    { id: 4, url: "/image/smesi.png", name: "Смеси сухие строительные" },
    { id: 5, url: "/image/tnp.png", name: "ТНП" },
    { id: 6, url: "/image/truba.png", name: "Трубы" },
    { id: 7, url: "/image/ugol.png", name: "Уголь" },
];

export default function Freight() {
    return (
        <div className="flex gap-2 overflow-x-auto px-2 items-center pt-5 pb-15">
            {IMAGES.map((i) => (
                <div key={i.id} className="flex flex-col items-center md:mx-auto w-40 shrink-0">
                    <Image
                        className="rounded-full"
                        src={i.url}
                        alt={i.name}
                        width={100}
                        height={100}
                    />
                    <p className="mt-2 text-center text-base font-bold">{i.name}</p>
                </div>
            ))}
        </div>
    );
}
