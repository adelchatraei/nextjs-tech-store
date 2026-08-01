import { CreditCard, Zap } from "lucide-react";

const CartHeader = () => {
    return (
        <div className="rounded-[28px] bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="md:w-2/3">
                    <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">
                        Your <span className="text-primary italic">Cart</span>
                    </h1>
                    <p className="flex items-center gap-2 font-bold mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                        <CreditCard size={18} className="text-primary" />
                        Review your selected items and proceed to checkout
                    </p>
                </div>
                <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#F5F7FB] px-3 py-1 text-sm font-medium text-primary inset-shadow-sm inset-shadow-primary-light">
                        <Zap size={14} />
                        <span className="text-gray-500">
                            Fast Checkout Available
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartHeader;
