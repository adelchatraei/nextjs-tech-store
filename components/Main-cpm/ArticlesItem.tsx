import Image, { StaticImageData } from "next/image";

export interface ArticlesProps {
    id: string;
    title: string;
    category: string;
    image: StaticImageData;
}

interface ArticlesItemProps {
    data: ArticlesProps;
}

const ArticlesItem = ({ data }: ArticlesItemProps) => {
    return (
        <div className="group cursor-pointer translate-y-0 hover:-translate-y-2 transition-transform duration-500">
            <div className="relative overflow-hidden rounded-[40px] mb-6 aspect-video">
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-3 block">
                {data.category}
            </span>
            <h4 className="text-xl font-black text-gray-900 tracking-tighter leading-tight group-hover:text-primary transition-colors">
                {data.title}
            </h4>
        </div>
    );
};

export default ArticlesItem;
