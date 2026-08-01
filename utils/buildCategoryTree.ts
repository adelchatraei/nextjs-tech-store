import { Category, CategoryTreeNode } from "@/types/category-type";

// دریافت لیست خام دسته‌ها و تبدیل آن به یک ساختار درختی
export default function buildCategoryTree(
    categories: Category[],
): CategoryTreeNode[] {
    const roots: Category[] = categories.filter((item) => item.parent === null);

    const tree = roots.map((root) => buildTree(root, categories));

    return tree;
}

// ایجاد یک گره درختی و اضافه کردن فرزندان آن به صورت بازگشتی
function buildTree(category: Category, categories: Category[]) {
    const newCategory: CategoryTreeNode = {
        ...category,
        children: [],
    };

    const childrenItem = categories.filter(
        (item) => item.parent === category._id,
    );

    const child = childrenItem.map((child) => buildTree(child, categories));

    newCategory.children = child;

    return newCategory;
}
