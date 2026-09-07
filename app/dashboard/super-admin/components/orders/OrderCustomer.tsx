type OrderCustomerProps = {
    shippingInfo: {
        name: string;
        phone: string;
        city: string;
        area: string;
        address: string;
        addressType: "Home" | "Office";
        landmark?: string | undefined;
    };
};

const OrderCustomer = ({ shippingInfo }: OrderCustomerProps) => {
    return (
        <td className="px-5 sm:px-7 py-5">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                    O
                </div>

                <div className="min-w-0">
                    <p className="text-sm font-black text-gray-700 truncate">
                        {shippingInfo.name}
                    </p>

                    <p className="mt-0.5 text-[9px] font-medium text-gray-400 truncate">
                        {shippingInfo.phone}
                    </p>
                </div>
            </div>
        </td>
    );
};

export default OrderCustomer;
