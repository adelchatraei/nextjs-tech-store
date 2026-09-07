"use client";

import { OrdersResponseType } from "@/schemas/order/order.schema";
import EconomicValue from "../components/orders/EconomicValue";
import OrderCustomer from "../components/orders/OrderCustomer";
import OrderInfo from "../components/orders/OrderInfo";
import OrderPipeline from "../components/orders/OrderPipeline";
import OrderToolbar from "../components/orders/OrderToolbar";
import OrderView from "../components/orders/OrderView";
import { useState } from "react";

type OrderClientProps = {
    orders: OrdersResponseType;
};

const OrderClient = ({ orders }: OrderClientProps) => {
    const [search, setSearch] = useState("");

    const filteredOrders = orders.filter((order) => {
        const query = search.trim().toLowerCase();

        if (!query) return true;

        return (
            order._id.toLowerCase().includes(query) ||
            order.shippingInfo.name.toLowerCase().includes(query) ||
            order.shippingInfo.phone.toLowerCase().includes(query)
        );
    });

    return (
        <>
            {/*TOOLBAR*/}

            <OrderToolbar
                orders={orders}
                search={search}
                setSearch={setSearch}
                filteredOrders={filteredOrders}
            />

            {/*TABLE */}

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
                        {filteredOrders.map((order) => (
                            <tr
                                key={order._id}
                                className="group hover:bg-gray-50/40 transition-colors"
                            >
                                {/* Order Info */}

                                <OrderInfo order={order} />

                                {/* Customer */}

                                <OrderCustomer
                                    shippingInfo={order.shippingInfo}
                                />

                                {/* Economic Value */}

                                <EconomicValue order={order} />

                                {/* Pipeline */}

                                <OrderPipeline status={order.status} />

                                {/* Actions */}

                                <OrderView />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default OrderClient;
