import getCategories from "@/querys/categoriesQuery/getCategories";
import CategoriItem from "./CategoriItem";
import buildCategoryTree from "@/utils/buildCategoryTree";
import { getCategoryIcon } from "@/utils/categoryIcons";

const Categories = async () => {
    const categories = await getCategories();
    const tree = buildCategoryTree(categories);
    return (
        <>
            <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-widest text-[#1E293B]">
                Featured Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {tree.map((item) => {
                    return <CategoriItem data={item} key={item._id} />;
                })}
            </div>
        </>
    );
};

export default Categories;
