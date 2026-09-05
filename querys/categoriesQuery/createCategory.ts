import { ApiError } from "@/lib/errors/ApiError";
import {
    CategoryMutationResponse,
    CategoryMutationResponseSchema,
} from "@/schemas/categorys/categoryMutationResponse";

type CreateCategoryPayload = {
    name: string;
    icon?: string;
    parent?: string | null;
};

const createCategory = async (
    payload: CreateCategoryPayload,
): Promise<CategoryMutationResponse> => {
    const response = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

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

    const result = CategoryMutationResponseSchema.safeParse(data);

    if (!result.success) {
        throw new ApiError({
            message: "Category response validation failed",
            status: 500,
        });
    }

    return result.data;
};

export default createCategory;
