"use client";

import useBasket from "@/store/useBasket";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { Trash2 } from "lucide-react";
import EmptyCart from "./EmptyCart";

const CartContent = () => {
    const items = useBasket((state) => state.BasketItems);
    const { clearBasket } = useBasket();
    const isEmpty = items.length === 0;
    return (
        <>
            {isEmpty ? (
                <EmptyCart />
            ) : (
                <>
                    <div className="grid gap-6 lg:grid-cols-[1.5fr_0.85fr]">
                        <section className="space-y-4">
                            {items.map((item) => {
                                return (
                                    <CartItem
                                        key={item._id}
                                        itemBasket={item}
                                    />
                                );
                            })}
                            <div className="flex flex-row-reverse">
                                <button
                                    className="text-rose-500 text-[18px] font-bold bg-rose-50 hover:text-red-50 hover:bg-rose-500  px-3 py-1 rounded-xl transition-all flex items-center shadow-[0px_2px_8px_rgba(0,0,0,0.15)] gap-2"
                                    onClick={clearBasket}
                                >
                                    <Trash2 size={24} strokeWidth={2} />
                                    Clear All
                                </button>
                            </div>
                        </section>
                        <aside className="lg:sticky lg:top-6 h-fit">
                            <OrderSummary />
                        </aside>
                    </div>
                </>
            )}
        </>
    );
};

export default CartContent;
