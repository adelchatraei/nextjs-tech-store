import { AdminProductFilterType } from "@/types/AdminProductFiltersType";

const buildAdminProductQuery = (filter: AdminProductFilterType): string => {
    const queryParams = new URLSearchParams();

    if (filter.page !== 1) {
        queryParams.set("page", String(filter.page));
    }

    if (filter.limit !== 12) {
        queryParams.set("limit", String(filter.limit));
    }

    if (filter.sort !== "newest") {
        queryParams.set("sort", filter.sort);
    }

    if (filter.category !== null) {
        queryParams.set("category", filter.category);
    }

    if (filter.search !== null) {
        queryParams.set("search", filter.search);
    }

    if (filter.minPrice !== null) {
        queryParams.set("minPrice", String(filter.minPrice));
    }

    if (filter.maxPrice !== null) {
        queryParams.set("maxPrice", String(filter.maxPrice));
    }

    return queryParams.toString();
};

export default buildAdminProductQuery;
