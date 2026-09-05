import {
    CreditCard,
    Globe,
    ImageIcon,
    Mail,
    Save,
    Settings,
    Settings2,
    Truck,
} from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="space-y-7 animate-in fade-in slide-in-from-bottom-2 duration-700">
            {/* ================= HEADER ================= */}

            <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Settings size={21} strokeWidth={2.5} />
                </div>

                <div className="space-y-1">
                    <h1 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                        Site Settings
                    </h1>

                    <p className="text-sm font-medium text-gray-500">
                        Manage your platform configuration and global settings.
                    </p>
                </div>
            </div>

            {/* ================= GENERAL SETTINGS ================= */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Platform */}

                <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-7">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Settings2 size={18} strokeWidth={2.5} />
                        </div>

                        <div>
                            <h2 className="text-base sm:text-lg font-black text-foreground">
                                Platform Settings
                            </h2>

                            <p className="text-[10px] font-medium text-gray-400 mt-0.5">
                                Basic platform information
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {/* Platform Name */}

                        <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                                Platform Name
                            </label>

                            <input
                                type="text"
                                defaultValue="TechStore"
                                className="w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-bold text-foreground transition-all focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5"
                            />
                        </div>

                        {/* Logo URL */}

                        <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                                Logo URL
                            </label>

                            <div className="relative">
                                <ImageIcon
                                    size={16}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                                />

                                <input
                                    type="text"
                                    defaultValue="https://example.com/logo.png"
                                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-medium text-gray-600 transition-all focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support */}

                <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-7">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <Mail size={18} strokeWidth={2.5} />
                        </div>

                        <div>
                            <h2 className="text-base sm:text-lg font-black text-foreground">
                                Support Settings
                            </h2>

                            <p className="text-[10px] font-medium text-gray-400 mt-0.5">
                                Customer support information
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {/* Support Email */}

                        <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                                Support Email
                            </label>

                            <div className="relative">
                                <Mail
                                    size={16}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                                />

                                <input
                                    type="email"
                                    defaultValue="support@techstore.com"
                                    className="w-full pl-11 pr-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-medium text-gray-600 transition-all focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5"
                                />
                            </div>
                        </div>

                        {/* Footer Text */}

                        <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                                Footer Text
                            </label>

                            <input
                                type="text"
                                defaultValue="© 2026 TechStore. All rights reserved."
                                className="w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-medium text-gray-600 transition-all focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5"
                            />
                        </div>
                    </div>
                </section>
            </div>
            {/* ================= PLATFORM DESCRIPTION ================= */}

            <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-7">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Settings2 size={18} strokeWidth={2.5} />
                    </div>

                    <div>
                        <h2 className="text-base sm:text-lg font-black text-foreground">
                            Platform Description
                        </h2>

                        <p className="text-[10px] font-medium text-gray-400 mt-0.5">
                            Configure your platform description and SEO
                            information.
                        </p>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                        SEO Description
                    </label>

                    <textarea
                        defaultValue="Modern E-commerce Platform"
                        rows={4}
                        className="w-full px-4 py-4 bg-gray-50 rounded-2xl border border-transparent outline-none resize-none text-sm font-medium text-gray-600 transition-all focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5"
                    />
                </div>
            </section>
            {/* ================= PAYMENT GATEWAYS ================= */}

            <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6 sm:p-7">
                {/* Header */}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <CreditCard size={18} strokeWidth={2.5} />
                        </div>

                        <div>
                            <h2 className="text-base sm:text-lg font-black text-foreground">
                                Payment Gateways
                            </h2>

                            <p className="text-[10px] font-medium text-gray-400 mt-0.5">
                                Configure available payment methods.
                            </p>
                        </div>
                    </div>

                    <span className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                        Select Active Methods
                    </span>
                </div>

                {/* Gateway Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* Cash On Delivery */}

                    <button
                        type="button"
                        className="group flex items-center justify-between gap-3 px-4 py-4 rounded-2xl border border-primary/40 bg-primary/5 text-primary transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Truck size={17} strokeWidth={2} />
                            </div>

                            <span className="text-xs font-black">
                                Cash on Delivery
                            </span>
                        </div>

                        <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                    </button>

                    {/* Bkash */}

                    <button
                        type="button"
                        className="group flex items-center justify-between gap-3 px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/60 text-gray-500 hover:bg-white hover:border-primary/20 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[10px] font-black border border-gray-100">
                                bK
                            </div>

                            <span className="text-xs font-black">bKash</span>
                        </div>

                        <div className="w-5 h-5 rounded-full border border-gray-200" />
                    </button>

                    {/* Nagad */}

                    <button
                        type="button"
                        className="group flex items-center justify-between gap-3 px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/60 text-gray-500 hover:bg-white hover:border-primary/20 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[10px] font-black border border-gray-100">
                                N
                            </div>

                            <span className="text-xs font-black">Nagad</span>
                        </div>

                        <div className="w-5 h-5 rounded-full border border-gray-200" />
                    </button>

                    {/* Rocket */}

                    <button
                        type="button"
                        className="group flex items-center justify-between gap-3 px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/60 text-gray-500 hover:bg-white hover:border-primary/20 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[10px] font-black border border-gray-100">
                                R
                            </div>

                            <span className="text-xs font-black">Rocket</span>
                        </div>

                        <div className="w-5 h-5 rounded-full border border-gray-200" />
                    </button>

                    {/* SSLCommerz */}

                    <button
                        type="button"
                        className="group flex items-center justify-between gap-3 px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/60 text-gray-500 hover:bg-white hover:border-primary/20 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-gray-100">
                                <Globe size={16} className="text-gray-400" />
                            </div>

                            <span className="text-xs font-black">
                                SSLCommerz
                            </span>
                        </div>

                        <div className="w-5 h-5 rounded-full border border-gray-200" />
                    </button>

                    {/* Stripe */}

                    <button
                        type="button"
                        className="group flex items-center justify-between gap-3 px-4 py-4 rounded-2xl border border-gray-100 bg-gray-50/60 text-gray-500 hover:bg-white hover:border-primary/20 transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-gray-100">
                                <CreditCard
                                    size={16}
                                    className="text-gray-400"
                                />
                            </div>

                            <span className="text-xs font-black">Stripe</span>
                        </div>

                        <div className="w-5 h-5 rounded-full border border-gray-200" />
                    </button>
                </div>

                {/* Payment Numbers */}

                <div className="mt-8 pt-7 border-t border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Bkash Number */}

                        <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                                Bkash Number
                            </label>

                            <input
                                type="text"
                                defaultValue="017XXXXXXXX"
                                className="w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-medium text-gray-600 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                            />
                        </div>

                        {/* Nagad Number */}

                        <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                                Nagad Number
                            </label>

                            <input
                                type="text"
                                defaultValue="017XXXXXXXX"
                                className="w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-medium text-gray-600 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                            />
                        </div>

                        {/* Rocket Number */}

                        <div className="space-y-2">
                            <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                                Rocket Number
                            </label>

                            <input
                                type="text"
                                defaultValue="017XXXXXXXX"
                                className="w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-medium text-gray-600 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                            />
                        </div>
                    </div>

                    {/* Payment Instructions */}

                    <div className="mt-5 space-y-2">
                        <label className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                            Payment Instructions
                        </label>

                        <textarea
                            defaultValue="Please make manual payment and provide transaction ID."
                            rows={4}
                            className="w-full px-4 py-4 bg-gray-50 rounded-2xl border border-transparent outline-none resize-none text-sm font-medium text-gray-600 focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                    </div>
                </div>
            </section>
            {/* ================= SAVE SETTINGS ================= */}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-gray-300" />

                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black">
                        Changes are saved globally
                    </span>
                </div>

                <button
                    type="button"
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-primary text-white text-xs font-black shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                    <Save size={16} strokeWidth={2.5} />

                    <span>Save Global Settings</span>
                </button>
            </div>
        </div>
    );
}
