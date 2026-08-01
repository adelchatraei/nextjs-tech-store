import { ReactNode } from "react";
import NavLinksItems from "./NavLinksItems";
import { Home, LayoutGrid, LifeBuoy, Zap } from "lucide-react";

export interface DetailsProps {
    id: string;
    name: string;
    url: string;
    icon: ReactNode;
}

const NavLinks = () => {
    const details: DetailsProps[] = [
        {
            id: "1",
            name: "Home",
            url: "/",
            icon: <Home size={16} />,
        },
        {
            id: "2",
            name: "Collection",
            url: "/products",
            icon: <LayoutGrid size={16} />,
        },
        {
            id: "3",
            name: "New Arrivals",
            url: "",
            icon: <Zap size={16} />,
        },
        {
            id: "4",
            name: "Support",
            url: "/support",
            icon: <LifeBuoy size={16} />,
        },
    ];

    return (
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {details.map((detail) => {
                return <NavLinksItems data={detail} key={detail.id} />;
            })}
        </nav>
    );
};

export default NavLinks;
