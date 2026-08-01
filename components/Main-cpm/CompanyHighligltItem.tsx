import { ReactNode } from "react";

export interface HighligltItemProps {
    icon: ReactNode;
    title: string;
    description: string;
    moreStyleIcon: string;
}

const CompanyHighligltItem = ({
    icon,
    title,
    description,
    moreStyleIcon,
}: HighligltItemProps) => {
    return (
        <div className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer">
            <div
                className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${moreStyleIcon}`}
            >
                {icon}
            </div>
            <h3 className="text-xl font-black text-[#1E293B] mb-3 tracking-tighter">
                {title}
            </h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default CompanyHighligltItem;
