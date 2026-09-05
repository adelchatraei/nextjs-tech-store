"use client";

import Loader2 from "@/components/ui/loader/Loader";
import { CreateProductType } from "@/schemas/products/CreateProduct";
import { Save } from "lucide-react";
import Link from "next/link";
import { useFormContext } from "react-hook-form";

const UpdateEditButton = () => {
    const {
        formState: { isSubmitting },
    } = useFormContext<CreateProductType>();
    return (
        <>
            <button
                disabled={isSubmitting}
                type="submit"
                className="grow bg-primary/75 text-white py-5 px-10 rounded-4xl font-black text-sm uppercase tracking-[4px] shadow-2xl shadow-primary/20 hover:bg-primary-dark transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
            >
                {isSubmitting ? (
                    <Loader2 />
                ) : (
                    <>
                        <Save size={18} />
                        Update Product
                    </>
                )}
            </button>
            <Link
                className="bg-neutral-200 text-gray-500 py-5 px-10 rounded-4xl font-black text-sm uppercase tracking-[4px] hover:bg-neutral-300 transition-all text-center"
                href="/dashboard/super-admin/products"
            >
                Cancel
            </Link>
        </>
    );
};

export default UpdateEditButton;
