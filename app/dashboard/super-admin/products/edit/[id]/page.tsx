import getSingleProduct from "@/querys/productQueries/getSingleProduct";
import EditProductInformation from "../../../components/products/edit/EditProductInformation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import EditMediaAssets from "../../../components/products/edit/EditMediaAssets";
import EditSpecifications from "../../../components/products/edit/EditSpecifications";
import EditProductOrganization from "../../../components/products/edit/EditProductOrganization";
import EditProductStock from "../../../components/products/edit/EditProductStock";
import buildCategoryTree from "@/utils/buildCategoryTree";
import getCategories from "@/querys/categoriesQuery/getCategories";
import ProductForm from "../../../components/products/add/ProductForm";
import UpdateEditButton from "../../../components/products/edit/UpdateEditButton";

type EditProductPageProps = {
    params: Promise<{
        id: string;
    }>;
};

const EditProductPage = async ({ params }: EditProductPageProps) => {
    const { id } = await params;
    const singleProduct = await getSingleProduct(id);
    const categories = await getCategories();
    const categoryTree = buildCategoryTree(categories);

    return (
        <ProductForm product={singleProduct}>
            <div className=" relative flex flex-col gap-3">
                <div className="flex justify-between mb-4">
                    <div className="flex flex-col gap-2">
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
                        <span className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                            Edit Product
                        </span>
                    </div>
                    <div className="px-4 py-1.5 h-fit bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/10">
                        Resource ID: {singleProduct._id}
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_340px] gap-4">
                    <div className="space-y-6 ">
                        <EditProductInformation />
                        <EditMediaAssets />
                        <EditSpecifications />
                    </div>

                    <div className="space-y-6">
                        <EditProductOrganization categories={categoryTree} />
                        <EditProductStock />
                    </div>
                </div>
                <div className=" sticky bottom-3 z-50 w-full flex flex-col md:flex-row gap-4 border-t border-gray-50">
                    <UpdateEditButton />
                </div>
            </div>
        </ProductForm>
    );
};

export default EditProductPage;
