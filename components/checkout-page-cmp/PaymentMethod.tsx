"use client";

import { CreditCard, Truck } from "lucide-react";
import PaymentCard from "./PaymentCard";
import { Controller, useFormContext } from "react-hook-form";
import { CheckoutFormData } from "@/schemas/checkout/checkout.schema";

const PaymentMethod = () => {
    const { control } = useFormContext<CheckoutFormData>();

    const paymentOptions = [
        {
            title: "Cash On Delivery",
            description: "Pay upon arrival",
            value: "cod",
            icon: <Truck size={20} className=" stroke-current" />,
        },
        {
            title: "Cash On Delivery",
            description: "Pay upon arrival",
            value: "fff",
            icon: <Truck size={20} className="stroke-current" />,
        },
    ];
    return (
        <section className="space-y-4">
            <header className="flex gap-3 sm:gap-5 justify-center sm:justify-start items-center p-3 sm:p-6">
                <div className="px-2 py-1 sm:px-3 sm:py-2 border border-primary-light bg-green-100 rounded-xl ">
                    <CreditCard size={20} className="text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black">
                    Payment Method
                </h2>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-5 sm:gap-2">
                <Controller
                    name="paymentMethod"
                    control={control}
                    render={({ field }) => (
                        <>
                            {paymentOptions.map((option) => {
                                return (
                                    <PaymentCard
                                        key={option.value}
                                        title={option.title}
                                        value={option.value}
                                        description={option.description}
                                        icon={option.icon}
                                        currentValue={field.value}
                                        onChange={field.onChange}
                                    />
                                );
                            })}
                        </>
                    )}
                />
            </div>
        </section>
    );
};

export default PaymentMethod;
