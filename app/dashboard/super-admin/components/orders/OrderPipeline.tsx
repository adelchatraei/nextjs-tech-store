import { ChevronDown, Package } from "lucide-react";

type OrderPipelineProps = {
    status:
        | "Pending"
        | "Awaiting Payment"
        | "Processing"
        | "Shipped"
        | "Delivered"
        | "Cancelled"
        | "On Hold";
};

const OrderPipeline = ({ status }: OrderPipelineProps) => {
    return (
        <td className="px-5 sm:px-7 py-5">
            <button
                type="button"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-orange-50 border border-orange-100 text-[9px] font-black tracking-wide text-orange-500 hover:bg-orange-100 transition-all"
            >
                <Package size={13} />

                {status}

                <ChevronDown size={12} />
            </button>
        </td>
    );
};

export default OrderPipeline;
