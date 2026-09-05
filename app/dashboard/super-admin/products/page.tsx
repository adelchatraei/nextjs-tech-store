import getAdminProducts from "@/querys/productQueries/getAdminProducts";
import ProductsHeader from "../components/products/ProductsHeader";
import ProductsTable from "../components/products/ProductsTable";
import normalizeAdminProductFilter from "@/utils/normalizeAdminProductFilter";
import { Suspense } from "react";
import ProductTableSkeleton from "../components/skeleton-loading/product/ProductTableSkeleton";

type ProductsPageProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
    const params = await searchParams;
    const filter = normalizeAdminProductFilter(params);

    const productsData = await getAdminProducts(filter);

    return (
        <div className=" space-y-7 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <ProductsHeader />

            <Suspense fallback={<ProductTableSkeleton />}>
                <ProductsTable productsData={productsData} />
            </Suspense>
        </div>
    );
};

export default ProductsPage;
