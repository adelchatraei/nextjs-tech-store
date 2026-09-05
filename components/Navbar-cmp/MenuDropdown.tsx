import { CircleUserRound, LayoutDashboard, UserRound } from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import LogOutButton from "./LogOutButton";

type MenuDropdownProps = {
    session: Session | null;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuDropdown = ({ session, setIsOpen }: MenuDropdownProps) => {
    const formattedRole = session?.user.role.toUpperCase();

    return (
        <div className="absolute -right-15 top-full mt-2 w-60 sm:w-70 rounded-2xl border border-gray-100 bg-white gap-1 p-2 shadow-xl">
            <header className="p-3 mb-2 bg-stone-100 rounded-2xl">
                <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-stone-50 shadow-md flex items-center justify-center overflow-hidden shrink-0">
                        {session?.user.image ? (
                            <Image
                                src={session?.user.image}
                                alt={session?.user.name ?? "profil-image"}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <CircleUserRound
                                size={40}
                                strokeWidth={1}
                                className="text-primary"
                            />
                        )}
                    </div>

                    <div className="min-w-0">
                        <p className="font-black text-gray-900 truncate">
                            {session?.user.name}
                        </p>

                        <p className="text-[10px] font-bold text-gray-400 truncate">
                            {session?.user.email}
                        </p>
                    </div>
                </div>

                {/* Role */}
                <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-lg bg-primary/10 border border-primary/60 text-primary text-[10px] font-black uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />

                    {formattedRole}
                </div>
            </header>
            <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
            >
                <LayoutDashboard size={18} />

                <span className="text-[12px] font-black">Dashboard</span>
            </Link>

            {/* Profile */}
            <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
            >
                <UserRound size={18} />

                <span className="text-[12px] font-black">Profile</span>
            </Link>

            {/* Separator */}
            <div className="my-2 border-t border-gray-100" />

            {/* Logout */}

            <LogOutButton setIsOpen={setIsOpen} />
        </div>
    );
};

export default MenuDropdown;
