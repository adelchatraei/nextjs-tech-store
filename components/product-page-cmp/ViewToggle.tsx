"use client";

import { LayoutGrid, List } from "lucide-react";
import { useRouter } from "next/navigation";
import updateSearchParams from "@/utils/updateSearchParams";

type ViewToggleProps = {
    searchParams: Record<string, string | string[] | undefined>;
};

export default function ViewToggle({ searchParams }: ViewToggleProps) {
    const router = useRouter();

    const activeView =
        typeof searchParams.view === "string" ? searchParams.view : "grid";

    const handleViewChange = (view: "grid" | "list") => {
        router.replace(
            `/products?${updateSearchParams({
                searchParams,
                updates: {
                    view,
                },
            })}`,
        );
    };

    return (
        <div className="flex items-center gap-3 p-1 bg-gray-50 rounded-2xl w-fit">
            <button
                onClick={() => handleViewChange("grid")}
                className={`p-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-xl/20 ${
                    activeView === "grid"
                        ? "bg-primary text-white shadow-md scale-105"
                        : "bg-white text-gray-400 border border-gray-200 hover:text-primary"
                }`}
                aria-label="Grid view"
            >
                <LayoutGrid size={20} />
            </button>

            <button
                onClick={() => handleViewChange("list")}
                className={`p-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-xl/20 ${
                    activeView === "list"
                        ? "bg-primary text-white shadow-md scale-105"
                        : "bg-white text-gray-400 border border-gray-200 hover:text-primary"
                }`}
                aria-label="List view"
            >
                <List size={20} />
            </button>
        </div>
    );
}
