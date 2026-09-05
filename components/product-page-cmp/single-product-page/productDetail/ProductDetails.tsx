"use client";

import { Product } from "@/schemas/products/product";
import { SingleProductProps } from "../ProductHero";
import { useState } from "react";
import SpecificationContent from "./SpecificationContent";
import DescriptionContent from "./DescriptionContent";
import ReviewsContent from "./ReviewsContent";
import { FileText, ListTodo, MessageSquare } from "lucide-react";

const ProductDetails = ({ product }: SingleProductProps) => {
    const [activeTab, setActiveTab] = useState("description");

    const PRODUCT_BUTTON_STYLE =
        "relative py-4 px-6 text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 group text-gray-500 hover:text-primary bg-gray-50/50 rounded-t-lg mx-0.5 border-t border-x border-transparent hover:border-gray-100";
    const ACTIVE_BUTTON_STYLE =
        "relative py-4 px-6 text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 group text-white bg-primary-dark rounded-t-lg shadow-md";

    return (
        <div className="mt-12 overflow-hidden">
            <div className="flex justify-start md:justify-center border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar pt-4">
                <button
                    id="specs"
                    className={
                        activeTab === "specification"
                            ? ACTIVE_BUTTON_STYLE
                            : PRODUCT_BUTTON_STYLE
                    }
                    onClick={() => setActiveTab("specification")}
                >
                    <ListTodo size={14} /> Specification
                </button>
                <button
                    className={
                        activeTab === "description"
                            ? ACTIVE_BUTTON_STYLE
                            : PRODUCT_BUTTON_STYLE
                    }
                    onClick={() => setActiveTab("description")}
                >
                    <FileText size={14} /> Description
                </button>
                <button
                    className={
                        activeTab === "reviews"
                            ? ACTIVE_BUTTON_STYLE
                            : PRODUCT_BUTTON_STYLE
                    }
                    onClick={() => setActiveTab("reviews")}
                >
                    <MessageSquare size={14} /> Reviews
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-0">
                {activeTab === "specification" && (
                    <SpecificationContent
                        specifications={product.specifications}
                    />
                )}
                {activeTab === "description" && (
                    <DescriptionContent description={product.description} />
                )}
                {activeTab === "reviews" && <ReviewsContent />}
            </div>
        </div>
    );
};

export default ProductDetails;
