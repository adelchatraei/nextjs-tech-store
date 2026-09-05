import WishlistContent from "@/components/wishlist-page-cmp/WishlistContent";
import WishlistHeader from "@/components/wishlist-page-cmp/WishlistHeader";

const WashList = () => {
    return (
        <div className="min-h-screen bg-[#f5f7fb] px-4 py-6 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl space-y-5">
                <WishlistHeader />

                <WishlistContent />
            </div>
        </div>
    );
};

export default WashList;
