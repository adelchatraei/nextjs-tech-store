import CartContent from "@/components/cart-page/CartContent";
import CartHeader from "@/components/cart-page/CartHeader";

const Support = () => {
    return (
        <div className="min-h-screen bg-[#f5f7fb] px-4 py-6 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl space-y-5">
                <CartHeader />

                <CartContent />
            </div>
        </div>
    );
};

export default Support;
