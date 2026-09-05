import { Product } from "@/schemas/products/product";
import toast from "react-hot-toast";
import { create } from "zustand";

type WishlistStoreProps = {
    wishlist: Product[];
    addToWishlist: (product: Product) => void;
    toggleWishlist: (product: Product) => void;
    removeFromWishlist: (id: string) => void;
    clearWishlist: () => void;
    isInWishlist: (productId: string) => boolean;
};

const useWishlist = create<WishlistStoreProps>((set, get) => ({
    wishlist: [],

    addToWishlist: (product) => {
        const alreadyExsist = get().wishlist.find(
            (item) => item._id === product._id,
        );

        if (alreadyExsist) return;

        set((state) => ({
            wishlist: [...state.wishlist, product],
        }));
    },

    removeFromWishlist: (id) => {
        set((state) => ({
            wishlist: state.wishlist.filter((item) => item._id !== id),
        }));
    },

    toggleWishlist: (product) => {
        const alreadyExsist = get().wishlist.find(
            (item) => item._id === product._id,
        );

        if (alreadyExsist) {
            get().removeFromWishlist(product._id);
            toast.success("Remove from wishlist");
        } else {
            get().addToWishlist(product);
            toast.success("Add to wishlist");
        }
    },

    clearWishlist: () => {
        set({ wishlist: [] });
    },

    isInWishlist: (id) => {
        return get().wishlist.some((item) => item._id === id);
    },
}));

export default useWishlist;
