import { SortType } from "./ProductFiltersType";

export interface AdminProductFilterType {
    page: number;
    limit: number;
    sort: SortType;
    category: string | null;
    search: string | null;
    minPrice: number | null;
    maxPrice: number | null;
}

export const DEFAULT_ADMIN_PRODUCT_FILTERS: AdminProductFilterType = {
    page: 1,
    limit: 12,
    sort: "newest",
    category: null,
    search: null,
    minPrice: null,
    maxPrice: null,
};
