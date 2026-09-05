import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters.")
        .max(50, "Name must be at most 50 characters.")
        .regex(
            /^[a-zA-Z\u0600-\u06FF\s]+$/,
            "Name can only contain letters and spaces.",
        ),

    email: z
        .string()
        .trim()
        .min(1, "Email is required.")
        .email("Please enter a valid email address.")
        .max(100, "Email must be at most 100 characters.")
        .toLowerCase(),

    password: z
        .string()
        .trim()
        .min(7, "Password must be at least 7 characters.")
        .max(20, "Password must be at most 20 characters.")
        .regex(/[0-9]/, "Password must contain at least one number."),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
