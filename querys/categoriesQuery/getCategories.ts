import { ApiError } from "@/lib/errors/ApiError";
import {
    CategoryResponse,
    CategoryResponseSchema,
} from "@/schemas/categorys/categoryResponse";

const getCategories = async (): Promise<CategoryResponse> => {
    const url = "http://localhost:3000/api/categories";

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

    const result = CategoryResponseSchema.safeParse(data);

    if (!result.success) {
        throw new ApiError({
            message: "Category response validation failed",
            status: 500,
        });
    }

    return result.data;
};

export default getCategories;
