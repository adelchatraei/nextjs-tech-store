import generatePagination from "@/utils/generate-pagination";
import PaginationPrevious from "./PaginationPrevious";
import PaginationNumbers from "./PaginationNumbers";
import PaginationNext from "./PaginationNext";

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    searchParams: Record<string, string | string[] | undefined>;
}
const Pagination = ({
    currentPage,
    totalPages,
    searchParams,
}: PaginationProps) => {
    const pages = generatePagination(currentPage, totalPages);

    return (
        <article className="flex items-center justify-center gap-2 mt-16">
            <PaginationPrevious
                currentPage={currentPage}
                searchParams={searchParams}
            />

            <PaginationNumbers
                pages={pages}
                currentPage={currentPage}
                searchParams={searchParams}
            />

            <PaginationNext
                currentPage={currentPage}
                totalPages={totalPages}
                searchParams={searchParams}
            />
        </article>
    );
};

export default Pagination;
