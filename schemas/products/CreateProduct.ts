import { z } from "zod";
export const CreateProductSchema = z
    .object({
        name: z.string(),
        description: z.string(),
        price: z.number().min(0, "Price cannot be negative"),
        regularPrice: z.number().min(0, "Regular price cannot be negative"),
        images: z.array(z.string()),
        image: z.string(),
        category: z.string(),
        subCategory: z.string(),
        brand: z.string(),
        modelName: z.string().trim().min(1, "Model Reference is required"),
        warranty: z.string(),
        specifications: z
            .string()
            .trim()
            .min(1, "Technical Details is required"),
        stock: z
            .number()
            .int("Stock must be a whole number")
            .min(0, "Stock cannot be negative"),
    })
    .refine((data) => data.price <= data.regularPrice, {
        message: "Price cannot be greater than regular price",
        path: ["price"],
    });

export type CreateProductType = z.infer<typeof CreateProductSchema>;
