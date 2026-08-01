import { BasketItem } from "@/types/basket-type";
import Image from "next/image";
import CartAction from "./CartActions";

type CartItemProps = {
    itemBasket: BasketItem;
};

const CartItem = ({ itemBasket }: CartItemProps) => {
    return (
        <article className="rounded-[28px] bg-white p-4 shadow-md sm:p-5">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
                <div className="relative h-55 w-11/12 overflow-hidden rounded-2xl bg-slate-100 sm:h-32 sm:w-32 sm:flex-none">
                    <Image src={itemBasket?.image} alt={itemBasket.name} fill />
                </div>
                <div className="min-w-0 flex-1 mt-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col items-center sm:items-start">
                        <div>
                            <span className="inline-flex rounded-lg bg-green-100 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase mb-2 justify-center">
                                New Generation
                            </span>
                        </div>
                        <h2 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                            {itemBasket.name}
                        </h2>
                        <span className="mt-4 text-2xl font-black text-primary">
                            $ {itemBasket.price.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 sm:ml-0">
                        <CartAction itemBasket={itemBasket} />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CartItem;
