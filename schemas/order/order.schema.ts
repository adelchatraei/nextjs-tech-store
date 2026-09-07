import { z } from "zod";

const OrderItemSchema = z.object({
    product: z.string(),
    name: z.string(),
    quantity: z.number(),
    price: z.number(),
});

const ShippingInfoSchema = z.object({
    name: z.string(),
    phone: z.string(),
    city: z.string(),
    area: z.string(),
    address: z.string(),
    landmark: z.string().optional(),
    addressType: z.enum(["Home", "Office"]),
});

export const OrderResponseSchema = z.object({
    _id: z.string(),

    user: z.string().nullable(),

    items: z.array(OrderItemSchema),

    totalPrice: z.number(),

    shippingInfo: ShippingInfoSchema,

    status: z.enum([
        "Pending",
        "Awaiting Payment",
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled",
        "On Hold",
    ]),

    paymentMethod: z.string(),

    paymentStatus: z.enum(["Pending", "Paid", "Failed"]),

    transactionId: z.string().optional(),

    createdAt: z.string(),

    updatedAt: z.string(),
});

export const OrdersResponseSchema = z.array(OrderResponseSchema);

export type OrderResponseType = z.infer<typeof OrderResponseSchema>;

export type OrdersResponseType = z.infer<typeof OrdersResponseSchema>;
