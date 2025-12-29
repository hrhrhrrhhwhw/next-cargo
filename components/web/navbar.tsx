import Link from "next/link";

import { ThemeToggle } from '@/components/web/theme-toggle'


export default function Navbar() {
    return (
        <nav className="w-full justify-between font-bold md:px-12 items-center p-4 flex flex-col gap-4 md:flex-row md">
            <div className="text-center">
               <Link href='/'>
                    <span className="text-3xl font-extrabold">12<span className="text-red-800">CARGO</span></span>
               </Link>
            </div>
            <div className="flex gap-2">
                <Link className="hover:text-red-800 p-2" href='/about'>О нас</Link>
                <Link className="hover:text-red-800 p-2" href='/work'>Вакансии</Link>
                <Link className="hover:text-red-800 p-2" href='/contact'>Контакты</Link>
                <ThemeToggle />
            </div>
            
        </nav>
    )
}