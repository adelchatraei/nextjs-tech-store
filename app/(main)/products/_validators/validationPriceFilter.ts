const validationPriceFilter = (minPrice: string, maxPrice: string) => {
    const min = Number(minPrice);
    const max = Number(maxPrice);

    if (minPrice && min < 0) {
        return "Minimum price cannot be negative.";
    }

    if (maxPrice && max < 1000) {
        return "The maximum price cannot be less than 1K";
    }

    if (minPrice && maxPrice && min > max) {
        return "Minimum price cannot be greater than maximum price.";
    }

    return "";
};

export default validationPriceFilter;
