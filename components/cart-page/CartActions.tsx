import useBasket from "@/store/useBasket";
import { BasketItem } from "@/types/basket-type";
import { Minus, Plus, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

type CartActionProps = {
    itemBasket: BasketItem;
};

const CartActions = ({ itemBasket }: CartActionProps) => {
    const { addToBasket, removeFromBasket } = useBasket();

    const handleIncrement = () => {
        addToBasket({
            ...itemBasket,
            quantity: 1,
        });
    };

    const handleDecrement = () => {
        removeFromBasket(itemBasket._id);
    };

    const isMinQty = itemBasket.quantity === 1;

    return (
        <>
            {isMinQty ? (
                <button
                    className="grid h-11 w-11 place-items-center rounded-2xl  bg-rose-50 text-rose-600 md:border-none md:bg-white md:text-gray-400 md:hover:bg-rose-50 md:hover:text-rose-600"
                    onClick={() => removeFromBasket(itemBasket._id)}
                >
                    <Trash2 strokeWidth={1.75} size={24} />
                </button>
            ) : null}
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-gray-100 px-2 py-1 lg:gap-1">
                <button
                    className={`grid h-9 w-11 place-items-center rounded-xl ${isMinQty ? "bg-gray-100" : " bg-white"} text-slate-700 transition hover:bg-slate-100 shadow-sm`}
                    onClick={handleDecrement}
                    disabled={isMinQty}
                >
                    <Minus size={22} />
                </button>

                {/* {isMinQty ? null : (
                    <button
                        className="grid h-9 w-11 place-items-center rounded-xl bg-white text-slate-700 transition hover:bg-slate-100 shadow-sm"
                        onClick={handleDecrement}
                    >
                        <Minus size={22} />
                    </button>
                )} */}
                <span className="w-10 text-center text-base font-bold text-slate-900">
                    {itemBasket.quantity}
                </span>
                <button
                    className="grid h-9 w-11 place-items-center rounded-xl bg-white text-slate-700  transition hover:bg-slate-100 shadow-sm"
                    onClick={handleIncrement}
                >
                    <Plus size={22} />
                </button>
            </div>
        </>
    );
};

export default CartActions;
