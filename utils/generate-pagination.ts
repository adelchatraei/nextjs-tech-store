export type PaginationItem = number | "...";

export default function generatePagination(
    currentPage: number,
    totalPages: number,
): PaginationItem[] {
    const pages: PaginationItem[] = [];
    // First model
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        return pages;
    }

    // Second model
    if (currentPage <= 3) {
        const endPage = Math.max(3, currentPage + 1);
        for (let i = 1; i <= endPage; i++) {
            pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);

        return pages;
    }

    //Fourth model
    if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");

        const startPage = Math.min(currentPage - 1, totalPages - 2);

        for (let i = startPage; i <= totalPages; i++) {
            pages.push(i);
        }

        return pages;
    }

    //Third model

    const siblingCount = 1;

    const startPage = currentPage - siblingCount;
    const endPage = currentPage + siblingCount;

    pages.push(1);
    pages.push("...");
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
    pages.push("...");
    pages.push(totalPages);
    return pages;
}
