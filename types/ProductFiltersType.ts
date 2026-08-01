export const VALID_SORTS = ["newest", "price-asc", "price-desc"] as const;
export type SortType = (typeof VALID_SORTS)[number];

export const VALID_VIEWS = ["grid", "list"] as const;
export type ViewType = (typeof VALID_VIEWS)[number];

export interface RawProductFilters {
    page?: string;
    sort?: string;
    view?: string;
    slug?: string;
    search?: string;
    minPrice?: string;
    maxPrice?: string;
}
export interface ProductFilterType {
    page: number;
    sort: SortType;
    view: ViewType;
    slug: string | null;
    search: string | null;
    minPrice: number | null;
    maxPrice: number | null;
}

export const DEFAULT_PRODUCT_FILTERS: ProductFilterType = {
    page: 1,
    sort: "newest",
    view: "grid",
    slug: null,
    search: null,
    minPrice: null,
    maxPrice: null,
};
