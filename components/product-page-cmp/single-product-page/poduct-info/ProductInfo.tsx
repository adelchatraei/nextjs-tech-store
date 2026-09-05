"use client";

import Link from "next/link";
import { SingleProductProps } from "../ProductHero";
import ProductActions from "./ProductActions";
import useQuantity from "@/hooks/useQuantity";
import { getKeyFeatures, parseSpecification } from "@/utils/parseSpecification";

const ProductInfo = ({ product }: SingleProductProps) => {
    const qtyController = useQuantity(product.stock);
    const metaItems = [
        {
            label: "Price: $",
            value: product.price.toLocaleString(),
            className: "text-gray-100",
        },
        {
            label: "Stock:",
            value: product.stock > 0 ? "In Stock" : "Out of Stock",
            className: product.stock > 0 ? "text-primary" : "text-slate-800",
        },
        {
            label: "Code:",
            value: product.modelName,
            className: "text-gray-100",
        },
        {
            label: "Brand:",
            value: product.brand,
            className: "text-gray-100",
        },
    ];

    const parseSpecificationText = parseSpecification(product.specifications);
    const keyFeature = getKeyFeatures(parseSpecificationText);

    return (
        <div className="lg:col-span-7 flex flex-col space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                {product.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {metaItems.map((item) => {
                    return (
                        <div
                            key={item.label}
                            className="bg-gray-600 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-slate-300"
                        >
                            {item.label}{" "}
                            <span className={item.className}>{item.value}</span>
                        </div>
                    );
                })}
            </div>
            <div className="pt-4">
                <h3 className="text-sm font-bold text-slate-800 mb-4 tracking-wide uppercase border-b-2 border-primary/20 inline-block pb-1">
                    Key Features
                </h3>
                <ul className="space-y-3">
                    {keyFeature.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-xs text-gray-600 font-medium"
                            >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                                <div className="flex gap-1">
                                    <span>{item.sectionIcon}</span>
                                    <span className=" font-bold text-slate-800 mr-1">
                                        {item.sectionTitle}
                                    </span>
                                    {" :"}

                                    {item.value}
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <Link
                    href={`/products/${product._id}#specs`}
                    className="mt-5 inline-block text-sm font-semibold text-red-500 hover:underline"
                >
                    View More Info
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                <div className="bg-[#f0fdf4] p-5 rounded-lg border-2 border-primary/20 relative group hover:border-primary transition-all">
                    <div className="absolute -top-3 right-4 bg-[#6e2594] text-white px-3 py-1 rounded-full text-[10px] font-bold">{`Save: $ ${Math.floor(product.price * 0.1)}`}</div>
                    <span className="text-2xl font-bold text-[#ef4444]">{`$ ${product.price.toLocaleString()}`}</span>
                    <p className="text-[11px] text-gray-500 font-bold mt-1">
                        Special Price
                    </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 opacity-80">
                    <span className="text-2xl font-bold text-slate-800">{`$ ${product.regularPrice.toLocaleString()}`}</span>
                    <p className="text-[11px] text-gray-400 font-bold mt-1">
                        Regular Price
                    </p>
                </div>
            </div>

            <ProductActions product={product} qtyController={qtyController} />
        </div>
    );
};

export default ProductInfo;
