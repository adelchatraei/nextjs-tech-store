import { z } from "zod";

export const UpdateProductSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),

    price: z.number().optional(),
    regularPrice: z.number().optional(),

    images: z.array(z.string()).optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    subCategory: z.string().optional(),

    brand: z.string().optional(),
    modelName: z.string().optional(),
    warranty: z.string().optional(),
    specifications: z.string().optional(),

    stock: z.number().optional(),
});

export type UpdateProductType = z.infer<typeof UpdateProductSchema>;
