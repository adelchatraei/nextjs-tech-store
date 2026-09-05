"use client";

import {
    ChevronDown,
    Shield,
    ShieldAlert,
    Trash2,
    UserRound,
    UserRoundPlus,
} from "lucide-react";

type UserActionsProps = {
    userId: string;
    currentRole: string;
    canManage: boolean;
};

const UserActions = ({ userId, currentRole, canManage }: UserActionsProps) => {
    return (
        <div className="flex items-center justify-end gap-2">
            {/* Role */}
            <button
                type="button"
                disabled={!canManage}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-100 bg-white text-[10px] sm:text-xs font-bold text-gray-700 shadow-sm hover:border-primary/20 hover:bg-primary/5 transition-all disabled:cursor-default"
            >
                <UserRoundPlus size={13} className="text-gray-400" />

                <span className="capitalize">{currentRole}</span>

                {canManage && (
                    <ChevronDown size={13} className="text-gray-400" />
                )}
            </button>

            {/* Delete */}
            <button
                type="button"
                disabled={!canManage}
                className="w-9 h-9 rounded-xl border border-gray-100 bg-white flex items-center justify-center text-gray-300 shadow-sm hover:text-red-500 hover:bg-red-50 hover:border-red-100 transition-all disabled:cursor-default disabled:hover:text-gray-300 disabled:hover:bg-white"
                title="Delete user"
            >
                <Trash2 size={15} />
            </button>

            {/* Shield */}
            <button
                type="button"
                className="w-9 h-9 rounded-xl border border-gray-100 bg-white flex items-center justify-center text-gray-300 shadow-sm hover:text-primary hover:bg-primary/5 hover:border-primary/10 transition-all"
                title="User permissions"
            >
                <ShieldAlert size={15} />
            </button>
        </div>
    );
};

export default UserActions;
