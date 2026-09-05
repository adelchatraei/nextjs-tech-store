"use client";

import { Filter, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type ProductsToolbarProps = {
    totalProducts: number;
};

const ProductsToolbar = ({ totalProducts }: ProductsToolbarProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") ?? "");

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString());

        if (search.trim()) {
            params.set("search", search.trim());
        } else {
            params.delete("search");
        }
        params.delete("page");

        router.push(`?${params.toString()}`);
    };

    return (
        <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}

            <div className="relative w-full md:w-82.5 group">
                <Search
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"
                />

                <input
                    type="text"
                    placeholder="Search catalog..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl border border-transparent outline-none text-sm font-medium placeholder:text-gray-300 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                />
            </div>

            {/* Right controls */}

            <div className="flex items-center justify-between md:justify-end gap-4">
                <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-xl text-[10px] font-black text-gray-500 uppercase tracking-wider hover:bg-primary/5 hover:text-primary transition-all"
                >
                    <Filter size={14} />

                    <span>FILTER</span>
                </button>

                <span className="text-xs font-bold text-gray-500 whitespace-nowrap">
                    {totalProducts} Items
                </span>
            </div>
        </div>
    );
};

export default ProductsToolbar;
