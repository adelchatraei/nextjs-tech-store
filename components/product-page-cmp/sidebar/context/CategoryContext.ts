"use client";
import { createContext } from "react";

type CategoryContextType = {
    activeCategoryId: string | null;
    selectCategory: (id: string) => void;
};

export const CategoryContext = createContext<CategoryContextType | null>(null);
