"use client";

import { sortOptions } from "@/utils/sort-options";
import updateSearchParams from "@/utils/updateSearchParams";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

interface ProductSortProps {
    searchParam: Record<string, string | string[] | undefined>;
}

const ProductSort = ({ searchParam }: ProductSortProps) => {
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        router.push(
            `?${updateSearchParams({
                searchParams: searchParam,
                updates: {
                    sort: e.target.value,
                },
            })}`,
            { scroll: false },
        );
    };

    return (
        <select
            defaultValue={
                typeof searchParam.sort === "string"
                    ? searchParam.sort
                    : "newest"
            }
            onChange={handleChange}
            className="rounded-md p-1 text-[12px] font-bold bg-white outline-none hover:cursor-pointer hover:text-primary"
        >
            {sortOptions.map((option) => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default ProductSort;
