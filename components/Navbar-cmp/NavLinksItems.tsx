"use client";

import Link from "next/link";
import { DetailsProps } from "./NavLinks";
import { usePathname } from "next/navigation";

interface NavLinksItemsProps {
    data: DetailsProps;
}

const NavLinksItems = ({ data }: NavLinksItemsProps) => {
    const path = usePathname();

    const isActive = path === data.url;
    return (
        <Link
            href={data.url}
            className={`text-sm font-bold flex items-center gap-2 transition-all relative group py-2 hover:text-primary ${isActive ? " text-primary" : "text-gray-500"}`}
            key={data.id}
        >
            {data.icon} {data.name}
            <span
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
            ></span>
        </Link>
    );
};

export default NavLinksItems;
