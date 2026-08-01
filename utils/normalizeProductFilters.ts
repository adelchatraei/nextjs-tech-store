import {
    DEFAULT_PRODUCT_FILTERS,
    ProductFilterType,
    RawProductFilters,
} from "../types/ProductFiltersType";
import {
    isSortType,
    isViewType,
} from "../app/(main)/products/_validators/productFilters";
import normalizeNumber from "./normalizeNumber";

const normalizeProductFilters = (
    searchParams: RawProductFilters,
): ProductFilterType => {
    const { page, slug, sort, view, search, maxPrice, minPrice } = searchParams;
    // normalize page
    const pageNumber = normalizeNumber(page);
    const isInvalidPage =
        pageNumber === undefined ||
        !Number.isInteger(pageNumber) ||
        pageNumber <= 0;

    const normalizedPage = isInvalidPage
        ? DEFAULT_PRODUCT_FILTERS.page
        : pageNumber;

    // normalize sort
    const isInvalidSort = !sort || !isSortType(sort);
    const normalizedSort = isInvalidSort ? DEFAULT_PRODUCT_FILTERS.sort : sort;

    // normalize view
    const isInvalidView = !view || !isViewType(view);
    const normalizedView = isInvalidView ? DEFAULT_PRODUCT_FILTERS.view : view;

    // normalize category-slug
    const normalizedSlug = slug || null;

    //normalized search
    const isInvalidSearch = search?.trim() === "" || search === undefined;
    const normalizedSearch = isInvalidSearch
        ? DEFAULT_PRODUCT_FILTERS.search
        : search?.trim();

    //normalized min & max price
    const normalizedMinPrice = normalizeNumber(minPrice) ?? null;

    const normalizedMaxPrice = normalizeNumber(maxPrice) ?? null;
    return {
        page: normalizedPage,
        sort: normalizedSort,
        slug: normalizedSlug,
        view: normalizedView,
        search: normalizedSearch,
        minPrice: normalizedMinPrice,
        maxPrice: normalizedMaxPrice,
    };
};

export default normalizeProductFilters;
