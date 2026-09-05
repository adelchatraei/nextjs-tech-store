"use client";

import useBasket from "@/store/useBasket";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";

const CartContent = () => {
    const items = useBasket((state) => state.BasketItems);
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
