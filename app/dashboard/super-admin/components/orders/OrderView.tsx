import { Eye } from "lucide-react";

const OrderView = () => {
    return (
        <td className="px-5 sm:px-7 py-5 text-right">
            <button
                type="button"
                title="View order"
                className="w-9 h-9 rounded-xl border border-gray-100 bg-white flex items-center justify-center text-gray-300 hover:text-primary hover:bg-primary/5 hover:border-primary/10 transition-all"
            >
                <Eye size={16} />
            </button>
        </td>
    );
};

export default OrderView;
