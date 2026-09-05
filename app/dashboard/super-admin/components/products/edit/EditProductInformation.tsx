"use client";

import { CreateProductType } from "@/schemas/products/CreateProduct";
import { Box } from "lucide-react";
import { useFormContext } from "react-hook-form";

const EditProductInformation = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<CreateProductType>();

    return (
        <section className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-5 sm:p-7">
            {/* Header */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Box size={18} />
                </div>

                <h2 className="text-base sm:text-lg font-black text-foreground">
                    Product Information
                </h2>
            </div>

            <div className="pt-7 space-y-6">
                {/* Name + Brand */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Product Name */}
                    <div>
                        <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                            Product Name
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. MacBook Pro 14"
                            {...register("name", {
                                required: "Product name is required",
                            })}
                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl outline-none text-sm font-bold text-foreground placeholder:text-gray-300 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                        />

                        {errors.name && (
                            <p className="mt-1.5 ml-1 text-[10px] font-bold text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                            Brand
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. Apple"
                            {...register("brand")}
                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl outline-none text-sm font-bold text-foreground placeholder:text-gray-300 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                        Description
                    </label>

                    <textarea
                        rows={4}
                        placeholder="Detailed product overview..."
                        {...register("description", {
                            required: "Description is required",
                        })}
                        className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl outline-none resize-none text-sm font-medium text-foreground placeholder:text-gray-300 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                    />

                    {errors.description && (
                        <p className="mt-1.5 ml-1 text-[10px] font-bold text-red-500">
                            {errors.description.message}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EditProductInformation;
