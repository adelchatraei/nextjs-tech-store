import { CategoryTreeNode } from "@/types/category-type";
import { Grid2X2 } from "lucide-react";
import SystemCategoriesTable from "./SystemCategoriesTable";

export type SystemCategoriesProps = {
    categoriesData: CategoryTreeNode[];
    totalCategories: number;
};

const SystemCategories = ({
    categoriesData,
    totalCategories,
}: SystemCategoriesProps) => {
    return (
        <div className="bg-white border border-gray-100 rounded-[28px] shadow-sm overflow-hidden h-fit">
            {/* Header */}
            <div className="p-5 sm:p-7 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Grid2X2 size={19} />
                    </div>

                    <div>
                        <h2 className="text-lg font-black text-foreground">
                            System Categories
                        </h2>

                        <p className="mt-1 text-[9px] font-black text-gray-400 tracking-[0.14em] uppercase">
                            {totalCategories} Total Entries
                        </p>
                    </div>
                </div>
            </div>

            {/* Table */}

            <SystemCategoriesTable
                categoriesData={categoriesData}
                totalCategories={0}
            />
        </div>
    );
};

export default SystemCategories;
