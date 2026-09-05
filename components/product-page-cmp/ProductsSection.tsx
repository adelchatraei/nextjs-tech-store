import { SortDescIcon } from "lucide-react";
import Selection from "../Main-cpm/Selection";
import ProductGrid from "./ProductGrid";
import Pagination from "./pagination/Pagination";
import getProducts from "@/querys/productQueries/getProducts";
import { ProductFilterType } from "@/types/ProductFiltersType";

type ProductsSectionProps = {
    filter: ProductFilterType;
    searchParam: Record<string, string | string[] | undefined>;
};

const ProductsSection = async ({
    filter,
    searchParam,
}: ProductsSectionProps) => {
    const productResponse = await getProducts(filter);
    return (
        <section className="lg:col-span-3">
            <article className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <p className="text-sm font-bold text-gray-500">
                    Showing
                    <span className="text-foreground">
                        {" "}
                        {productResponse.totalProducts}{" "}
                    </span>
                    revolutionary devices
                </p>
                <div className="flex gap-2 items-center">
                    <SortDescIcon size={18} />
                    <Selection searchParams={searchParam} />
                </div>
            </article>

            <ProductGrid
                products={productResponse.products}
                view={filter.view}
            />

            <Pagination
                currentPage={productResponse.currentPage}
                totalPages={productResponse.totalPages}
                searchParams={searchParam}
            />
        </section>
    );
};

export default ProductsSection;
