"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { WishlistItem } from "@/types/wisklist-type";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import useWishlist from "@/store/useWishlist";

type WishlistItemProps = {
    wishlistItem: WishlistItem;
};

const WishlistItem = ({ wishlistItem }: WishlistItemProps) => {
    const { toggleWishlist, isInWishlist } = useWishlist();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white rounded-lg border border-gray-50 overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-lg"
        >
            <div className="absolute top-2 right-2 z-20">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    animate={
                        isInWishlist(wishlistItem._id)
                            ? { scale: [1, 1.2, 1] }
                            : { scale: 1 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm ${
                        isInWishlist(wishlistItem._id)
                            ? "text-red-500"
                            : "text-gray-300 hover:text-red-500"
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(wishlistItem);
                    }}
                >
                    <Heart
                        className="transition-colors duration-300"
                        fill={
                            isInWishlist(wishlistItem._id)
                                ? "currentColor"
                                : "none"
                        }
                    />
                </motion.button>
            </div>

            <Link
                href={wishlistItem.image}
                className="relative aspect-5/4 bg-white items-center justify-center overflow-hidden border-b border-gray-50 flex"
            >
                <Image
                    src={wishlistItem.images?.[0] || "/placeholder.png"}
                    alt={wishlistItem.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition"
                />
            </Link>

            <div className="p-3 flex flex-col grow">
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                        {wishlistItem.brand || "Tech Store"}
                    </span>

                    <div className="flex items-center gap-1">
                        <Star
                            size={12}
                            className="text-yellow-400 fill-yellow-400"
                        />
                        <span className="text-xs text-[10px] text-gray-600 font-bold">
                            {wishlistItem.avgRating?.toFixed(1) || "5.0"}
                        </span>
                    </div>
                </div>

                <Link
                    href={wishlistItem.image}
                    className="text-sm text-[13px] font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight h-8"
                >
                    {wishlistItem.name}
                </Link>

                <div className="flex justify-between items-center mt-auto pt-2 ">
                    <div className="flex flex-col">
                        <span className="text-red-500 font-bold text-base">
                            ${wishlistItem.price?.toLocaleString()}
                        </span>

                        <div className="text-xs text-gray-400 text-[10px] line-through">
                            $
                            {Math.floor(
                                wishlistItem.regularPrice,
                            ).toLocaleString()}
                        </div>
                    </div>

                    <button
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-primary hover:text-white transition-all"
                        type="button"
                    >
                        <ShoppingCart size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default WishlistItem;
