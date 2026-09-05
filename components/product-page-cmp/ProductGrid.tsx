"use client";

import { Search } from "lucide-react";
import ProductCard from "../Main-cpm/ProductCart";
import { Product } from "@/schemas/products/product";

interface ProductGridProps {
    products: Product[];
    view: "grid" | "list";
}

const ProductGrid = ({ products, view }: ProductGridProps) => {
    if (products.length === 0) {
        return (
            <div className="col-span-full py-32 text-center bg-white rounded-[40px] border border-gray-100 border-dashed">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-3xl mb-4">
                    <Search size={32} />
                </div>
                <h3 className="text-xl font-black text-foreground">
                    No products found
                </h3>
                <p className="text-gray-400 text-xs font-medium max-w-50 mx-auto mt-2">
                    Try adjusting your filters or search terms.
                </p>
            </div>
        );
    }

    return (
        <article
            className={`${view === "list" ? "flex flex-col gap-6" : " grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6"}`}
        >
            {products.map((item: Product) => {
                return <ProductCard product={item} key={item._id} />;
            })}
        </article>
    );
};

export default ProductGrid;
