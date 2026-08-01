export interface Category {
    _id: string;
    name: string;
    slug: string;
    icon?: string;
    parent: string | null;
    productCount?: number;
}

export interface CategoryTreeNode extends Category {
    children: CategoryTreeNode[];
}
