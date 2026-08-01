//PaginationNext
import updateSearchParams from "@/utils/updateSearchParams";
import Link from "next/link";

interface PaginationNextProps {
    currentPage: number;
    totalPages: number;
    searchParams: Record<string, string | string[] | undefined>;
}

const PaginationNext = ({
    currentPage,
    totalPages,
    searchParams,
}: PaginationNextProps) => {
    const paginationButtonClass =
        "px-6 py-3 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm";

    const hasNext = currentPage < totalPages;
    return (
        <>
            {hasNext ? (
                <Link
                    href={`/products?${updateSearchParams({
                        searchParams,
                        updates: {
                            page: (currentPage + 1).toString(),
                        },
                    })}`}
                    className={`${paginationButtonClass} text-gray-500 hover:text-primary hover:border-primary active:scale-95`}
                >
                    Next
                </Link>
            ) : (
                <span
                    className={`${paginationButtonClass} opacity-30 cursor-not-allowed text-gray-500`}
                >
                    Next
                </span>
            )}
        </>
    );
};

export default PaginationNext;
