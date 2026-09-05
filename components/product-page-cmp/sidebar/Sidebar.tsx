import buildCategoryTree from "@/utils/buildCategoryTree";
import CategoryTree from "./CategoryTree";
import CategorySidebarProvider from "./context/CategorySidebarProvider";
import getCategories from "@/querys/categoriesQuery/getCategories";

type SideBarProp = {
    searchParams: Record<string, string | string[] | undefined>;
};

const Sidebar = async ({ searchParams }: SideBarProp) => {
    const categories = await getCategories();

    const tree = buildCategoryTree(categories);

    return (
        <CategorySidebarProvider>
            <CategoryTree data={tree} searchParams={searchParams} />
        </CategorySidebarProvider>
    );
};

export default Sidebar;
