import { z } from "zod";

export const CategoryMutationResponseSchema = z.object({
    _id: z.string(),
    name: z.string(),
    slug: z.string(),
    icon: z.string(),
    parent: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type CategoryMutationResponse = z.infer<
    typeof CategoryMutationResponseSchema
>;
