"use client";

import { ImagePlus } from "lucide-react";
import MainImage from "./MainImage";
import GalleryImages from "./GalleryImages";

const MediaAssets = () => {
    return (
        <section className="bg-white border border-gray-100 rounded-[28px] shadow-sm p-5 sm:p-7">
            {/* Header */}
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <ImagePlus size={18} />
                </div>

                <div>
                    <h2 className="text-base sm:text-lg font-black text-foreground">
                        Media Assets
                    </h2>

                    <p className="mt-0.5 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                        Product Images
                    </p>
                </div>
            </div>

            <div className="pt-7 space-y-6">
                {/* Main Image */}

                <MainImage />

                {/* Gallery */}

                <GalleryImages />
            </div>
        </section>
    );
};

export default MediaAssets;
