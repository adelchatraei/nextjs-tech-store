"use client";

import { ReactNode, useState } from "react";
import { CategoryContext } from "./CategoryContext";

type Props = {
    children: ReactNode;
};

export default function CategorySidebarProvider({ children }: Props) {
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(
        null,
    );

    const selectCategory = (id: string) => {
        setActiveCategoryId(id);
    };

    return (
        <CategoryContext.Provider
            value={{
                activeCategoryId,
                selectCategory,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
}
