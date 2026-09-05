"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/types/products-type";
import useWishlist from "@/store/useWishlist";
import AddToCartEpisode from "./AddToCartEpisode";

interface ProductCartProp {
    product: Product;
}

export default function ProductCard({ product }: ProductCartProp) {
    const productHref = `/products/${product._id}`;

    const { toggleWishlist, isInWishlist } = useWishlist();
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white rounded-lg border border-gray-50 overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-lg"
        >
            <div className="absolute top-2 left-2 z-20 pointer-events-none">
                <div className="bg-purple-700 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                    Save: ${Math.floor(product.price)}
                </div>
            </div>
            <div className="absolute top-2 right-2 z-20">
                <motion.button
                    whileTap={{ scale: 0.7 }}
                    animate={
                        isInWishlist(product._id)
                            ? { scale: [0.5, 3, 1] }
                            : { scale: 1 }
                    }
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm ${
                        isInWishlist(product._id)
                            ? "text-red-500"
                            : "text-gray-300 hover:text-red-500"
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product);
                    }}
                >
                    <Heart
                        size={18}
                        className="transition-colors duration-300"
                        fill={
                            isInWishlist(product._id) ? "currentColor" : "none"
                        }
                    />
                </motion.button>
            </div>

            <Link
                href={productHref}
                className="relative aspect-5/4 bg-white items-center justify-center overflow-hidden border-b border-gray-50 flex"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="eager"
                />
            </Link>

            <div className="p-3 flex flex-col grow">
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                        {product.brand || "Tech Store"}
                    </span>

                    <div className="flex items-center gap-1">
                        <Star
                            size={12}
                            className="text-yellow-400 fill-yellow-400"
                        />
                        <span className="text-xs text-[10px] text-gray-600 font-bold">
                            {product.avgRating?.toFixed(1) || "5.0"}
                        </span>
                    </div>
                </div>

                <Link
                    href={productHref}
                    className="text-sm text-[13px] font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight h-8"
                >
                    {product.name}
                </Link>

                <div className="flex justify-between items-center mt-auto pt-2 ">
                    <div className="flex flex-col">
                        <span className="text-red-500 font-bold text-base">
                            ${product.price?.toLocaleString()}
                        </span>

                        <div className="text-xs text-gray-400 text-[10px] line-through">
                            ${Math.floor(product.regularPrice).toLocaleString()}
                        </div>
                    </div>

                    <AddToCartEpisode product={product} />
                </div>
            </div>
        </motion.div>
    );
}
