"use client";

import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

const useActive = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error(
            "useActive must be used within a CategorySidebarProvider",
        );
    }
    return context;
};

export default useActive;
