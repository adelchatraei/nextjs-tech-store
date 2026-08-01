import { MessageCircle, ShieldCheck, ShoppingBag } from "lucide-react";
import CompanyHighligltItem, {
    HighligltItemProps,
} from "./CompanyHighligltItem";

const CompanyHighlights = () => {
    const items: HighligltItemProps[] = [
        {
            icon: <ShoppingBag size={32} />,
            title: "Fast. Reliable. Global.",
            description:
                "We ship your gear within 48 hours, wherever you are in the world.",
            moreStyleIcon: "bg-blue-50 text-blue-500",
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "We've Got Your Back",
            description:
                "Enjoy a full year of hassle-free replacements. No questions asked.",
            moreStyleIcon: "bg-green-50 text-green-500",
        },
        {
            icon: <MessageCircle size={32} />,
            title: "Here to Help, 24/7",
            description:
                "Got a question? Our tech experts are ready to help you anytime, day or night.",
            moreStyleIcon: "bg-purple-50 text-purple-500",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item) => {
                return (
                    <CompanyHighligltItem
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        moreStyleIcon={item.moreStyleIcon}
                    />
                );
            })}
        </div>
    );
};

export default CompanyHighlights;
