import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";

const AddProductHeader = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-3">
                <Link
                    href={"/dashboard/super-admin/products"}
                    className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-bold text-sm group"
                >
                    <ArrowLeft
                        size={18}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    Back to Inventory
                </Link>

                <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    Add Product
                </h1>
            </div>

            <button
                type="submit"
                form="product-form"
                className="w-fit flex items-center justify-center  gap-2 px-6 py-3 rounded-2xl bg-primary text-white text-[13px] font-black tracking-[0.12em] shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
            >
                <Plus size={14} strokeWidth={2.5} />
                PUBLISH PRODUCT
            </button>
        </div>
    );
};

export default AddProductHeader;
