import { BasketItem } from "@/types/basket-type";
import { create } from "zustand";

type BasketStore = {
    BasketItems: BasketItem[];
    addToBasket: (product: BasketItem) => void;
    removeFromBasket: (id: string) => void;
    clearBasket: () => void;
};

const useBasket = create<BasketStore>((set, get) => ({
    BasketItems: [],

    addToBasket: (product) => {
        const alreadyExsist = get().BasketItems.find(
            (item) => item._id === product._id,
        );

        if (alreadyExsist) {
            set((state) => ({
                BasketItems: state.BasketItems.map((item) => {
                    if (item._id === product._id) {
                        return {
                            ...item,
                            quantity: item.quantity + product.quantity,
                        };
                    }
                    return item;
                }),
            }));

            return;
        }

        set((state) => ({
            BasketItems: [...state.BasketItems, product],
        }));
    },

    removeFromBasket: (id) => {
        const currentItem = get().BasketItems.find((items) => items._id === id);

        if (!currentItem) return;

        if (currentItem.quantity === 1) {
            set((state) => ({
                BasketItems: state.BasketItems.filter(
                    (item) => item._id !== id,
                ),
            }));

            return;
        }

        if (currentItem.quantity > 1) {
            set((state) => ({
                BasketItems: state.BasketItems.map((item) => {
                    if (item._id === currentItem._id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item;
                }),
            }));
            return;
        }
    },

    clearBasket: () => {
        set({
            BasketItems: [],
        });
    },
}));

export default useBasket;
