"use client";

import useBasket from "@/store/useBasket";
import { Trash2 } from "lucide-react";

const ClearAllButton = () => {
    const { clearBasket } = useBasket();
    const items = useBasket((state) => state.BasketItems);
    const isEmpty = items.length > 0;
    return (
        <>
            {isEmpty && (
                <div className="flex">
                    <button
                        className="text-rose-500 text-[14px] font-bold bg-stone-50 hover:text-red-50 hover:bg-rose-500  px-3 py-1 sm:px-6 sm:py-2 rounded-xl border border-rose-300  transition-all flex items-center shadow-[0px_2px_8px_rgba(0,0,0,0.15)] gap-2"
                        onClick={clearBasket}
                    >
                        <Trash2 size={16} />
                        Clear all products
                    </button>
                </div>
            )}
        </>
    );
};
export default ClearAllButton;
