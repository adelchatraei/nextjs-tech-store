"use client";

import { createContext, useContext, useState } from "react";
import { Category } from "@/types/category-type";

type CategoriesManagementContextType = {
    editingCategory: Category | null;
    setEditingCategory: (category: Category | null) => void;
};

const CategoriesManagementContext =
    createContext<CategoriesManagementContextType | null>(null);

export const CategoriesManagementProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [editingCategory, setEditingCategory] = useState<Category | null>(
        null,
    );

    return (
        <CategoriesManagementContext.Provider
            value={{
                editingCategory,
                setEditingCategory,
            }}
        >
            {children}
        </CategoriesManagementContext.Provider>
    );
};

export const useCategoriesManagement = () => {
    const context = useContext(CategoriesManagementContext);

    if (!context) {
        throw new Error(
            "useCategoriesManagement must be used inside CategoriesManagementProvider",
        );
    }

    return context;
};
