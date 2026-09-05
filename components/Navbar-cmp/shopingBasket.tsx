"use client";

import useBasket from "@/store/useBasket";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ShopingBasket = () => {
    const items = useBasket((state) => state.BasketItems);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Link
            href={"/cart"}
            className="p-2 sm:p-2.5 hover:bg-gray-50 rounded-2xl transition-colors relative text-gray-500 group"
        >
            <ShoppingCart
                size={20}
                className="group-hover:scale-110 transition-transform sm:w-5.5 sm:h-5.5"
            />

            <AnimatePresence>
                {itemCount > 0 && (
                    <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        key={itemCount}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                        }}
                        className="absolute top-1 right-1 bg-primary text-white text-[10px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                    >
                        {itemCount}
                    </motion.span>
                )}
            </AnimatePresence>
        </Link>
    );
};

export default ShopingBasket;
