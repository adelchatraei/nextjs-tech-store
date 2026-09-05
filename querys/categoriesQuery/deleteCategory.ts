import { ApiError } from "@/lib/errors/ApiError";
import {
    CategoryDeleteResponse,
    CategoryDeleteResponseSchema,
} from "@/schemas/categorys/categoryDeleteResponse";

const deleteCategory = async (id: string): Promise<CategoryDeleteResponse> => {
    const url = `http://localhost:3000/api/categories?id=${encodeURIComponent(id)}`;

    const response = await fetch(url, {
        method: "DELETE",
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type");

        if (contentType?.includes("application/json")) {
            const error = await response.json();

            throw new ApiError({
                message:
                    error.error || error.message || "Failed to delete category",
                status: response.status,
            });
        }

        throw new ApiError({
            message: "Unexpected server response",
            status: response.status,
        });
    }

    const data = await response.json();

    const result = CategoryDeleteResponseSchema.safeParse(data);

    if (!result.success) {
        throw new ApiError({
            message: "Response validation failed",
            status: 500,
        });
    }

    return result.data;
};

export default deleteCategory;
