"use client";

import { Heart, Home, LayoutGrid, LifeBuoy, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const menuItems = [
    { label: "Home", href: "/", icon: <Home size={18} /> },
    { label: "Collaction", href: "/products", icon: <LayoutGrid size={18} /> },
    { label: "Support", href: "/support", icon: <LifeBuoy size={18} /> },
    { label: "Wishlist", href: "/wishlist", icon: <Heart size={18} /> },
];

const emptySubscribe = () => () => {};

const useIsClient = () =>
    useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false,
    );

const HamburgerMenuIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isMounted = useIsClient();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const drowerContent = (
        <div
            onClick={() => setIsOpen(false)}
            className={`fixed inset-0 bg-black/50 z-200 transition-opacity duration-300 ${
                isOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
            }`}
        >
            <nav
                className={`fixed top-0 right-0 h-full w-3/5 max-w-95 bg-white z-300
          shadow-[-4px_0_20px_rgba(0,0,0,0.15)] overflow-y-auto
          transition-transform duration-300 ease-in-out rounded-l-2xl border-l-2 border-primary/70
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <span className="text-lg text-primary sm:text-2xl tracking-tighter font-bold">
                        Tech
                        <span className="text-foreground">Stor</span>
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        <div className="p-1 bg-neutral-100 rounded-md">
                            <X className="w-6 h-6 text-red-400" />
                        </div>
                    </button>
                </div>
                <ul className="flex flex-col p-4 gap-2">
                    {menuItems.map((item) => {
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className=" flex gap-4 px-4 py-3 rounded-lg hover:bg-neutral-100 text-gray-700"
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center bg-primary text-white">
                                        {item.icon}
                                    </div>
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );

    return (
        <>
            <button
                className="p-2 sm:p-2.5 bg-gray-50 text-gray-500 rounded-xl sm:rounded-2xl lg:hidden hover:bg-white border border-transparent hover:border-gray-100 transition-all"
                onClick={() => setIsOpen(true)}
                aria-label="Menu"
            >
                <Menu size={20} className="sm:w-5.5 sm:h-5.5" />
            </button>

            {isMounted && createPortal(drowerContent, document.body)}
        </>
    );
};

export default HamburgerMenuIcon;
