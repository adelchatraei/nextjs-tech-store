import Link from "next/link";

export type Category = {
    _id: string;
    name: string;
    slug: string;
    icon: string;
    parent: string | null;
    productCount: number;
};

type Props = {
    data: Category;
};

const CategoriItem = async ({ data }: Props) => {
    const { _id, name, slug, icon, parent, productCount } = await data;

    return (
        <Link href={`/categories/${slug}`}>
            <button className="group p-4 rounded-lg transition-all border flex flex-col items-center gap-3 bg-white border-primary shadow-md active-category">
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-colors overflow-hidden bg-primary/10 text-primary">
                    {icon}
                </div>
                <span className="text-xs font-bold text-slate-700 text-center">
                    {name}
                </span>
            </button>
        </Link>
    );
};

export default CategoriItem;
