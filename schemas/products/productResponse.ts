import { z } from "zod";
import { ProductSchema } from "./product";

export const ProductsResponseSchema = z.object({
    products: z.array(ProductSchema),
    totalPages: z.number(),
    currentPage: z.number(),
    totalProducts: z.number(),
});

export type ProductsResponse = z.infer<typeof ProductsResponseSchema>;
