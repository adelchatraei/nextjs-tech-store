"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const SearchBoxHeader = () => {
    const pathName = usePathname();
    const { replace } = useRouter();
    const searchParam = useSearchParams();
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleChange = (event: string) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            const param = new URLSearchParams(searchParam);
            if (event) {
                param.set("search", event);
            } else {
                param.delete("search");
            }
            replace(`${pathName}?${param.toString()}`);
        }, 700);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/10 transition-all">
            <Search
                // onClick={handleSearchClick}
                size={18}
                className=" text-gray-400 cursor-pointer hover:text-primary transition-colors"
            />
            <input
                type="text"
                placeholder="Find enything..."
                defaultValue={searchParam.get("search")?.trim().toString()}
                onChange={(e) => handleChange(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm font-medium w-32 xl:w-48 placeholder:text-gray-400 outline-none"
            />
        </div>
    );
};

export default SearchBoxHeader;
