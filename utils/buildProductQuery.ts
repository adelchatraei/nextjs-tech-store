import {
    DEFAULT_PRODUCT_FILTERS,
    ProductFilterType,
} from "@/types/ProductFiltersType";

const buildProductQuery = (filter: ProductFilterType): string => {
    const queryParams = new URLSearchParams();

    if (filter.page !== DEFAULT_PRODUCT_FILTERS.page) {
        queryParams.set("page", String(filter.page));
    }

    if (filter.sort !== DEFAULT_PRODUCT_FILTERS.sort) {
        queryParams.set("sort", filter.sort);
    }

    if (filter.slug !== null) {
        queryParams.set("slug", filter.slug);
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

export default buildProductQuery;
