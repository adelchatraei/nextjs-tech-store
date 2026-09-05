import { z } from "zod";

export const CategoryDeleteResponseSchema = z.object({
    message: z.string(),
    error: z.string().optional(),
});

export type CategoryDeleteResponse = z.infer<
    typeof CategoryDeleteResponseSchema
>;
