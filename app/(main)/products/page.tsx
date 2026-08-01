import Selection from "@/components/Main-cpm/Selection";
import Sidebar from "@/components/product-page-cmp/sidebar/Sidebar";
import Header from "@/components/product-page-cmp/Header";
import ProductGrid from "@/components/product-page-cmp/ProductGrid";
import { Search, SlidersHorizontal, SortDescIcon } from "lucide-react";
import normalizeProductFilters from "../../../utils/normalizeProductFilters";
import getProducts from "@/querys/productQueries/getProducts";
import Pagination from "@/components/product-page-cmp/pagination/Pagination";
import PriceFilter from "@/components/product-page-cmp/sidebar/price-filter/PriceFilter";
import SearchFilter from "@/components/product-page-cmp/sidebar/Search-filter/SearchFilter";
// import SearchFilter from "@/components/product-page-cmp/sidebar/Search-filter/SearchFilter";

type ProductProps = {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const Products = async ({ searchParams }: ProductProps) => {
    const searchParam = await searchParams;
    const filter = normalizeProductFilters(searchParam);
    const productResponse = await getProducts(filter);
    return (
        <div className="bg-[#F8FAFC] min-h-screen pt-12 pb-24">
            <div className="container-custom">
                <Header searchParams={searchParam} />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
                    <aside>
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
                        <div className="bg-slate-900 rounded-4xl p-8 text-white relative overflow-hidden group shadow-xl"></div>
                    </aside>
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
                </div>
            </div>
        </div>
    );
};

export default Products;
