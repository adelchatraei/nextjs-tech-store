import getOrders from "@/querys/orderQuery/getOrders";
import { TrendingUp } from "lucide-react";

import OrderClient from "./OrderClient";

const OrdersPage = async () => {
    const orders = await getOrders();

    return (
        <div className="space-y-7 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {/* Header */}
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

            {/*ORDERS CONTAINER*/}

            <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm overflow-hidden">
                <OrderClient orders={orders} />
            </section>
        </div>
    );
};

export default OrdersPage;
