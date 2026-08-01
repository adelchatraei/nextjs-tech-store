"use client";

import ProductCard from "../Main-cpm/ProductCart";
import { Product } from "@/schemas/products/product";

interface ProductGridProps {
    products: Product[];
    view: "grid" | "list";
}

const ProductGrid = ({ products, view }: ProductGridProps) => {
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
