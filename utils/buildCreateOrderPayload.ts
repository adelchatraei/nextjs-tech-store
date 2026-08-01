import { CheckoutFormData } from "@/schemas/checkout/checkout.schema";
import { BasketItem } from "@/types/basket-type";
import { CreateOrderPayload } from "@/types/order-types";

const buildCreateOrderPayload = (
    formData: CheckoutFormData,
    basketItems: BasketItem[],
): CreateOrderPayload => {
    const items = basketItems.map((item) => ({
        product: item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
    }));

    const subtotal = basketItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const shiping = 10;

    const totalPrice = subtotal + shiping;

    return {
        items,
        totalPrice,
        shippingInfo: formData.shippingInfo,
        paymentMethod: formData.paymentMethod,
    };
};

export default buildCreateOrderPayload;
