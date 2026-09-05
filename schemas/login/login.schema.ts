import { z } from "zod";

export const loginSchema = z.object({
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

export type LoginFormData = z.infer<typeof loginSchema>;
