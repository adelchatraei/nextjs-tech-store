import { PaginationItem } from "@/utils/generate-pagination";
import updateSearchParams from "@/utils/updateSearchParams";
import Link from "next/link";

interface PaginationNumbersProps {
    pages: PaginationItem[];
    currentPage: number;
    searchParams: Record<string, string | string[] | undefined>;
}

const PaginationNumbers = ({
    pages,
    currentPage,
    searchParams,
}: PaginationNumbersProps) => {
    return (
        <div className="flex items-center gap-1 mx-4">
            {pages.map((page, index) => {
                const isActive = page === currentPage;
                if (page === "...") {
                    return (
                        <span
                            className="text-gray-400 text-2xl"
                            key={`i${index}`}
                        >
                            ...
                        </span>
                    );
                }

                return (
                    <Link
                        href={`/products?${updateSearchParams({
                            searchParams,
                            updates: {
                                page: page?.toString(),
                            },
                        })}`}
                        className={`w-10 h-10 rounded-xl text-[10px] font-black transition-all cursor-pointer flex justify-center items-center ${isActive ? "bg-primary text-white shadow-lg shadow-primary/20 scale-110" : "bg-white text-gray-400 border border-gray-100 hover:bg-gray-50"}`}
                        key={`page-${page}-${index}`}
                    >
                        {page}
                    </Link>
                );
            })}
        </div>
    );
};

export default PaginationNumbers;
