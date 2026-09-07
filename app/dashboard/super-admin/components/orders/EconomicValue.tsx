import { OrderResponseType } from "@/schemas/order/order.schema";
import { ShieldCheck } from "lucide-react";

type EconomicValueProps = {
    order: OrderResponseType;
};

const EconomicValue = ({ order }: EconomicValueProps) => {
    return (
        <td className="px-5 sm:px-7 py-5">
            <div className="space-y-1.5">
                {order.items.map((item, index) => {
                    return (
                        <p
                            key={index}
                            className="text-base font-black text-gray-800"
                        >
                            {item.price}
                        </p>
                    );
                })}

                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/5 border border-primary/10 text-[8px] uppercase tracking-wider font-black text-primary">
                    <ShieldCheck size={10} />
                    {order.paymentMethod} . {order.paymentStatus}
                </span>
            </div>
        </td>
    );
};

export default EconomicValue;
