import { CategoryTreeNode } from "@/types/category-type";
import CategoriItem from "@/components/product-page-cmp/sidebar/CategoryItem";

type CategoryTreeProps = {
    data: CategoryTreeNode[];
    searchParams: Record<string, string | string[] | undefined>;
};

const CategoryTree = ({ data, searchParams }: CategoryTreeProps) => {
    return (
        <>
            {data?.map((root) => {
                return (
                    <CategoriItem
                        key={root._id}
                        root={root}
                        searchParams={searchParams}
                    />
                );
            })}
        </>
    );
};

export default CategoryTree;
