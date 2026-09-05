"use client";

import { CreateProductType } from "@/schemas/products/CreateProduct";
import { CategoryTreeNode } from "@/types/category-type";
import { Tag } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";

type ProductOrganizationProps = {
    categories: CategoryTreeNode[];
};

const EditProductOrganization = ({ categories }: ProductOrganizationProps) => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<CreateProductType>();

    const selectedCategory = useWatch({
        control,
        name: "category",
    });

    const selectedParent = categories.find(
        (category) => category._id === selectedCategory,
    );

    const subCategories = selectedParent?.children ?? [];
    return (
        <section className="space-y-6 bg-white border border-gray-100 rounded-[28px] shadow-sm p-5 sm:p-7">
            {/* Header */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Tag size={18} />
                </div>

                <h2 className="text-base sm:text-lg font-black text-foreground">
                    Organization
                </h2>
            </div>
            <div className="pt-2 space-y-5">
                {/* Prices */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Price */}
                    <div>
                        <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.12em] uppercase">
                            Special Price ($)
                        </label>

                        <input
                            placeholder="0.00"
                            type="number"
                            {...register("price", {
                                valueAsNumber: true,
                            })}
                            className="w-full px-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl outline-none text-sm font-bold focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                        />

                        {errors.price && (
                            <p className="mt-1 text-[9px] font-bold text-red-500">
                                {errors.price.message}
                            </p>
                        )}
                    </div>

                    {/* Regular Price */}
                    <div>
                        <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.12em] uppercase">
                            Regular Price ($)
                        </label>

                        <input
                            placeholder="0.00"
                            type="number"
                            {...register("regularPrice", {
                                valueAsNumber: true,
                            })}
                            className="w-full px-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl outline-none text-sm font-bold focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                        />

                        {errors.regularPrice && (
                            <p className="mt-1 text-[9px] font-bold text-red-500">
                                {errors.regularPrice.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {/* Category */}
            <div>
                <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                    Category
                </label>

                <select
                    {...register("category")}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none text-sm font-bold text-foreground focus:border-primary/30 focus:ring-3 focus:ring-primary/5 transition-all cursor-pointer"
                >
                    <option value="">Select category</option>

                    {categories.map((category) => (
                        <option
                            className="cursor-pointer"
                            key={category._id}
                            value={category._id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>

                {errors.category && (
                    <p className="mt-1 text-[9px] font-bold text-red-500">
                        {errors.category.message}
                    </p>
                )}
            </div>
            {/* Sub Category */}
            <div>
                <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                    Sub Category
                </label>

                <select
                    {...register("subCategory")}
                    disabled={!selectedCategory}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none text-sm font-bold text-foreground disabled:bg-gray-100 disabled:text-gray-300 focus:border-primary/30 focus:ring-3 focus:ring-primary/5 transition-all cursor-pointer"
                >
                    <option value="">Select sub-category</option>

                    {subCategories.map((category) => (
                        <option
                            className="cursor-pointer"
                            key={category._id}
                            value={category._id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    );
};

export default EditProductOrganization;
