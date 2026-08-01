import AccountIcon from "@/components/icons/NavBar/AccountIcon";
import Favorite from "@/components/icons/NavBar/FavoriteIcon";
import HamburgerMenuIcon from "@/components/icons/NavBar/HamburgerMenuIcon";
import Link from "next/link";
import ShopingBasket from "./shopingBasket";

const HeaderActions = () => {
    return (
        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-5">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/10 transition-all">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search text-gray-400 cursor-pointer hover:text-primary transition-colors"
                    aria-hidden="true"
                >
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx="11" cy="11" r="8"></circle>
                </svg>
                <input
                    type="text"
                    placeholder="Find enything..."
                    className="bg-transparent border-none focus:ring-0 text-sm font-medium w-32 xl:w-48 placeholder:text-gray-400 outline-none"
                />
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
                <Link
                    href={"/wishlist"}
                    className="p-2 sm:p-2.5 hover:bg-gray-50 rounded-2xl transition-colors relative text-gray-500 group hidden sm:block"
                >
                    <Favorite />
                </Link>

                <ShopingBasket />

                <Link
                    href={"/login"}
                    className="flex items-center gap-2 pl-2 pr-2 sm:pr-6 py-1.5 sm:py-2.5 bg-primary text-white rounded-[14px] sm:rounded-[18px] font-black hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 active:translate-y-0 group shadow-lg shadow-primary/20"
                >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center cursor-pointer">
                        <AccountIcon />
                    </div>
                    <span className="hidden sm:block text-xs sm:text-sm tracking-tight">
                        Sign in
                    </span>
                </Link>
                <button className="p-2 sm:p-2.5 bg-gray-50 text-gray-500 rounded-xl sm:rounded-2xl lg:hidden hover:bg-white border border-transparent hover:border-gray-100 transition-all">
                    <HamburgerMenuIcon />
                </button>
            </div>
        </div>
    );
};

export default HeaderActions;
