"use client";

import { BannerFormType } from "@/schemas/banner/BannerSlideForm.Schema";
import { ImageIcon } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { useBannerForm } from "./BannerFormContext";

const BannerAddSlideButton = () => {
    const maxSlides = 4;

    const { control } = useFormContext<BannerFormType>();
    const { addSlide } = useBannerForm();

    const slides = useWatch({
        control,
        name: "slides",
    });

    const slideCount = slides?.length ?? 0;
    const isMaxReached = slideCount >= maxSlides;

    return (
        <button
            type="button"
            onClick={addSlide}
            disabled={isMaxReached}
            className="w-fit flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-primary/20 bg-primary/5 text-primary text-xs font-black shadow-sm hover:bg-primary/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <ImageIcon size={16} />

            <span>
                Add Slide ({slideCount}/{maxSlides})
            </span>
        </button>
    );
};

export default BannerAddSlideButton;
