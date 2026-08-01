import CpuIcon from "@/components/icons/Brands/CpuIcon";
import HeadPhoneIcon from "@/components/icons/Brands/HeadPhoneIcon";
import LaptopIcon from "@/components/icons/Brands/LaptopIcon";
import MobileIcon from "@/components/icons/Brands/MobileIcon";
import MonitorIcin from "@/components/icons/Brands/MonitorIcin";

export type BrandsItemProps = {
    stateIcon: "mobile" | "headPhone" | "cpu" | "monitor" | "laptop";
    BrandName: string;
};

const icon = {
    mobile: <MobileIcon />,
    headPhone: <HeadPhoneIcon />,
    cpu: <CpuIcon />,
    monitor: <MonitorIcin />,
    laptop: <LaptopIcon />,
};

const BrandsItem = ({ stateIcon, BrandName }: BrandsItemProps) => {
    return (
        <div className="flex items-center gap-3 group cursor-default">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white hover:rotate-12 transition-transform duration-500">
                {icon[stateIcon]}
            </div>
            <span className="text-sm font-black tracking-tighter text-gray-900 uppercase">
                {BrandName}
            </span>
        </div>
    );
};

export default BrandsItem;
