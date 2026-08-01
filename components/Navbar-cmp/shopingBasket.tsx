"use client";

import useBasket from "@/store/useBasket";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShopingBasket = () => {
    const items = useBasket((state) => state.BasketItems);

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <Link
            href={"/cart"}
            className="p-2 sm:p-2.5 hover:bg-gray-50 rounded-2xl transition-colors relative text-gray-500 group "
        >
            <ShoppingCart size={20} />
            {itemCount > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-white ">
                    {itemCount}
                </span>
            )}
        </Link>
    );
};

export default ShopingBasket;
