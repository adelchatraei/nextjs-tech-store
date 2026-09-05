"use client";

import { CreateProductType } from "@/schemas/products/CreateProduct";
import { Package } from "lucide-react";
import { useFormContext } from "react-hook-form";

const EditProductStock = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<CreateProductType>();

    return (
        <section className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-5 sm:p-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Package size={18} />
                </div>

                <h2 className="text-base font-black text-foreground">Stock</h2>
            </div>

            <div className="pt-6">
                <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                    Available Units
                </label>

                <input
                    type="number"
                    min="0"
                    {...register("stock", { valueAsNumber: true })}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-transparent rounded-xl outline-none text-sm font-bold text-foreground focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                />

                {errors.stock && (
                    <p className="mt-1.5 ml-1 text-[9px] font-bold text-red-500">
                        {errors.stock.message}
                    </p>
                )}
            </div>
        </section>
    );
};

export default EditProductStock;
