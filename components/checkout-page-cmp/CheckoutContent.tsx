"use client";

import {
    CheckoutFormData,
    checkoutSchema,
} from "@/schemas/checkout/checkout.schema";
import ConfirmPayment from "./ConfirmPayment";
import OrderSummaryCheckout from "./OrderSummaryCheckout";
import PaymentMethod from "./PaymentMethod";
import ShippingDetails from "./ShippingDetails";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useBasket from "@/store/useBasket";
import buildCreateOrderPayload from "@/utils/buildCreateOrderPayload";
import { useCreateOrderMutation } from "@/querys/orderQueries/useCreateOrderMutation";

const CheckoutContent = () => {
    const methods = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),

        defaultValues: {
            shippingInfo: {
                name: "",
                phone: "",
                city: "",
                area: "",
                address: "",
                landmark: "",
                addressType: "Home",
            },

            paymentMethod: "cod",
        },
    });

    const basketItems = useBasket((state) => state.BasketItems);

    const { mutate } = useCreateOrderMutation();

    const onSubmitData = (data: CheckoutFormData) => {
        const payload = buildCreateOrderPayload(data, basketItems);
        // console.table(payload.items);
        // console.log(payload);

        mutate(payload);
    };

    return (
        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.85fr]">
            <FormProvider {...methods}>
                <form
                    className="bg-white rounded-4xl shadow-sm p-8"
                    onSubmit={methods.handleSubmit(onSubmitData)}
                >
                    <ShippingDetails />
                    <PaymentMethod />
                    <ConfirmPayment />
                </form>
            </FormProvider>
            <aside className="lg:sticky lg:top-6 h-fit">
                <OrderSummaryCheckout />
            </aside>
        </div>
    );
};

export default CheckoutContent;
