import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Bell, Search, User } from "lucide-react";
import Image from "next/image";

const DashboardHeader = async () => {
    const session = await getServerSession(authOptions);

    return (
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <div className="relative w-full max-w-md">
                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search data..."
                    className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl outline-none text-sm font-medium placeholder:text-gray-400 focus:border-primary/30 focus:ring-4 focus:ring-primary/5 transition-all"
                />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 sm:gap-6 ml-4">
                {/* Notification */}
                <button
                    type="button"
                    className="p-2 text-gray-500 hover:text-foreground hover:bg-gray-50 rounded-xl transition-colors"
                >
                    <Bell size={19} />
                </button>

                {/* Divider */}
                <div className="hidden sm:block h-8 w-px bg-gray-100" />

                {/* User Info */}
                <div className="flex items-center gap-3">
                    {/* Name + Role */}
                    <div className="hidden sm:block text-right">
                        <p className="text-sm font-black text-foreground leading-tight">
                            {session?.user.name}
                        </p>

                        <p className="mt-1 text-[9px] font-black tracking-widest uppercase text-primary">
                            {session?.user.role}
                        </p>
                    </div>

                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center overflow-hidden">
                        {session?.user.image ? (
                            <Image
                                src={session.user.image}
                                alt={session.user.name ?? "User"}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <User size={20} className="text-primary" />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
