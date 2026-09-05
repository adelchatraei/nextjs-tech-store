import { ArrowLeft, CreditCard } from "lucide-react";
import Link from "next/link";

const CheckoutHeader = () => {
    return (
        <div className="flex gap-6 items-center rounded-4xl bg-white p-3 sm:gap-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
            <Link
                className="flex flex-col px-3 py-1 sm:px-4 sm:py-2 bg-neutral-gray rounded-xl  hover:bg-slate-100 hover:shadow-sm "
                href={"/cart"}
            >
                <ArrowLeft size={20} className="text-gray-400" />
                <span className="text-gray-500 font-semibold text-[10px]">
                    BACK
                </span>
            </Link>
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between w-4/5">
                <div className="md:w-2/3">
                    <h1 className="text-3xl md:text-5xl text-primary font-black tracking-tighter">
                        Checkout
                    </h1>
                    <p className="flex items-center gap-2 font-bold mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                        <CreditCard size={18} className="text-primary" />
                        complete your order details below
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutHeader;
