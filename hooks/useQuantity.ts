import { useState } from "react";

const useQuantity = (maxStock: number) => {
    const [quantity, setQuantity] = useState(1);

    const isMax = quantity >= maxStock;

    const isOutOfStock = maxStock <= 0;

    const reset = () => {
        setQuantity(1);
    };

    const increment = () => {
        if (isOutOfStock) return;

        setQuantity((prev) => {
            if (prev >= maxStock) {
                return prev;
            }

            return prev + 1;
        });
    };

    const decrement = () => {
        if (isOutOfStock) return;

        setQuantity((prev) => Math.max(1, prev - 1));
    };

    return {
        quantity,
        increment,
        decrement,
        isMax,
        reset,
        isOutOfStock,
    };
};

export default useQuantity;
