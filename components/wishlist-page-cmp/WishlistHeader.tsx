import { HeartPlus } from "lucide-react";

const WishlistHeader = () => {
    return (
        <div className="rounded-[28px] bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="md:w-2/3">
                    <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">
                        My <span className="text-red-500 italic">Wishlist</span>
                    </h1>
                    <p className="flex items-center gap-2 font-bold mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                        <HeartPlus size={18} className="text-red-300" />
                        Your personalized collection of tech marvels
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WishlistHeader;
