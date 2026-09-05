import { Product } from "@/schemas/products/product";
import ProductCart from "./ProductCart";

type FeatProductItemProps = {
    products: Product[];
};

const FeatProductItem = ({ products }: FeatProductItemProps) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
            {products.map((item: Product) => (
                <ProductCart key={item._id} product={item} />
            ))}
        </div>
    );
};

export default FeatProductItem;
