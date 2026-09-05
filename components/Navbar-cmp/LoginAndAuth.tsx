import Link from "next/link";
import { User } from "lucide-react";
import { getServerSession } from "next-auth";
import UserMenu from "./UserMenu";
import { authOptions } from "@/lib/auth";

const LoginAndAuth = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <Link
                href={"/login"}
                className="flex items-center gap-2 pl-2 pr-2 sm:pr-6 py-1.5 sm:py-2.5 bg-primary text-white rounded-[14px] sm:rounded-[18px] font-black hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 active:translate-y-0 group shadow-lg shadow-primary/20"
            >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center cursor-pointer">
                    <User size={14} className="sm:w-4.4 sm:h-4.4" />
                </div>
                <span className="hidden sm:block text-xs sm:text-sm tracking-tight">
                    Sign in
                </span>
            </Link>
        );
    }
    return <UserMenu session={session} />;
};

export default LoginAndAuth;
