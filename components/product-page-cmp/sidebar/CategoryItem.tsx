import { CategoryTreeNode } from "@/types/category-type";
import { ChevronRight } from "lucide-react";
import CategoryTree from "./CategoryTree";
import Link from "next/link";
import updateSearchParams from "@/utils/updateSearchParams";

type CategoryItemProps = {
    root: CategoryTreeNode;
    searchParams: Record<string, string | string[] | undefined>;
};

const CategoryItem = ({ root, searchParams }: CategoryItemProps) => {
    const activeCategory =
        typeof searchParams.category === "string"
            ? searchParams.category
            : undefined;
    const isActiv = activeCategory === root.slug;

    return (
        <div className="relative group">
            <Link
                href={`/products?${updateSearchParams({
                    searchParams,
                    updates: {
                        category: root.slug?.toString(),
                        page: "1",
                    },
                })}`}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActiv ? "group bg-primary/5 text-primary" : "text-slate-500 hover:bg-gray-50 hover:text-slate-900"}`}
            >
                <div className="flex items-center gap-3">
                    <div
                        className={`${isActiv ? "w-1.5 h-1.5 rounded-full transition-all bg-primary scale-125" : "w-1.5 h-1.5 rounded-full transition-all bg-transparent group-hover:bg-gray-300"}`}
                    />

                    <span>{root.name}</span>
                </div>

                <div className="flex items-center">
                    {root.children.length > 0 && (
                        <ChevronRight
                            size={14}
                            className="text-slate-300 transition-transform rotate-90 md:rotate-0 md:translate-x-1"
                        />
                    )}
                </div>
            </Link>
            {root.children.length > 0 && (
                <div className="absolute md:left-full top-0 z-50">
                    <div className=" w-full md:w-64 bg-white rounded-2xl border border-gray-100 shadow-xl p-2 ml-0 md:ml-2 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-400 ">
                        {/* Popap */}
                        <CategoryTree
                            data={root.children}
                            searchParams={searchParams}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryItem;
