import Link from "next/link";

import { ThemeToggle } from "@/components/web/theme-toggle";
import { Button } from "../ui/button";

const NAVLINK = [
    { name: "Вакансии", url: '/work' },
    { name: "Погрузка", url: '/lading' },
    { name: "Документация", url: '/documentation' },
    { name: "Контакты", url: '/contact' },
];

export default function Navbar() {
    return (
        <nav className="flex justify-between md:px-10 items-center p-4 gap-4 md:flex-row md">
            <div className="text-center">
                <Link href="/">
                    <span className="text-2xl md:text-4xl font-extrabold">
                        12<span className="text-primary">CARGO</span>
                    </span>
                </Link>
            </div>
            <div className="hidden md:flex gap-5 font-semibold items-center">
                {NAVLINK.map((n) => (
                    <Link key={n.name} className="hover:text-primary uppercase" href={n.url}>
                        {n.name}
                    </Link>
                ))}
                <ThemeToggle />
            </div>
            <Link href="/order">
                <Button variant="outline">Оставить заявку</Button>
            </Link>
        </nav>
    );
}
