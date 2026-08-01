import { z } from "zod";

const shippingInfoSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Full name must contain at least 2 characters")
        .max(20, "Full name must contain at most 20 characters"),

    phone: z
        .string()
        .trim()
        .regex(/^\+?[0-9۰-۹]{8,15}$/, "Please enter a valid phone number"),

    city: z
        .string()
        .trim()
        .min(2, "City must contain at least 2 characters")
        .max(60, "City must contain at most 60 characters"),

    area: z
        .string()
        .trim()
        .min(2, "Area must contain at least 2 characters")
        .max(100, "Area must contain at most 100 characters"),

    address: z
        .string()
        .trim()
        .min(10, "Please enter a complete address")
        .max(250, "Address is too long"),

    landmark: z.string().trim().max(120, "Landmark is too long"),

    addressType: z.enum(["Home", "Office"], {
        message: "Please select an address type",
    }),
});

export const checkoutSchema = z.object({
    shippingInfo: shippingInfoSchema,

    paymentMethod: z.enum(["cod"], {
        message: "Please select a payment method",
    }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
