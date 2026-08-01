"use client";

import useDebounce from "@/hooks/useDebounce";
import updateSearchParams from "@/utils/updateSearchParams";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type SearchParamProps = {
    searchParams: Record<string, string | string[] | undefined>;
};

const SearchFilter = ({ searchParams }: SearchParamProps) => {
    const isFirstRender = useRef(true);
    const router = useRouter();
    const pathname = usePathname();
    const [search, setSearch] = useState(
        typeof searchParams.search === "string" ? searchParams.search : "",
    );

    const debouncedSearch = useDebounce({ value: search, delay: 700 });

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        const currentSearch =
            typeof searchParams.search === "string" ? searchParams.search : "";

        if (currentSearch === debouncedSearch) {
            return;
        }

        router.replace(
            `${pathname}?${updateSearchParams({
                searchParams,
                updates: {
                    search: debouncedSearch,
                    page: "1",
                },
            })}`,
            {
                scroll: false,
            },
        );
    }, [debouncedSearch, router, pathname, searchParams]);

    return (
        <div className="relative group">
            <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"
            />
            <input
                type="text"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-transparent rounded-2xl focus:bg-white focus:border-primary transition-all text-sm font-semibold outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Products..."
            />
        </div>
    );
};

export default SearchFilter;
