import useBasket from "@/store/useBasket";
import { ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";

const OrderSummaryCheckout = () => {
    const itemBasket = useBasket((state) => state.BasketItems);

    const subtotal = itemBasket.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const shipping = 10;

    const total = subtotal + shipping;

    const summaryItems = [
        {
            label: "Subtotal",
            value: subtotal,
        },
        {
            label: "Standard Shipping",
            value: shipping,
        },
    ];

    return (
        <div className="rounded-4xl bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-900 p-2 sm:p-4">
                Order Summary
            </h3>
            <div className="h-px bg-slate-200 my-3.5" />
            <div className="space-y-5">
                {itemBasket.map((item) => {
                    return (
                        <div
                            key={item._id}
                            className="flex items-center justify-between gap-4"
                        >
                            <div className="flex min-w-0 items-center gap-4">
                                <div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-zinc-50">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-zinc-800">
                                        {item.name}
                                    </p>
                                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
                                        Quantity : {item.quantity} × $
                                        {item.price.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                            <span className="shrink-0 text-sm font-semibold text-zinc-800">
                                $ {item.price.toLocaleString()}
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="mt-6 space-y-6">
                <div className="h-px bg-slate-200" />
                {summaryItems.map((item) => {
                    return (
                        <div
                            key={item.label}
                            className="flex items-center justify-between text-sm font-bold text-slate-400"
                        >
                            <span>{item.label}</span>
                            <span className="font-semibold text-slate-900">
                                $ {item.value.toLocaleString()}
                            </span>
                        </div>
                    );
                })}
                <div className="h-px bg-slate-200" />
                <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-slate-900 uppercase">
                        Total Amount
                    </span>
                    <span className="text-2xl font-black text-primary">
                        $ {total.toLocaleString()}
                    </span>
                </div>
            </div>
            <div className="h-px bg-slate-200 mt-5" />
            <div className="flex justify-between pt-5 px-4">
                <div className="flex gap-2 sm:gap-3">
                    <ShieldCheck size={16} className="text-primary" />
                    <span className=" uppercase text-[12px] font-semibold text-gray-400">
                        encrypted
                    </span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                    <span className=" uppercase text-[12px] font-semibold text-gray-400">
                        reliable delivery
                    </span>
                    <Truck size={16} className="text-primary" />
                </div>
            </div>
        </div>
    );
};

export default OrderSummaryCheckout;
