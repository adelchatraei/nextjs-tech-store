//PaginationPrevious
import updateSearchParams from "@/utils/updateSearchParams";
import Link from "next/link";

interface PaginationPreviousProps {
    currentPage: number;
    searchParams: Record<string, string | string[] | undefined>;
}

const PaginationPrevious = ({
    currentPage,
    searchParams,
}: PaginationPreviousProps) => {
    const hasPrevious = currentPage > 1;

    const paginationButtonClass =
        "px-6 py-3 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm";

    return (
        <>
            {hasPrevious ? (
                <Link
                    href={`/products?${updateSearchParams({
                        searchParams,
                        updates: {
                            page: (currentPage - 1).toString(),
                        },
                    })}`}
                    className={`${paginationButtonClass} text-gray-500 hover:text-primary hover:border-primary active:scale-95`}
                >
                    Previous
                </Link>
            ) : (
                <span
                    className={`${paginationButtonClass} opacity-30 cursor-not-allowed text-gray-500`}
                >
                    Previous
                </span>
            )}
        </>
    );
};

export default PaginationPrevious;
