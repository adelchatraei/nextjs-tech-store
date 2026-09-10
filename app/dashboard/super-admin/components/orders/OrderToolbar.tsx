import { OrdersResponseType } from "@/schemas/order/order.schema";
import { Clock, Search, ShoppingCart } from "lucide-react";
import OrderStatusFilter from "./OrderStatusFilter";

type OrderToolbarProps = {
    orders: OrdersResponseType;
    search: string;
    setSearch: (value: string) => void;
    status: string;
    setStatus: (value: string) => void;
    filteredOrders: OrdersResponseType;
};

const OrderToolbar = ({
    search,
    setSearch,
    filteredOrders,
    status,
    setStatus,
}: OrderToolbarProps) => {
    return (
        <div className="p-5 sm:p-6 border-b border-gray-100">
            <div className="flex flex-col xl:flex-row xl:items-center gap-4">
                {/* Search */}

                <div className="relative flex-1">
                    <Search
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search Order ID, Client, or Phone..."
                        className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-50 border border-transparent outline-none text-sm font-medium placeholder:text-gray-400 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>

                {/* Status Filter */}

                <OrderStatusFilter status={status} setStatus={setStatus} />

                {/* Active Filters */}

                <div className="xl:ml-auto pl-0 xl:pl-5 xl:border-l border-gray-100">
                    <p className="text-[8px] uppercase tracking-widest font-black text-gray-400">
                        Active Filters
                    </p>

                    <p className="mt-0.5 text-xs font-black text-gray-600">
                        Broad Search
                    </p>
                </div>
            </div>

            {/* Results + status indicators */}

            <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-gray-400">
                    <ShoppingCart size={13} />
                    <span className="text-primary-light font-bold">
                        {filteredOrders.length}{" "}
                    </span>
                    Results Found
                </div>

                <div className="hidden sm:flex items-center gap-4">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-lg border-2 border-white bg-blue-100 text-blue-600 flex items-center justify-center text-[8px] font-black shadow-sm">
                            <Clock size={10} />
                        </div>
                        <div className="w-8 h-8 rounded-lg border-2 border-white bg-purple-100 text-purple-600 flex items-center justify-center text-[8px] font-black shadow-sm">
                            <Clock size={10} />
                        </div>
                        <div className="w-8 h-8 rounded-lg border-2 border-white bg-orange-100 text-orange-600 flex items-center justify-center text-[8px] font-black shadow-sm">
                            <Clock size={10} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderToolbar;
