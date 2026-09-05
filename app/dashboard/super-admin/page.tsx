import { authOptions } from "@/lib/auth";
import { Package, ShieldCheck, TrendingUp } from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import OverviewCart from "./components/overview/OverviewCart";

const superAdminPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    if (session.user.role !== "super-admin") {
        redirect("/dashboard");
    }

    return (
        <div className="space-y-6 lg:space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    Overview
                </h1>

                <p className="mt-1 text-sm font-medium text-gray-400">
                    Real-time overview of your store
                </p>
            </div>

            {/* Statistics Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
                <OverviewCart />
            </section>

            {/* Bottom Section */}
            <section className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6">
                {/* Revenue Stream */}
                <div className="bg-white border border-gray-100 rounded-[28px] shadow-sm overflow-hidden">
                    {/* Card Header */}
                    <div className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                        <div>
                            <h2 className="text-xl font-black text-foreground tracking-tight">
                                Revenue Stream
                            </h2>

                            <p className="mt-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                                Real-time acquisition metrics
                            </p>
                        </div>

                        {/* Daily / Monthly */}
                        <div className="flex items-center gap-1 p-1 bg-gray-50 rounded-xl">
                            <button
                                type="button"
                                className="px-4 py-2 rounded-lg bg-white text-primary text-[9px] font-black tracking-wide shadow-sm"
                            >
                                DAILY
                            </button>

                            <button
                                type="button"
                                className="px-4 py-2 rounded-lg text-gray-400 text-[9px] font-black tracking-wide"
                            >
                                MONTHLY
                            </button>

                            <div className="w-8 h-8 ml-1 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                                <TrendingUp size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Chart Area */}
                    <div className="px-5 sm:px-7 pb-6">
                        <div className="relative h-70 sm:h-85">
                            {/* Grid */}
                            <div className="absolute inset-0 flex flex-col justify-between">
                                <span className="border-t border-gray-50" />
                                <span className="border-t border-gray-50" />
                                <span className="border-t border-gray-50" />
                                <span className="border-t border-gray-50" />
                                <span className="border-t border-gray-50" />
                            </div>

                            {/* Temporary Chart */}
                            <div className="absolute inset-x-5 bottom-8 top-5 flex items-end justify-around">
                                {[
                                    "15%",
                                    "28%",
                                    "20%",
                                    "38%",
                                    "30%",
                                    "52%",
                                    "78%",
                                ].map((height, index) => (
                                    <div
                                        key={index}
                                        className="w-7 sm:w-10 rounded-t-xl bg-primary/10 relative"
                                        style={{ height }}
                                    >
                                        {index === 6 && (
                                            <div className="absolute inset-x-0 bottom-0 h-full rounded-t-xl bg-primary" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* X Axis */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-around">
                                {[
                                    "TUE",
                                    "WED",
                                    "THU",
                                    "FRI",
                                    "SAT",
                                    "SUN",
                                    "MON",
                                ].map((day) => (
                                    <span
                                        key={day}
                                        className={`text-[8px] font-black tracking-widest ${
                                            day === "MON"
                                                ? "text-primary"
                                                : "text-gray-300"
                                        }`}
                                    >
                                        {day}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stock Protocol */}
                <div className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-5 sm:p-7">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-xl font-black text-foreground tracking-tight">
                                Stock Protocol
                            </h2>

                            <p className="mt-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                                Inventory integrity
                            </p>
                        </div>

                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                            <Package size={19} />
                        </div>
                    </div>

                    {/* Product Stock */}
                    <div className="mt-8">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 min-w-0">
                                <ShieldCheck
                                    size={16}
                                    className="text-emerald-400 shrink-0"
                                />

                                <span className="text-sm font-black text-foreground truncate">
                                    iPhone 17 Pro
                                </span>
                            </div>

                            <span className="shrink-0 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-500 text-[9px] font-black">
                                10 UNITS
                            </span>
                        </div>

                        {/* Stock Progress */}
                        <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full w-[82%] bg-primary rounded-full" />
                        </div>
                    </div>

                    {/* Sync Button */}
                    <button
                        type="button"
                        className="w-full mt-8 py-3.5 rounded-2xl bg-gray-50 text-gray-400 text-[9px] font-black tracking-[0.12em] hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                        SYNC CATALOG INTEGRITY
                    </button>
                </div>
            </section>
        </div>
    );
};

export default superAdminPage;
