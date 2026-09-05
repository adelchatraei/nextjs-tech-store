import { PackageSearch, Sparkles } from "lucide-react";
import Link from "next/link";

const EmptyWishlist = () => {
    return (
        <main className="flex flex-col justify-center items-center gap-2">
            <div className="mx-auto max-w-xl py-32 text-center">
                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[30px] bg-gray-100 text-gray-300 shadow-inner">
                    <PackageSearch
                        size={40}
                        strokeWidth={2}
                        aria-hidden="true"
                    />
                </div>

                <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground">
                    Your wishlist is empty
                </h2>

                <p className="mb-12 font-medium text-gray-500">
                    Browse our collection and add the devices that interest you
                </p>

                <Link
                    href="/products"
                    className="inline-flex items-center gap-3 rounded-2xl bg-rose-400 px-10 py-4 text-xs font-black uppercase tracking-[3px] text-white shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                    <Sparkles size={18} strokeWidth={2} aria-hidden="true" />
                    EXPLORE STORE
                </Link>
            </div>
        </main>
    );
};

export default EmptyWishlist;
