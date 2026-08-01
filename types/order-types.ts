import { CheckoutFormData } from "@/schemas/checkout/checkout.schema";

export type OrderItemPayload = {
    product: string;
    name: string;
    quantity: number;
    price: number;
};

export type CreateOrderPayload = {
    items: OrderItemPayload[];
    totalPrice: number;
    shippingInfo: CheckoutFormData["shippingInfo"];
    paymentMethod: CheckoutFormData["paymentMethod"];
    paymentStatus?: "Pending";
};

export type CreateOrderResponse = {
   _id:string;
   user:string;
   items:OrderItemPayload[];
   totalPrice:number;
   shippingInfo:CheckoutFormData["shippingInfo"];
   status:string;
   paymentMethod:string;
   paymentStatus:string;
   transactionId:string;
   createdAt:string;
   updatedAt:string;
}