"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type LogOutButtonProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const LogOutButton = ({ setIsOpen }: LogOutButtonProps) => {
    const router = useRouter();
    return (
        <button
            type="button"
            onClick={async () => {
                await signOut({
                    redirect: false,
                });

                toast.success("Logged out successfully");

                setIsOpen(false);

                router.replace("/");
                router.refresh();
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors"
        >
            <LogOut size={18} />

            <span className="text-sm font-black">Log out</span>
        </button>
    );
};

export default LogOutButton;
