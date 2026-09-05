import { CreditCard, ShieldCheck, Truck, Zap } from "lucide-react";

const PaymentsPage = () => {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {/* ================= HEADER ================= */}

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
                <div className="space-y-1">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                        Payment Gateways
                    </h1>

                    <p className="text-gray-500 text-sm font-medium">
                        Toggle and configure secure payment options for your
                        store.
                    </p>
                </div>

                <div className="w-fit flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-500">
                    <ShieldCheck size={14} />

                    <span className="text-[9px] uppercase tracking-widest font-black">
                        Secure 256-bit SSL
                    </span>
                </div>
            </div>

            {/* ================= PAYMENT GATEWAYS ================= */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {/* Cash on Delivery */}

                <div className="bg-white rounded-[30px] border-2 border-primary/30 shadow-sm p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                            <Truck size={25} strokeWidth={2.5} />
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-black text-foreground">
                            Cash on Delivery
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Allow customers to pay upon receipt of goods.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-widest font-black text-primary">
                            Connected
                        </span>

                        {/* UI only */}

                        <div className="w-14 h-7 rounded-full bg-primary p-1 flex justify-end">
                            <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
                        </div>
                    </div>
                </div>

                {/* Stripe */}

                <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6 sm:p-7">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400">
                        <CreditCard size={25} strokeWidth={2} />
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-black text-gray-400">
                            Stripe Checkout
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            Secure credit & debit card payments globally.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-widest font-black text-gray-300">
                            Inactive
                        </span>

                        <div className="w-14 h-7 rounded-full bg-gray-100 p-1">
                            <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
                        </div>
                    </div>
                </div>

                {/* SSLCommerz */}

                <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6 sm:p-7">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400">
                        <ShieldCheck size={25} strokeWidth={2} />
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-black text-gray-400">
                            SSLCommerz
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            Popular local payment gateway for Bangladesh.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-widest font-black text-gray-300">
                            Inactive
                        </span>

                        <div className="w-14 h-7 rounded-full bg-gray-100 p-1">
                            <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= SMART ROUTING ================= */}

            <div className="bg-green-50/70 border border-green-100 rounded-[30px] p-5 sm:p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-green-100 flex items-center justify-center text-primary shadow-sm">
                            <Zap size={22} fill="currentColor" />
                        </div>

                        <div>
                            <h2 className="text-base sm:text-lg font-black text-foreground">
                                Next-Gen Payment Smart Routing
                            </h2>

                            <p className="mt-1 text-xs sm:text-sm leading-6 text-gray-500 max-w-3xl">
                                Our platform automatically routes payments
                                during peak traffic to ensure 99.9% uptime for
                                your store.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full md:w-auto shrink-0 px-6 py-3.5 rounded-2xl bg-white border border-green-100 text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm"
                    >
                        Advanced Config
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentsPage;
