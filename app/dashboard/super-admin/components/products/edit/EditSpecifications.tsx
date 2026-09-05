"use client";

import { CreateProductType } from "@/schemas/products/CreateProduct";
import { Settings } from "lucide-react";
import { useFormContext } from "react-hook-form";

const EditSpecifications = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<CreateProductType>();
    return (
        <section className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-5 sm:p-7">
            {/* Header */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Settings size={18} />
                </div>

                <h2 className="text-base sm:text-lg font-black text-foreground">
                    Specifications
                </h2>
            </div>

            <div className="pt-7 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Model */}
                    <div>
                        <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                            Model Reference
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. MKGP3LL/A"
                            {...register("modelName")}
                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl outline-none text-sm font-bold text-foreground placeholder:text-gray-300 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                        />

                        {errors.modelName && (
                            <p className="mt-1.5 ml-1 text-[10px] font-bold text-red-500">
                                {errors.modelName.message}
                            </p>
                        )}
                    </div>

                    {/* Warranty */}
                    <div>
                        <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                            Warranty
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. 1-Year Limited"
                            {...register("warranty")}
                            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl outline-none text-sm font-bold text-foreground placeholder:text-gray-300 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                    </div>
                </div>

                {/* Technical Details */}
                <div>
                    <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                        Technical Details
                    </label>

                    <textarea
                        rows={4}
                        placeholder="Key specs (CPU, RAM, Storage...)"
                        {...register("specifications")}
                        className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl outline-none resize-none text-sm font-medium text-foreground placeholder:text-gray-300 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                    />

                    {errors.specifications && (
                        <p className="mt-1.5 ml-1 text-[10px] font-bold text-red-500">
                            {errors.specifications.message}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EditSpecifications;
