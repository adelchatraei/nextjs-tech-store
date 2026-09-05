"use client";

import { Save } from "lucide-react";
import { useBannerForm } from "./BannerFormContext";
import { useFormContext } from "react-hook-form";
import { BannerFormType } from "@/schemas/banner/BannerSlideForm.Schema";
import Loader from "@/components/ui/loaderSvg";

const SaveConfigurationButton = () => {
    const { fields } = useBannerForm();
    const {
        formState: { isSubmitting },
    } = useFormContext<BannerFormType>();

    const hasSlides = fields.length > 0;
    return (
        <div className="flex justify-end">
            <button
                type="submit"
                disabled={!hasSlides || isSubmitting}
                className="flex items-center justify-center gap-2.5 px-6 py-2.5 md:px-8 md:py-4.5 rounded-2xl border-4 border-white bg-primary text-white text-xs font-black shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
                <Save size={16} strokeWidth={2.5} />

                <span>
                    {isSubmitting ? <Loader /> : "SAVE ALL CONFIGURATION"}
                </span>
            </button>
        </div>
    );
};

export default SaveConfigurationButton;
