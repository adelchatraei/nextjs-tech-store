import { PackageSearch, Sparkles } from "lucide-react";
import Link from "next/link";

const EmptyCart = () => {
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
                    Your cart is empty
                </h2>

                <p className="mb-12 font-medium text-gray-500">
                    Browse our collection and add the devices you need for your
                    next workflow
                </p>

                <Link
                    href="/products"
                    className="inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-4 text-xs font-black uppercase tracking-[3px] text-white shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                    <Sparkles size={18} strokeWidth={2} aria-hidden="true" />
                    EXPLORE STORE
                </Link>
            </div>
        </main>
    );
};

export default EmptyCart;
//
//     <Image
//         src={emptyCart}
//         alt="empty-cart-image"
//         loading="lazy"
//         width={400}
//         height={400}
//         className="opacity-30 w-50 h-50 sm:w-75 sm:h-75"
//     />

//     <p className="text-3xl sm:text-5xl text-gray-300 opacity-50 font-bold uppercase ">
//         Your cart is empty !
//     </p>
// </section>
