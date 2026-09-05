import { z } from "zod";

export const CategorySchema = z.object({
    _id: z.string(),
    name: z.string(),
    slug: z.string(),
    icon: z.string().optional(),
    parent: z.string().nullable(),
    productCount: z.number().optional(),
});

export const CategoryResponseSchema = z.array(CategorySchema);

export type CategoryResponse = z.infer<typeof CategoryResponseSchema>;

export type Category = z.infer<typeof CategorySchema>;
