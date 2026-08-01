"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

import { sortOptions } from "@/utils/sort-options";
import updateSearchParams from "@/utils/updateSearchParams";

interface SelectionProps {
    searchParams: Record<string, string | string[] | undefined>;
}

const Selection = ({ searchParams }: SelectionProps) => {
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        router.push(
            `/products?${updateSearchParams({
                searchParams,
                updates: {
                    sort: e.target.value,
                },
            })}`,
        );
    };

    return (
        <select
            defaultValue={
                typeof searchParams.sort === "string"
                    ? searchParams.sort
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

export default Selection;
