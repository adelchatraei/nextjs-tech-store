import { Product } from "@/schemas/products/product";
import { BasketItem } from "@/types/basket-type";

const productToBasketItem = (
    product: Product,
    quantity: number,
): BasketItem => {
    return {
        ...product,
        quantity,
    };
};

export default productToBasketItem;