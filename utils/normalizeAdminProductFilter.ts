import {
    DEFAULT_ADMIN_PRODUCT_FILTERS,
    AdminProductFilterType,
} from "@/types/AdminProductFiltersType";

import { VALID_SORTS } from "@/types/ProductFiltersType";

type AdminProductSearchParams = {
    page?: string;
    sort?: string;
    category?: string;
    search?: string;
    minPrice?: string;
    maxPrice?: string;
};

const normalizeAdminProductFilter = (
    searchParams: AdminProductSearchParams,
): AdminProductFilterType => {
    const page = Number(searchParams.page);
    const minPrice = Number(searchParams.minPrice);
    const maxPrice = Number(searchParams.maxPrice);

    const sort = VALID_SORTS.includes(
        searchParams.sort as (typeof VALID_SORTS)[number],
    )
        ? (searchParams.sort as AdminProductFilterType["sort"])
        : DEFAULT_ADMIN_PRODUCT_FILTERS.sort;

    return {
        ...DEFAULT_ADMIN_PRODUCT_FILTERS,

        page:
            Number.isInteger(page) && page > 0
                ? page
                : DEFAULT_ADMIN_PRODUCT_FILTERS.page,

        sort,

        category: searchParams.category?.trim() || null,

        search: searchParams.search?.trim() || null,

        minPrice: Number.isFinite(minPrice) && minPrice >= 0 ? minPrice : null,

        maxPrice: Number.isFinite(maxPrice) && maxPrice >= 0 ? maxPrice : null,
    };
};

export default normalizeAdminProductFilter;
