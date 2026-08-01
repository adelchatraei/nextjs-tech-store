import ZapIcon from "@/components/icons/FeatProduct/ZapIcon";
import FeatProductItem from "./FeatProductItem";
import TrendingIcon from "@/components/icons/FeatProduct/TrendingIcon";
import ProductSort from "./SortProduct";
import { Suspense } from "react";
import ProductSkeleton from "../LoadingProduct/LoadingProduct";

const FeaturedProducts = ({ sort }: { sort: string }) => {
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
                        <span>0 items</span>
                    </div>
                    <div className="flex items-center gap-2 group relative">
                        <TrendingIcon />
                        <ProductSort />
                    </div>
                </div>
            </div>
            <div>
                <Suspense
                    key={sort}
                    fallback={
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
                            {[...Array(10)].map((_, i) => (
                                <ProductSkeleton key={i} />
                            ))}
                        </div>
                    }
                >
                    <FeatProductItem sort={sort} />
                </Suspense>
            </div>
        </>
    );
};

export default FeaturedProducts;
