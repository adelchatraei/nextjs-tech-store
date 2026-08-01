"use client";

import validationPriceFilter from "@/app/(main)/products/_validators/validationPriceFilter";
import updateSearchParams from "@/utils/updateSearchParams";
import { DotIcon, TrendingUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type PriceFilterProps = {
    searchParams: Record<string, string | string[] | undefined>;
};

const PriceFilter = ({ searchParams }: PriceFilterProps) => {
    const router = useRouter();
    const pathName = usePathname();

    const [minPrice, setMinPrice] = useState(
        typeof searchParams.minPrice === "string" ? searchParams.minPrice : "",
    );
    const [maxPrice, setMaxPrice] = useState(
        typeof searchParams.maxPrice === "string" ? searchParams.maxPrice : "",
    );

    const showActions = minPrice !== "" || maxPrice !== "";

    const validationError = validationPriceFilter(minPrice, maxPrice);

    const handleApply = () => {
        if (validationError) return;

        router.push(
            `${pathName}?${updateSearchParams({
                searchParams,
                updates: {
                    minPrice,
                    maxPrice,
                    page: "1",
                },
            })}`,
        );
    };

    const handleReset = () => {
        setMinPrice("");
        setMaxPrice("");

        router.push(
            `${pathName}?${updateSearchParams({
                searchParams,
                updates: {
                    minPrice: undefined,
                    maxPrice: undefined,
                    page: "1",
                },
            })}`,
        );
    };

    return (
        <>
            <h3 className="text-xs font-bold uppercase tracking-[2px] text-slate-400 mb-6 flex items-center gap-2">
                <TrendingUp size={14} />
                Price Rang
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-2">
                    <label
                        form="min-p"
                        className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                    >
                        min ($)
                    </label>
                    <input
                        name="min-p"
                        type="text"
                        inputMode="numeric"
                        value={minPrice}
                        onChange={(e) =>
                            setMinPrice(e.target.value.replace(/\D/g, ""))
                        }
                        placeholder="0"
                        className="w-full px-4 py-3 bg-gray-50/50 border border-transparent rounded-xl focus:bg-white focus:border-primary transition-all text-sm font-bold outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        form="max-p"
                        className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1"
                    >
                        max ($)
                    </label>
                    <input
                        name="max-p"
                        type="text"
                        inputMode="numeric"
                        value={maxPrice}
                        onChange={(e) =>
                            setMaxPrice(e.target.value.replace(/\D/g, ""))
                        }
                        placeholder="1K+"
                        className="w-full px-4 py-3 bg-gray-50/50 border border-transparent rounded-xl focus:bg-white focus:border-primary transition-all text-sm font-bold outline-none"
                    />
                </div>
            </div>
            {validationError && (
                <div className="flex gap-1">
                    <DotIcon size={40} className="text-red-500" />
                    <p className="text-sm text-red-500">{validationError}</p>
                </div>
            )}

            {showActions && (
                <div className="flex gap-3">
                    <button
                        className="py-2 px-4 bg-primary text-[10px] font-bold text-white uppercase hover:shadow-xl/20 rounded-md"
                        type="button"
                        onClick={handleApply}
                    >
                        Apply
                    </button>
                    <button
                        className="py-2 px-4 bg-red-400 text-[10px] font-bold text-white uppercase hover:shadow-xl/20 rounded-md"
                        type="button"
                        onClick={handleReset}
                    >
                        reset price
                    </button>
                </div>
            )}
        </>
    );
};

export default PriceFilter;
