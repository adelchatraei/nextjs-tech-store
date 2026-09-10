"use client";

import { ChevronDown, Filter } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const statusOptions = [
    {
        value: "All",
        label: "All Statuses",
    },
    {
        value: "Pending",
        label: "Pending Approval",
    },
    {
        value: "Processing",
        label: "Processing",
    },
    {
        value: "Shipped",
        label: "Out for Delivery",
    },
    {
        value: "Delivered",
        label: "Completed",
    },
    {
        value: "Cancelled",
        label: "Cancelled",
    },
] as const;

type OrderStatusProps = {
    status: string;
    setStatus: (value: string) => void;
};

const OrderStatusFilter = ({ setStatus, status }: OrderStatusProps) => {
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    return (
        <div className="relative w-full xl:w-auto">
            <button
                type="button"
                onClick={() => setIsStatusOpen((prev) => !prev)}
                className="w-full xl:w-auto min-w-44 flex items-center justify-between gap-5 px-4 py-3 rounded-2xl bg-white border border-gray-100 text-xs font-bold text-gray-600 hover:border-primary/20 hover:bg-primary/5 transition-all"
            >
                <span className="flex items-center gap-2">
                    <Filter size={15} className="text-gray-400" />

                    {
                        statusOptions.find((option) => option.value === status)
                            ?.label
                    }
                </span>

                <ChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform ${
                        isStatusOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isStatusOpen && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                        }}
                    >
                        <div className="absolute z-50 top-full left-0 right-0 xl:right-auto mt-2 min-w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50">
                                <span className="text-[9px] uppercase tracking-widest font-black text-gray-300">
                                    Filter By Status
                                </span>

                                {status !== "All" && (
                                    <button
                                        type="button"
                                        onClick={() => setStatus("All")}
                                        className="text-[10px] font-black text-green-500 hover:text-green-600 transition-colors"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>

                            <div className="py-1">
                                {statusOptions.map((option) => {
                                    const isActive = status === option.value;

                                    return (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => {
                                                setStatus(option.value);
                                                setIsStatusOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-4 py-3.5 text-left text-sm font-bold transition-colors ${
                                                isActive
                                                    ? "bg-green-50 text-green-500"
                                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            }`}
                                        >
                                            <span>{option.label}</span>

                                            {isActive && (
                                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default OrderStatusFilter;
