import { ProductFilterType } from "@/types/ProductFiltersType";
import { ApiError } from "@/lib/errors/ApiError";
import {
    ProductsResponse,
    ProductsResponseSchema,
} from "@/schemas/products/productResponse";
import buildProductQuery from "@/utils/buildProductQuery";

const getProducts = async (
    filter: ProductFilterType,
): Promise<ProductsResponse> => {
    const queryString = buildProductQuery(filter);

    const url = queryString
        ? `http://localhost:3000/api/products?${queryString}`
        : "http://localhost:3000/api/products";

    const response = await fetch(url);
    if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType?.includes("application/json")) {
            const error = await response.json();

            throw new ApiError({
                message: error.error,
                status: response.status,
            });
        }

        throw new ApiError({
            message: "Unexpected server response",
            status: response.status,
        });
    }

    const data = await response.json();
    const result = ProductsResponseSchema.safeParse(data);

    if (!result.success) {
        console.log("RAW DATA:", JSON.stringify(data, null, 2));
        console.log(
            "ZOD ERRORS:",
            JSON.stringify(result.error.issues, null, 2),
        );
        throw new ApiError({
            message: "Response validation failed",
            status: 500,
        });
    }

    if (!result.success) {
        throw new ApiError({
            message: "Response validation failed",
            status: 500,
        });
    }

    return result.data;
};

export default getProducts;
