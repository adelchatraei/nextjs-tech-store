import { z } from "zod";
import { ReviewSchema } from "./review";

export const ProductSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    regularPrice: z.number(),
    images: z.array(z.string()),
    image: z.string(),
    category: z.string(),
    subCategory: z.string(),
    brand: z.string(),
    modelName: z.string(),
    warranty: z.string(),
    specifications: z.string(),
    stock: z.number(),
    _id: z.string(),
    reviews: z.array(ReviewSchema),
    avgRating: z.number(),
    numReviews: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;
