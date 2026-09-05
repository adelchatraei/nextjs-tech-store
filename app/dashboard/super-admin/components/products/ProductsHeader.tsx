import { Plus } from "lucide-react";
import Link from "next/link";

const ProductsHeader = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Product Inventory
                </h1>

                <p className="text-gray-500 text-sm font-medium">
                    Manage your catalog, stock levels, and product visibility.
                </p>
            </div>

            <Link
                href={"/dashboard/super-admin/products/add"}
                type="button"
                className="w-fit flex items-center justify-center gap-2.5 px-6 py-3 bg-primary text-white rounded-2xl text-[14px] font-black shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
                <Plus size={17} strokeWidth={2.5} />

                <span>ADD NEW PRODUCT</span>
            </Link>
        </div>
    );
};

export default ProductsHeader;
