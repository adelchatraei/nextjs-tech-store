"use client";

import { CategoryTreeNode } from "@/types/category-type";
import { ChevronRight } from "lucide-react";
import CategoryTree from "./CategoryTree";
import Link from "next/link";
import updateSearchParams from "@/utils/updateSearchParams";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CategoryItemProps = {
    root: CategoryTreeNode;
    searchParams: Record<string, string | string[] | undefined>;
};

const CategoryItem = ({ root, searchParams }: CategoryItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const haveChild = root.children.length > 0;

    // if (!haveChild) return null;

    const activeCategory =
        typeof searchParams.category === "string"
            ? searchParams.category
            : undefined;
    const isActiv = activeCategory === root.slug;

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
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
                    {haveChild && (
                        <ChevronRight
                            size={14}
                            className="text-slate-300 transition-transform rotate-90 md:rotate-0 md:translate-x-1"
                        />
                    )}
                </div>
            </Link>
            {/* Popap */}
            <AnimatePresence>
                {isOpen && haveChild ? (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }} // شروع از کمی سمت چپ‌تر
                        animate={{ opacity: 1, x: 0 }} // حرکت به مکان اصلی
                        exit={{ opacity: 0, x: -10 }} // موقع بسته شدن برگرده عقب
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="md:absolute top-0 md:left-full z-100 md:pl-2 w-full md:w-64"
                    >
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl p-2 ml-4 md:ml-0">
                            <CategoryTree
                                data={root.children}
                                searchParams={searchParams}
                            />
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default CategoryItem;
