"use client";

import { ChevronDown, User } from "lucide-react";
import { Session } from "next-auth";
import { useState } from "react";
import MenuDropdown from "./MenuDropdown";
import { AnimatePresence, motion } from "framer-motion";

type UserMenuProps = {
    session: Session | null;
};

const UserMenu = ({ session }: UserMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" relative">
            <button
                onClick={() => {
                    setIsOpen((prev) => !prev);
                }}
                className="flex items-center flex-row-reverse md:flex-row gap-2 sm:gap-3 md:gap-5 px-2 py-0.5 md:px-2 sm:py-1 rounded-[14px] sm:rounded-[18px] bg-stone-100/30  hover:bg-stone-100 transition-all transform active:translate-y-1 group cursor-pointer"
            >
                <div className="flex gap-2 flex-row-reverse md:flex-row ">
                    <div className="flex items-center justify-center  w-8 h-8 sm:w-9 sm:h-9 bg-primary/10 group-hover:bg-primary/20 rounded-full md:rounded-xl sm:rounded-[14px] cursor-pointer group-hover:shadow-md ">
                        <User
                            size={20}
                            strokeWidth={2}
                            className="sm:w-4.4 sm:h-4.4 text-primary"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <span className="text-[12px] md:text-[13px] font-semibold">
                            {session?.user.name}
                        </span>
                        <span className="text-[8px] md:text-[9px] font-semibold text-primary uppercase">
                            {session?.user.role}
                        </span>
                    </div>
                </div>
                <ChevronDown
                    size={14}
                    strokeWidth={2}
                    className={`text-gray-400 transition-transform duration-200 hidden md:block ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
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
                        <MenuDropdown session={session} setIsOpen={setIsOpen} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default UserMenu;
