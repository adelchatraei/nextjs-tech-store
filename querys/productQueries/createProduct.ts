import { Product, ProductSchema } from "@/schemas/products/product";
import { ApiError } from "@/lib/errors/ApiError";
import { CreateProductType } from "@/schemas/products/CreateProduct";

const createProduct = async (product: CreateProductType): Promise<Product> => {
    const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        const contentType = response.headers.get("content-type");

        if (contentType?.includes("application/json")) {
            const error = await response.json();

            throw new ApiError({
                message: error.error ?? "Failed to create product",
                status: response.status,
            });
        }

        throw new ApiError({
            message: "Unexpected server response",
            status: response.status,
        });
    }

    const data = await response.json();

    const result = ProductSchema.safeParse(data);

    if (!result.success) {
        throw new ApiError({
            message: "Response validation failed",
            status: 500,
        });
    }

    return result.data;
};

export default createProduct;
