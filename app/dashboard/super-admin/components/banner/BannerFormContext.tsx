"use client";

import { BannerFormType } from "@/schemas/banner/BannerSlideForm.Schema";
import { createContext, useContext } from "react";
import { FieldArrayWithId } from "react-hook-form";

type BannerFormContextType = {
    addSlide: () => void;
    removeSlide: (index: number) => void;
    fields: FieldArrayWithId<BannerFormType, "slides">[];
};

const BannerFormContext = createContext<BannerFormContextType | null>(null);

export const BannerFormProvider = ({
    children,
    addSlide,
    removeSlide,
    fields,
}: BannerFormContextType & {
    children: React.ReactNode;
}) => {
    return (
        <BannerFormContext.Provider
            value={{
                addSlide,
                removeSlide,
                fields,
            }}
        >
            {children}
        </BannerFormContext.Provider>
    );
};

export const useBannerForm = () => {
    const context = useContext(BannerFormContext);

    if (!context) {
        throw new Error("useBannerForm must be used inside BannerFormProvider");
    }

    return context;
};
