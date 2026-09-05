// "use client";

// import {
//     DollarSign,
//     Package,
//     ShoppingBag,
//     Users,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const OverviewCart = () => {
//     const stats = [
//         {
//             title: "TOTAL USERS",
//             value: "2",
//             change: "+12%",
//             icon: Users,
//             iconStyle: "bg-indigo-50 text-indigo-500",
//             changeStyle: "bg-indigo-50 text-indigo-500",
//         },
//         {
//             title: "MARKET ORDERS",
//             value: "1",
//             change: "+5%",
//             icon: ShoppingBag,
//             iconStyle: "bg-emerald-50 text-emerald-500",
//             changeStyle: "bg-emerald-50 text-emerald-500",
//         },
//         {
//             title: "NODE REVENUE",
//             value: "$ 1,010",
//             change: "+18%",
//             icon: DollarSign,
//             iconStyle: "bg-violet-50 text-violet-500",
//             changeStyle: "bg-violet-50 text-violet-500",
//         },
//         {
//             title: "ACTIVE NODES",
//             value: "1",
//             change: "OPTIMAL",
//             icon: Package,
//             iconStyle: "bg-amber-50 text-amber-500",
//             changeStyle: "bg-amber-50 text-amber-600",
//         },
//     ];

//     return (
//         <>
//             {stats.map((stat) => {
//                 const Icon = stat.icon;

//                 return (
//                     <div
//                         key={stat.title}
//                         className=" bg-white border border-gray-100 rounded-3xl p-5 sm:p-6 shadow-sm"
//                     >
//                         <div className="flex items-start justify-between">
//                             {/* Icon */}
//                             <div
//                                 className={`w-12 h-12 rounded-2xl flex items-center justify-center  ${stat.iconStyle}`}
//                             >
//                                 <Icon size={23} strokeWidth={2} />
//                             </div>

//                             {/* Change */}
//                             <span
//                                 className={`px-2.5 py-1 rounded-lg text-[9px] font-black tracking-wide ${stat.changeStyle}`}
//                             >
//                                 {stat.change}
//                             </span>
//                         </div>

//                         <div className="mt-7">
//                             <p className="text-[9px] font-black text-gray-400 tracking-[0.16em]">
//                                 {stat.title}
//                             </p>

//                             <p className="mt-2 text-3xl font-black text-foreground tracking-tight">
//                                 {stat.value}
//                             </p>
//                         </div>
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// export default OverviewCart;

"use client";

import { DollarSign, Package, ShoppingBag, Users } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
    rest: {
        y: 0,
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    },
    hover: {
        y: -2,
        boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
    },
};

const iconVariants = {
    rest: {
        scale: 1,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
    },
    hover: {
        scale: 1.08,
        boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
    },
};

const OverviewCart = () => {
    const stats = [
        {
            title: "TOTAL USERS",
            value: "2",
            change: "+12%",
            icon: Users,
            iconStyle: "bg-indigo-50 text-indigo-500",
            changeStyle: "bg-indigo-50 text-indigo-500",
        },
        {
            title: "MARKET ORDERS",
            value: "1",
            change: "+5%",
            icon: ShoppingBag,
            iconStyle: "bg-emerald-50 text-emerald-500",
            changeStyle: "bg-emerald-50 text-emerald-500",
        },
        {
            title: "NODE REVENUE",
            value: "$ 1,010",
            change: "+18%",
            icon: DollarSign,
            iconStyle: "bg-violet-50 text-violet-500",
            changeStyle: "bg-violet-50 text-violet-500",
        },
        {
            title: "ACTIVE NODES",
            value: "1",
            change: "OPTIMAL",
            icon: Package,
            iconStyle: "bg-amber-50 text-amber-500",
            changeStyle: "bg-amber-50 text-amber-600",
        },
    ];

    return (
        <>
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <motion.div
                        key={stat.title}
                        variants={cardVariants}
                        initial="rest"
                        animate="rest"
                        whileHover="hover"
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 22,
                        }}
                        className="group bg-white border border-gray-100 rounded-4xl p-5 sm:p-6 cursor-pointer "
                    >
                        <div className="flex items-start justify-between">
                            {/* Icon */}
                            <motion.div
                                variants={iconVariants}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 18,
                                }}
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.iconStyle}`}
                            >
                                <Icon size={23} strokeWidth={2} />
                            </motion.div>

                            {/* Change */}
                            <span
                                className={`px-2.5 py-1 rounded-lg text-[9px] font-black tracking-wide ${stat.changeStyle}`}
                            >
                                {stat.change}
                            </span>
                        </div>

                        <div className="mt-7">
                            <p className="text-[9px] font-black text-gray-400 tracking-[0.16em]">
                                {stat.title}
                            </p>

                            <p className="mt-2 text-3xl font-black text-foreground tracking-tight">
                                {stat.value}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
};

export default OverviewCart;
