"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import useWishlist from "@/store/useWishlist";
import { Heart } from "lucide-react";

const FavoriteUser = () => {
    const wishlistItems = useWishlist((state) => state.wishlist);
    const count = wishlistItems?.length || 0;

    return (
        <Link
            href={"/wishlist"}
            className="p-2 sm:p-2.5 hover:bg-gray-50 rounded-2xl transition-colors relative text-gray-500 group hidden sm:block"
        >
            <Heart
                size={20}
                className="group-hover:scale-110 group-hover:text-red-500 transition-all sm:w-5.5 sm:h-5.5"
            />

            <AnimatePresence>
                {count > 0 && (
                    <motion.span
                        key={count}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 25,
                        }}
                        className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                    >
                        {count > 99 ? "+99" : count}
                    </motion.span>
                )}
            </AnimatePresence>
        </Link>
    );
};

export default FavoriteUser;
