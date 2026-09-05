"use client";

import { useState } from "react";
import { SingleProductProps } from "./ProductHero";
import Image from "next/image";

const ProductGallery = ({ product }: SingleProductProps) => {
    const [selectedImage, setSelectedImage] = useState(0);

    const handleSelectImage = (index: number) => {
        setSelectedImage(index);
    };

    return (
        <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-square w-full bg-white rounded-lg overflow-hidden group border border-gray-100 p-8">
                <Image
                    src={product.images?.[selectedImage]}
                    alt={product.name}
                    priority
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="text-transparent object-contain p-8"
                />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                {product.images.map((img, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => handleSelectImage(index)}
                            className={`relative w-16 h-16 rounded border transition-all shrink-0 ${selectedImage === index ? "border-primary shadow-sm" : "border-gray-100 opacity-60 hover:opacity-100"}`}
                        >
                            <Image src={img} alt={"image"} fill />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductGallery;
