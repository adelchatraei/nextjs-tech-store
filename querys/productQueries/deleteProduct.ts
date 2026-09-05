import { ApiError } from "@/lib/errors/ApiError";

const deleteProduct = async (productId: string): Promise<void> => {
    const response = await fetch(
        `http://localhost:3000/api/products/${productId}`,
        {
            method: "DELETE",
        },
    );

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
};

export default deleteProduct;
