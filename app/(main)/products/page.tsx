import Sidebar from "@/components/product-page-cmp/sidebar/Sidebar";
import Header from "@/components/product-page-cmp/Header";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import normalizeProductFilters from "../../../utils/normalizeProductFilters";

import PriceFilter from "@/components/product-page-cmp/sidebar/price-filter/PriceFilter";
import SearchFilter from "@/components/product-page-cmp/sidebar/Search-filter/SearchFilter";
import ProductsSection from "@/components/product-page-cmp/ProductsSection";
import { Suspense } from "react";
import ProductSkeleton from "@/components/Loading/LoadingProduct";
// import SearchFilter from "@/components/product-page-cmp/sidebar/Search-filter/SearchFilter";

type ProductProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const Products = async ({ searchParams }: ProductProps) => {
    const searchParam = await searchParams;
    const filter = normalizeProductFilters(searchParam);

    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-12 pb-24">
            <div className="container-custom">
                <Header searchParams={searchParam} />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
                    <aside className="flex flex-col gap-4">
                        <div className="bg-white rounded-4xl border border-gray-100/50 shadow-sm p-8 space-y-10">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[2px] text-slate-400 mb-6 flex items-center gap-2">
                                    <Search size={14} />
                                    Search
                                </h3>

                                <SearchFilter searchParams={searchParam} />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[2px] text-slate-400 mb-6 flex items-center gap-2">
                                    <SlidersHorizontal size={14} />
                                    Shop by Category
                                </h3>
                                <div className="flex flex-col gap-1.5 relative ">
                                    <Sidebar searchParams={searchParam} />
                                </div>
                            </div>
                            <div>
                                <PriceFilter searchParams={searchParam} />
                            </div>
                        </div>
                        <div className="bg-slate-900 rounded-4xl p-8 text-white relative overflow-hidden group shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                            <Sparkles
                                size={24}
                                className="text-yellow-400 mb-4"
                            />
                            <h4 className="text-lg font-black tracking-tight mb-2 uppercase">
                                Member Rewards
                            </h4>
                            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-6">
                                Join our loyalty program and save up to 15%.
                            </p>
                            <button className="w-full py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[2px] hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95">
                                Enroll Now
                            </button>
                        </div>
                    </aside>

                    <Suspense
                        key={JSON.stringify(filter)}
                        fallback={<ProductSkeleton />}
                    >
                        <ProductsSection
                            filter={filter}
                            searchParam={searchParam}
                        />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Products;
