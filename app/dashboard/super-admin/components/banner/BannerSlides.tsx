"use client";

import SlideConfiguration from "../../banner/SlideConfiguration";
import { useBannerForm } from "./BannerFormContext";

const BannerSlides = () => {
    const { fields } = useBannerForm();

    return (
        <>
            {fields.map((field, index) => (
                <SlideConfiguration key={field.id} index={index} />
            ))}
        </>
    );
};

export default BannerSlides;
