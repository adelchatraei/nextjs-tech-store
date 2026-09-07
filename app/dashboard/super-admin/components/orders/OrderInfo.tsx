import { OrderResponseType } from "@/schemas/order/order.schema";
import { ArrowUpRight, CalendarDays } from "lucide-react";

type OrderInfoProps = {
    order: OrderResponseType;
};

const OrderInfo = ({ order }: OrderInfoProps) => {
    const fullDate = new Date(order.createdAt);
    return (
        <td className="px-5 sm:px-7 py-5">
            <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-gray-600">
                        {order._id}
                    </span>

                    <button
                        type="button"
                        className="text-gray-300 hover:text-primary transition-colors"
                    >
                        <ArrowUpRight size={12} />
                    </button>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-medium text-gray-400">
                    <CalendarDays size={12} />

                    {fullDate.toLocaleString()}
                </div>
            </div>
        </td>
    );
};

export default OrderInfo;
