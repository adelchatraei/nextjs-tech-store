import { Product } from "@/types/products-type";
import ProductCart from "./ProductCart";

const FeatProductItem = async ({ sort }: { sort: string }) => {
    const fetcher = await fetch(
        `http://localhost:3000/api/products?sort=${sort}`,
        { cache: "no-store" },
    );
    const response = await fetcher.json();

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
            {response.products?.map((item: Product) => (
                <ProductCart key={item._id} product={item} />
            ))}
        </div>
    );
};

export default FeatProductItem;
