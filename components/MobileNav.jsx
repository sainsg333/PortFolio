'use client';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-16 mb-20 text-center text-2xl">
                    <Link href="/" onClick={handleLinkClick}>
                        <h1 className="text-4xl font-semibold">
                            Sai Nsg<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-10">
                    {links.map((link, index) => {
                        return (
                            <Link 
                                key={index} 
                                href={link.path} 
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                                    text-xl capitalize font-medium hover:text-accent transition-all`} 
                                onClick={handleLinkClick} 
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
