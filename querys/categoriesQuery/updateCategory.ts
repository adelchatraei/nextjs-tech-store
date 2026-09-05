import { ApiError } from "@/lib/errors/ApiError";
import { CategorySchema } from "@/schemas/categorys/categoryResponse";

type UpdateCategoryInput = {
    id: string;
    name: string;
    icon?: string;
    parent: string | null;
};

const updateCategory = async (data: UpdateCategoryInput) => {
    const response = await fetch("http://localhost:3000/api/categories", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type");

        if (contentType?.includes("application/json")) {
            const error = await response.json();

            throw new ApiError({
                message:
                    error.error || error.message || "Failed to update category",
                status: response.status,
            });
        }

        throw new ApiError({
            message: "Unexpected server response",
            status: response.status,
        });
    }

    const result = await response.json();

    const validation = CategorySchema.safeParse(result);

    if (!validation.success) {
        throw new ApiError({
            message: "Response validation failed",
            status: 500,
        });
    }

    return validation.data;
};

export default updateCategory;
