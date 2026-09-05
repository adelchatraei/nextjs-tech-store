"use client";

import { Heart } from "lucide-react";
import useBasket from "@/store/useBasket";
import { Product } from "@/schemas/products/product";
import productToBasketItem from "@/lib/mappers/productToBasketItem";
import toast from "react-hot-toast";

type ProductActionsProps = {
    product: Product;
    qtyController: {
        quantity: number;
        increment: () => void;
        decrement: () => void;
        isMax: boolean;
        reset: () => void;
        isOutOfStock: boolean;
    };
};

const ProductActions = ({ product, qtyController }: ProductActionsProps) => {
    const { addToBasket } = useBasket();

    const { quantity, increment, decrement, isMax, reset, isOutOfStock } =
        qtyController;

    const handeAddToBasketClick = () => {
        addToBasket(productToBasketItem(product, quantity));
        toast.success("Added to cart");
        reset();
    };

    return (
        <div className="pt-4 sm:pt-8 flex flex-col xl:flex-row items-stretch xl:items-center gap-4 sm:gap-6">
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-12 sm:h-14 w-full xl:w-auto shadow-sm bg-white">
                <button
                    className="w-12 sm:w-16 h-full hover:bg-gray-50 transition-colors text-lg sm:text-xl font-bold border-r border-gray-100 flex items-center justify-center"
                    onClick={decrement}
                    disabled={quantity === 1 || isOutOfStock}
                >
                    -
                </button>
                <span className="flex-1 xl:flex-none px-4 sm:px-10 font-bold text-slate-800 text-sm sm:text-lg min-w-12.5 sm:min-w-20 text-center flex items-center justify-center bg-white">
                    {isOutOfStock ? 0 : quantity}
                </span>
                <button
                    className="w-12 sm:w-16 h-full hover:bg-gray-50 transition-colors text-lg sm:text-xl font-bold border-l border-gray-100 flex items-center justify-center"
                    onClick={increment}
                    disabled={isMax || isOutOfStock}
                >
                    +
                </button>
            </div>
            {isOutOfStock && (
                <span className="font-bold text-8 text-red-500">
                    Out of stock !
                </span>
            )}
            <div className="flex gap-2 sm:gap-3 w-full">
                <button className="flex-3 h-12 sm:h-14 bg-primary text-white rounded-lg font-bold text-[11px] sm:text-sm hover:bg-primary-dark transition-all shadow-md active:scale-95 uppercase tracking-wider">
                    Buy now
                </button>
                <button
                    className="flex-3 h-12 sm:h-14 bg-white text-primary border-2 border-primary rounded-lg font-bold text-[11px] sm:text-sm hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95 uppercase tracking-wider"
                    onClick={handeAddToBasketClick}
                >
                    Add to cart
                </button>
                <button className="w-12 h-12 sm:w-14 sm:h-14 border-2 rounded-lg flex items-center justify-center transition-all shrink-0 border-gray-200 text-gray-300 hover:text-red-500 hover:border-red-500">
                    <Heart size={18} className="sm:w-5.5 sm:h-5.5" />
                </button>
            </div>
        </div>
    );
};

export default ProductActions;
