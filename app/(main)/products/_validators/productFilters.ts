import {
    SortType,
    VALID_SORTS,
    VALID_VIEWS,
    ViewType,
} from "@/types/ProductFiltersType";

export const isSortType = (value: string): value is SortType => {
    const isValid = VALID_SORTS.includes(value as SortType);
    return isValid;
};

export const isViewType = (value: string): value is ViewType => {
    const isValid = VALID_VIEWS.includes(value as ViewType);
    return isValid;
};
