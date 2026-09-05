import { z } from "zod";

export const verifyOtpSchema = z.object({
    otp: z
        .string()
        .trim()
        .length(6, "OTP code must contain 6 digits.")
        .regex(/^\d+$/, "OTP must contain only numbers."),
});

export type VerifyOtpFormData = z.infer<typeof verifyOtpSchema>;
