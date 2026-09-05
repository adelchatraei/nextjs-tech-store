import getCategories from "@/querys/categoriesQuery/getCategories";
import AddProductHeader from "../../components/products/add/AddProductHeader";
import ProductForm from "../../components/products/add/ProductForm";
import ProductInformation from "../../components/products/add/ProductInformation";
import ProductOrganization from "../../components/products/add/ProductOrganization";
import buildCategoryTree from "@/utils/buildCategoryTree";
import ProductStock from "../../components/products/add/ProductStock";
import MediaAssets from "../../components/products/add/MediaAssets";
import { Plus } from "lucide-react";
import Specifications from "../../components/products/add/Specifications";

const AddProductPage = async () => {
    const categories = await getCategories();
    const categoryTree = buildCategoryTree(categories);
    return (
        <div className="space-y-6 lg:space-y-7">
            <AddProductHeader />

            <ProductForm>
                <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-4">
                    <div className="space-y-6 ">
                        <ProductInformation />
                        <MediaAssets />
                        <Specifications />
                    </div>

                    <div className="space-y-6">
                        <ProductOrganization categories={categoryTree} />
                        <ProductStock />
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-black hover:bg-neutral-700 hover:shadow-md text-white text-[13px] font-black tracking-[0.14em]"
                        >
                            <Plus size={18} />
                            PUBLISH TO STORE
                        </button>
                    </div>
                </div>
            </ProductForm>
        </div>
    );
};

export default AddProductPage;
