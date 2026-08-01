import Link from "next/link";
import BrandIcon from "@/components/icons/Logo/Brand-icon";

const Logo = () => {
    return (
        <Link
            href={"/"}
            className="text-xl sm:text-2xl font-black text-primary flex items-center gap-1.5 sm:gap-2 group"
        >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-[14px] sm:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform duration-500">
                <BrandIcon />
            </div>

            <span className="text-lg sm:text-2xl tracking-tighter font-bold">
                Tech
                <span className="text-foreground">Stor</span>
            </span>
        </Link>
    );
};

export default Logo;
