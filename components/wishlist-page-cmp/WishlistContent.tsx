"use client";

import useWishlist from "@/store/useWishlist";
import EmptyWishlist from "./EmptyWishlist";
import WishlistItem from "./WishlistItem";

const WishlistContent = () => {
    const items = useWishlist((state) => state.wishlist);
    const isEmpty = items.length === 0;

    return (
        <>
            {isEmpty ? (
                <EmptyWishlist />
            ) : (
                <>
                    <section className="grid  gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        <section className="space-y-4">
                            {items.map((item) => {
                                return (
                                    <WishlistItem
                                        key={item._id}
                                        wishlistItem={item}
                                    />
                                );
                            })}
                        </section>
                    </section>
                </>
            )}
        </>
    );
};

export default WishlistContent;
