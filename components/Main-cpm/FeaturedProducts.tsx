import ZapIcon from "@/components/icons/FeatProduct/ZapIcon";
import FeatProductItem from "./FeatProductItem";
import TrendingIcon from "@/components/icons/FeatProduct/TrendingIcon";
import ProductSort from "./SortProduct";
import { Suspense } from "react";
import HomePageProductSkeleton from "../Loading/LoadingHomePageProduct";
import { StoreFrantProps } from "./StoreFrant";
import getProducts from "@/querys/productQueries/getProducts";

const FeaturedProducts = async ({ filter, searchParam }: StoreFrantProps) => {
    const product = await getProducts(filter);
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 md:gap-0">
                <div className="">
                    <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-wide">
                        FEATURED
                        <span className="text-primary italic">PRODUCT</span>
                    </h2>
                    <p className="text-gray-400 text-xs mt-1 font-bold">
                        Check & Select Your Desired Product!
                    </p>
                </div>
                <div className="flex items-center gap-6 text-gray-500 text-sm font-bold md:border-l border-gray-100 md:pl-8">
                    <div className="flex items-center gap-2">
                        <ZapIcon />
                        <span>{product.totalProducts}</span>
                    </div>
                    <div className="flex items-center gap-2 group relative">
                        <TrendingIcon />
                        <ProductSort searchParam={searchParam} />
                    </div>
                </div>
            </div>
            <div>
                <Suspense fallback={<HomePageProductSkeleton />}>
                    <FeatProductItem products={product.products} />
                </Suspense>
            </div>
        </>
    );
};

export default FeaturedProducts;
