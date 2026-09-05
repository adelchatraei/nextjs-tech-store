"use client";

import { Truck } from "lucide-react";
import InputField from "../ui/InputField";
import RadioGroup from "../ui/RadioGroup";
import { Controller, useFormContext } from "react-hook-form";
import { CheckoutFormData } from "@/schemas/checkout/checkout.schema";

const ShippingDetails = () => {
    const addressTypeOptions = [
        {
            label: "Home",
            value: "Home",
        },
        {
            label: "Office",
            value: "Office",
        },
    ];

    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<CheckoutFormData>();

    return (
        <section className="space-y-4">
            <header className="flex gap-3 sm:gap-5 justify-center sm:justify-start items-center p-3 sm:p-6">
                <div className="px-2 py-1 sm:px-3 sm:py-2 border border-primary-light bg-green-100 rounded-xl ">
                    <Truck size={20} className="text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black">
                    Shipping Details
                </h2>
            </header>
            <div className="grid sm:grid-cols-2">
                <InputField
                    register={register}
                    name="shippingInfo.name"
                    label="fullname"
                    id="fullName"
                    placeholder="e.g : Toni Kroos"
                    error={errors.shippingInfo?.name?.message}
                />

                <InputField
                    register={register}
                    name="shippingInfo.phone"
                    label="phone number"
                    id="phone number"
                    type="tel"
                    placeholder="e.g : +49 171 2345678"
                    error={errors.shippingInfo?.phone?.message}
                />

                <InputField
                    register={register}
                    name="shippingInfo.city"
                    label="city / region"
                    id="city"
                    placeholder="e.g : z.B. Berlin"
                    error={errors.shippingInfo?.city?.message}
                />

                <InputField
                    register={register}
                    name="shippingInfo.area"
                    label="area /  Sub-District"
                    id="area"
                    placeholder="e.g : 10115 (PLZ)"
                    error={errors.shippingInfo?.area?.message}
                />

                <InputField
                    register={register}
                    name="shippingInfo.address"
                    label="House / Street / Building"
                    id="address"
                    placeholder="e.g : Hauptstraße 12"
                    containerClassName="sm:col-span-2"
                    error={errors.shippingInfo?.address?.message}
                />
                <InputField
                    register={register}
                    name="shippingInfo.landmark"
                    label="landmark"
                    id="landmark"
                    placeholder="e.g : near Hauptbahnhof"
                    error={errors.shippingInfo?.landmark?.message}
                />

                <Controller
                    name="shippingInfo.addressType"
                    control={control}
                    render={(field) => {
                        return (
                            <RadioGroup
                                title="Address Type"
                                name={field.field.name}
                                value={field.field.value}
                                options={addressTypeOptions}
                                onChange={field.field.onChange}
                                className="grid grid-cols-2 gap-1 sm:gap-3"
                            />
                        );
                    }}
                />
            </div>
        </section>
    );
};

export default ShippingDetails;
