"use client";

import useBasket from "@/store/useBasket";

const ConfirmPayment = () => {
    const itemBaskets = useBasket((state) => state.BasketItems);

    const subtotal = itemBaskets.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const shipping = 10;

    const total = subtotal + shipping;
    return (
        <div className="p-3 sm:p-6 mt-6">
            <button className="flex justify-center items-center p-4 sm:p-6 gap-2 text-white text-[18px] sm:text-xl font-semibold bg-primary hover:bg-primary-dark hover:shadow-sm w-full rounded-3xl transition-all duration-300">
                Confirm Payment{" "}
                <span className="flex items-center text-white">●</span>
                <span>$ {total.toLocaleString()}</span>
            </button>
        </div>
    );
};

export default ConfirmPayment;
