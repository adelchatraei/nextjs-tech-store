import { z } from "zod";

export const ReviewSchema = z.object({
    userId: z.string(),
    name: z.string(),
    email: z.string(),
    rating: z.number(),
    comment: z.string(),
    createdAt: z.string(),
});

export type Review = z.infer<typeof ReviewSchema>;
