import getCategories from "@/querys/categoriesQuery/getCategories";
import CategoryForm from "../components/categories/CategoryForm";
import SystemCategories from "../components/categories/SystemCategories";
import buildCategoryTree from "@/utils/buildCategoryTree";
import { CategoriesManagementProvider } from "@/context/categoriesManagement";
import { Suspense } from "react";
import CategorySkeleton from "../components/skeleton-loading/category/CategorySkeleton";

const CategoriesPage = async () => {
    const categoriesData = await getCategories();
    const categoriTree = buildCategoryTree(categoriesData);

    return (
        <div className="space-y-6 lg:space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                    Categories <span className="text-gray-300">Inventory</span>
                </h1>

                <p className="mt-1  text-sm font-medium text-gray-400">
                    Organize your store structure and monitor product
                    distribution
                </p>
            </div>

            {/* Main Content */}
            <Suspense fallback={<CategorySkeleton />}>
                <CategoriesManagementProvider>
                    <div className="grid grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)] gap-6">
                        {/* Add New Category */}

                        <CategoryForm categories={categoriesData} />

                        {/* System Categories */}

                        <SystemCategories
                            categoriesData={categoriTree}
                            totalCategories={categoriesData.length}
                        />
                    </div>
                </CategoriesManagementProvider>
            </Suspense>
        </div>
    );
};

export default CategoriesPage;
