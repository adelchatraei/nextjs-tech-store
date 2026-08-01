// const WashList = () => {
//     return <div>WashList page</div>;
// };

import CheckoutContent from "@/components/checkout-page-cmp/CheckoutContent";
import CheckoutHeader from "@/components/checkout-page-cmp/CheckoutHeader";

// export default WashList;

const wishlist = () => {
    return (
        <div className="min-h-screen bg-[#f5f7fb] px-4 py-6 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl space-y-5">
                <CheckoutHeader />

                <CheckoutContent />
            </div>
        </div>
    );
};

export default wishlist;
