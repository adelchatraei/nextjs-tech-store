import { z } from "zod";

export const HeroSlideSchema = z.object({
    badge: z.string().trim().min(1),
    headlinePrimary: z.string().trim().min(1),
    headlineSecondary: z.string().trim().min(1),
    description: z.string().trim().min(1),
    image: z.string().trim().min(1),
});

export const CreateBannerSchema = z.object({
    slides: z.array(HeroSlideSchema).max(4),
});

export const BannerResponseSchema = z.object({
    _id: z.string(),
    slides: z.array(
        HeroSlideSchema.extend({
            _id: z.string(),
        }),
    ),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export type CreateBannerType = z.infer<typeof CreateBannerSchema>;
export type BannerResponseType = z.infer<typeof BannerResponseSchema>;
