import { Product } from "@/schemas/products/product";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./poduct-info/ProductInfo";

export type SingleProductProps = {
    product: Product;
};

const ProductHero = ({ product }: SingleProductProps) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-10 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <ProductGallery product={product} />

                <ProductInfo product={product} />
            </div>
        </div>
    );
};

export default ProductHero;
