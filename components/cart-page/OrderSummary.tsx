import useBasket from "@/store/useBasket";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const OrderSummary = () => {
    const itemBasket = useBasket((state) => state.BasketItems);

    const subtotal = itemBasket.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const shipping = 10;

    const total = subtotal + shipping;

    const summaryItems = [
        {
            label: "Subtotal",
            value: `$ ${subtotal}`,
        },
        {
            label: "Standard Shipping",
            value: `$ ${shipping}`,
        },
    ];

    return (
        <div className="rounded-[28px] bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
            <h3 className="text-2xl font-extrabold text-slate-900">
                Order Summary
            </h3>
            <div className="mt-6 space-y-6">
                <div className="h-px bg-slate-200"></div>
                {summaryItems.map((item) => {
                    return (
                        <div
                            key={item.label}
                            className="flex items-center justify-between text-sm font-bold text-slate-400"
                        >
                            <span>{item.label}</span>
                            <span className="font-semibold text-slate-900">
                                {item.value}
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
                        $ {total}
                    </span>
                </div>
            </div>
            <Link
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-semibold text-white transition hover:bg-primary-dark"
                href={"/checkout"}
            >
                Checkout Now
                <ArrowRight size={24} />
            </Link>

            <div className="flex justify-center">
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 w-fit">
                    <ShieldCheck
                        size={26}
                        className="p-1 bg-green-50 border border-primary-light rounded-lg text-primary "
                    />
                    <p className=" uppercase text-gray-400 font-semibold text-[13px]">
                        secure 256-bit ssl checkout
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
