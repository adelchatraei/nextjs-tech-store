import Link from "next/link";
import {
    ArrowLeft,
    Camera,
    Grid2X2,
    Lock,
    Save,
    ShieldCheck,
    User,
} from "lucide-react";

const superAdminProfile = () => {
    return (
        <div className="space-y-7 sm:space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/20 transition-all shadow-sm"
                    >
                        <ArrowLeft size={17} />
                    </button>

                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                            Profile Settings
                        </h1>

                        <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">
                            Identity & Security
                        </p>
                    </div>
                </div>

                <div className="w-fit flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                    <span className="text-[9px] uppercase tracking-widest font-black text-green-500">
                        Active Member
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_280px] gap-6">
                <div className="space-y-6">
                    <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-6 sm:p-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-green-50 text-primary flex items-center justify-center border border-green-100">
                                <User size={22} />
                            </div>

                            <div>
                                <h2 className="text-lg sm:text-xl font-black text-foreground">
                                    Personal Information
                                </h2>

                                <p className="text-[9px] uppercase tracking-widest font-black text-gray-400">
                                    Update your name and photo
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                            {/* FULL NAME */}

                            <div>
                                <label className="block mb-2 text-[9px] uppercase tracking-widest font-black text-gray-400">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    defaultValue="alireza test"
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 outline-none text-sm font-bold text-gray-700 transition-all"
                                />
                            </div>

                            {/* EMAIL */}

                            <div>
                                <label className="block mb-2 text-[9px] uppercase tracking-widest font-black text-gray-400">
                                    Email Address (Read-only)
                                </label>

                                <input
                                    type="email"
                                    value="hossein.alireza485@gmail.com"
                                    readOnly
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 text-gray-400 border border-transparent outline-none text-sm font-bold cursor-not-allowed"
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            className="mt-6 flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-primary text-white text-[10px] uppercase tracking-widest font-black shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
                        >
                            <Save size={15} />
                            Update Profile
                        </button>
                    </section>

                    <section className="relative overflow-hidden bg-[#061722] rounded-[30px] p-6 sm:p-8 text-white">
                        {/* decorative lock */}

                        <Lock
                            className="absolute right-8 top-12 text-green-500/5"
                            size={150}
                            strokeWidth={1}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-primary flex items-center justify-center">
                                    <ShieldCheck size={22} />
                                </div>

                                <div>
                                    <h2 className="text-lg sm:text-xl font-black">
                                        Security Center
                                    </h2>

                                    <p className="text-[9px] uppercase tracking-widest font-black text-white/30">
                                        Keep your account safe
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 space-y-5">
                                {/* CURRENT PASSWORD */}

                                <div>
                                    <label className="block mb-2 text-[9px] uppercase tracking-widest font-black text-white/35">
                                        Current Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter current password"
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/40 focus:ring-4 focus:ring-primary/5 outline-none text-sm font-bold text-white placeholder:text-white/20 transition-all"
                                    />
                                </div>

                                {/* NEW PASSWORD */}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block mb-2 text-[9px] uppercase tracking-widest font-black text-white/35">
                                            New Password
                                        </label>

                                        <input
                                            type="password"
                                            placeholder="Min. 8 characters"
                                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/40 outline-none text-sm font-bold text-white placeholder:text-white/20 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-[9px] uppercase tracking-widest font-black text-white/35">
                                            Confirm New Password
                                        </label>

                                        <input
                                            type="password"
                                            placeholder="Re-type password"
                                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/40 outline-none text-sm font-bold text-white placeholder:text-white/20 transition-all"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white text-gray-700 text-[10px] uppercase tracking-widest font-black hover:bg-gray-100 hover:-translate-y-0.5 transition-all"
                                >
                                    <Lock size={15} />
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="space-y-6">
                    {/* PROFILE CARD */}

                    <section className="bg-white rounded-[30px] border border-gray-100 shadow-sm overflow-hidden">
                        <div className="bg-linear-to-t from-white to-green-500/30 p-7 flex flex-col items-center">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-[30px] bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-300">
                                    <div className="w-29 h-29 rounded-[27px] bg-gray-100 flex items-center justify-center">
                                        <User size={58} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="absolute -bottom-2 -right-2 w-11 h-11 rounded-2xl bg-primary text-white border-4 border-green-50 shadow-lg flex items-center justify-center hover:bg-primary-dark transition-all"
                                >
                                    <Camera size={17} />
                                </button>
                            </div>

                            <h2 className="mt-6 text-xl font-black text-foreground">
                                adel
                            </h2>

                            <span className="mt-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-primary text-[9px] uppercase tracking-widest font-black">
                                Super-Admin
                            </span>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-2 divide-x divide-gray-100">
                                <div className="text-center">
                                    <p className="text-[8px] uppercase tracking-widest font-black text-gray-400">
                                        Status
                                    </p>

                                    <p className="mt-2 text-sm font-black text-green-500">
                                        Verified
                                    </p>
                                </div>

                                <div className="text-center">
                                    <p className="text-[8px] uppercase tracking-widest font-black text-gray-400">
                                        Location
                                    </p>

                                    <p className="mt-2 text-sm font-black text-gray-700">
                                        Global
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 pt-6 border-t border-gray-100 text-center">
                                <p className="text-xs italic leading-6 text-gray-400">
                                    {`Technology is best when it brings people together`}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* QUICK ACCESS */}

                    <Link
                        href="/dashboard"
                        className="flex items-center gap-4 bg-[#151515] rounded-[28px] p-5 text-white hover:bg-[#202020] transition-all group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white/5 text-primary flex items-center justify-center">
                            <Grid2X2 size={21} />
                        </div>

                        <div className="flex-1">
                            <p className="text-[8px] uppercase tracking-widest font-black text-white/30">
                                Quick Access
                            </p>

                            <p className="mt-1 text-sm font-black">
                                Main Dashboard
                            </p>
                        </div>

                        <span className="text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all">
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default superAdminProfile;
