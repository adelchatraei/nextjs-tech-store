"use client";

import Link from "next/link";
import {
    BarChart3,
    Users,
    Store,
    Package,
    WandSparkles,
    ShoppingCart,
    Heart,
    Settings,
    CreditCard,
    User,
    LogOut,
    House,
} from "lucide-react";
import { usePathname } from "next/navigation";

const sidebarItems = [
    {
        label: "Overview",
        href: "/dashboard/super-admin",
        icon: BarChart3,
    },
    {
        label: "Users",
        href: "/dashboard/super-admin/users",
        icon: Users,
    },
    {
        label: "Categories",
        href: "/dashboard/super-admin/categories",
        icon: Store,
    },
    {
        label: "Products",
        href: "/dashboard/super-admin/products",
        icon: Package,
    },
    {
        label: "Banner",
        href: "/dashboard/super-admin/banner",
        icon: WandSparkles,
    },
    {
        label: "Orders",
        href: "/dashboard/super-admin/orders",
        icon: ShoppingCart,
    },
    {
        label: "My Wishlist",
        href: "/wishlist",
        icon: Heart,
    },
    {
        label: "Site Settings",
        href: "/dashboard/super-admin/settings",
        icon: Settings,
    },
    {
        label: "Payments",
        href: "/dashboard/super-admin/payments",
        icon: CreditCard,
    },
    {
        label: "Profile",
        href: "/dashboard/super-admin/profile",
        icon: User,
    },
];

const Sidebar = () => {
    const pathName = usePathname();
    return (
        <aside className="hidden lg:flex lg:sticky top-0 h-fit px-3 w-70 shrink-0 flex-col bg-white border-r border-gray-100 shadow-md">
            {/* Logo */}
            <div className="h-20 px-6 flex items-center">
                <Link
                    href={"/"}
                    className="text-xl sm:text-2xl font-black text-primary flex items-center gap-1.5 sm:gap-2 group"
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-[14px] sm:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform duration-500">
                        <Store className="sm:w-5.5 sm:h-5.5" />
                    </div>

                    <span className="text-lg sm:text-2xl tracking-tighter font-bold">
                        Tech
                        <span className="text-foreground">Stor</span>
                    </span>
                </Link>
            </div>

            {/* Back to Shop */}
            <div className="px-4 mb-3">
                <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-500 hover:text-foreground hover:bg-gray-50 rounded-xl transition-colors"
                >
                    <House size={18} />

                    <span>Back to Shop</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-2 space-y-1 border-t-2 border-gray-100">
                {sidebarItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                                pathName === item.href
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-foreground"
                            }`}
                        >
                            <Icon
                                size={19}
                                strokeWidth={2}
                                className={`${pathName === item.href ? "text-white" : "group-hover:text-primary"}`}
                            />

                            <span>{item.label}</span>

                            {pathName === item.href && (
                                <span className="ml-auto w-1.5 h-6 rounded-full bg-white/80" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Sign Out */}
            <div className="p-3 border-t border-gray-100">
                <button
                    type="button"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors text-sm font-bold"
                >
                    <LogOut size={19} />

                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
