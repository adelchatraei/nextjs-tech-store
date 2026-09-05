import {
    ArrowUpRight,
    CalendarDays,
    ChevronDown,
    Eye,
    Filter,
    Package,
    Search,
    ShieldCheck,
    ShoppingCart,
    TrendingUp,
} from "lucide-react";

const orders = [
    {
        id: "#513C4512",
        date: "Jun 15, 2026",
        customer: "asdasd",
        email: "DASDASD, ASDASDAS",
        price: "৳10",
        status: "AWAITING REVIEW",
        avatar: "A",
    },
    {
        id: "#FE7C66E8",
        date: "Jun 15, 2026",
        customer: "X",
        email: "x, x",
        price: "৳1,010",
        status: "AWAITING REVIEW",
        avatar: "X",
    },
];

export default function OrdersPage() {
    return (
        <div className="space-y-7 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {/* =====================================================
                HEADER
            ===================================================== */}

            <section className="relative overflow-hidden bg-white rounded-[30px] border border-gray-100 shadow-sm px-6 sm:px-8 py-8 sm:py-10">
                {/* Decorative icon */}

                <TrendingUp
                    className="absolute right-5 sm:right-8 top-7 sm:top-8 text-gray-100"
                    size={150}
                    strokeWidth={1.5}
                />

                <div className="relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[9px] font-black uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Live Tracking Active
                    </div>

                    <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                        Order Management
                    </h1>

                    <p className="mt-2 text-sm sm:text-base text-gray-500 font-medium max-w-2xl leading-6">
                        Oversee platform orders, track logistics, and manage
                        fulfillment status in real-time.
                    </p>
                </div>
            </section>

            {/* =====================================================
                ORDERS CONTAINER
            ===================================================== */}

            <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm overflow-hidden">
                {/* ================= TOOLBAR ================= */}

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
                                placeholder="Search Order ID, Client, or Email..."
                                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-50 border border-transparent outline-none text-sm font-medium placeholder:text-gray-400 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                            />
                        </div>

                        {/* Status Filter */}

                        <button
                            type="button"
                            className="w-full xl:w-auto flex items-center justify-between gap-5 px-4 py-3 rounded-2xl bg-white border border-gray-100 text-xs font-bold text-gray-600 hover:border-primary/20 hover:bg-primary/5 transition-all"
                        >
                            <span className="flex items-center gap-2">
                                <Filter size={15} className="text-gray-400" />
                                All Statuses
                            </span>

                            <ChevronDown size={14} className="text-gray-400" />
                        </button>

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
                            {orders.length} Results Found
                        </div>

                        <div className="flex items-center gap-1.5">
                            <span className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100" />

                            <span className="w-7 h-7 rounded-lg bg-purple-50 border border-purple-100" />

                            <span className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-100" />
                        </div>
                    </div>
                </div>

                {/* ================= TABLE ================= */}

                <div className="overflow-x-auto">
                    <table className="w-full min-w-212.5">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="px-5 sm:px-7 py-4 text-left text-[9px] uppercase tracking-widest font-black text-gray-400">
                                    Order Info
                                </th>

                                <th className="px-5 sm:px-7 py-4 text-left text-[9px] uppercase tracking-widest font-black text-gray-400">
                                    Customer
                                </th>

                                <th className="px-5 sm:px-7 py-4 text-left text-[9px] uppercase tracking-widest font-black text-gray-400">
                                    Economic Value
                                </th>

                                <th className="px-5 sm:px-7 py-4 text-left text-[9px] uppercase tracking-widest font-black text-gray-400">
                                    Pipeline Status
                                </th>

                                <th className="px-5 sm:px-7 py-4 text-right text-[9px] uppercase tracking-widest font-black text-gray-400">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-50">
                            {orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="group hover:bg-gray-50/40 transition-colors"
                                >
                                    {/* Order Info */}

                                    <td className="px-5 sm:px-7 py-5">
                                        <div className="space-y-1.5">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-black text-gray-600">
                                                    {order.id}
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

                                                {order.date}
                                            </div>
                                        </div>
                                    </td>

                                    {/* Customer */}

                                    <td className="px-5 sm:px-7 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                                                {order.avatar}
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-black text-gray-700 truncate">
                                                    {order.customer}
                                                </p>

                                                <p className="mt-0.5 text-[9px] font-medium text-gray-400 truncate">
                                                    {order.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Economic Value */}

                                    <td className="px-5 sm:px-7 py-5">
                                        <div className="space-y-1.5">
                                            <p className="text-base font-black text-gray-800">
                                                {order.price}
                                            </p>

                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/5 border border-primary/10 text-[8px] uppercase tracking-wider font-black text-primary">
                                                <ShieldCheck size={10} />
                                                COD · Pending
                                            </span>
                                        </div>
                                    </td>

                                    {/* Pipeline */}

                                    <td className="px-5 sm:px-7 py-5">
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-orange-50 border border-orange-100 text-[9px] font-black tracking-wide text-orange-500 hover:bg-orange-100 transition-all"
                                        >
                                            <Package size={13} />

                                            {order.status}

                                            <ChevronDown size={12} />
                                        </button>
                                    </td>

                                    {/* Actions */}

                                    <td className="px-5 sm:px-7 py-5 text-right">
                                        <button
                                            type="button"
                                            title="View order"
                                            className="w-9 h-9 rounded-xl border border-gray-100 bg-white flex items-center justify-center text-gray-300 hover:text-primary hover:bg-primary/5 hover:border-primary/10 transition-all"
                                        >
                                            <Eye size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
