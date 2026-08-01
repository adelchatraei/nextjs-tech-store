import { Product } from "@/schemas/products/product";

export type BasketItem = Product & {
    quantity: number;
};
