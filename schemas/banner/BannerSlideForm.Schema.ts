import { z } from "zod";

export const BannerSlideFormSchema = z.object({
    _id: z.string().optional(),
    badge: z.string().trim().min(1, "Badge is required"),
    headlinePrimary: z.string().trim().min(1, "Primary headline is required"),
    headlineSecondary: z
        .string()
        .trim()
        .min(1, "Secondary headline is required"),
    description: z.string().trim().min(1, "Description is required"),

    image: z.string().trim().min(1, "Image is required"),
});

export const BannerFormSchema = z.object({
    slides: z
        .array(BannerSlideFormSchema)
        .max(4, "Maximum 4 slides are allowed"),
});

export type BannerSlideFormType = z.infer<typeof BannerSlideFormSchema>;

export type BannerFormType = z.infer<typeof BannerFormSchema>;
