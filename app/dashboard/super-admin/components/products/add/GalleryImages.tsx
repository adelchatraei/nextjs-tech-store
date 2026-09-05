/* eslint-disable @next/next/no-img-element */
"use client";

import Loader2 from "@/components/ui/loader/Loader";
import { ApiError } from "@/lib/errors/ApiError";
import { CreateProductType } from "@/schemas/products/CreateProduct";
import { ImagePlus, Trash } from "lucide-react";
import { useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import toast from "react-hot-toast";

const GalleryImages = () => {
    const { setValue, control } = useFormContext<CreateProductType>();

    const inputRef = useRef<HTMLInputElement>(null);

    const [isUploading, setIsUploading] = useState(false);

    const galleryImages =
        useWatch({
            control,
            name: "images",
        }) ?? [];

    const handlePickImage = () => {
        inputRef.current?.click();
    };

    const handleGalleryImagesChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        if (isUploading) {
            return;
        }

        if (galleryImages.length >= 4) {
            return;
        }

        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        void handleUploadGalleryImage(file);
    };

    const handleUploadGalleryImage = async (file: File) => {
        setIsUploading(true);

        try {
            const formData = new FormData();

            formData.append("image", file);

            const response = await fetch("/api/upload-image", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw await ApiError.fromResponse(response);
            }

            const data = await response.json();

            const updatedImages = [...galleryImages, data.imageUrl];

            setValue("images", updatedImages, {
                shouldDirty: true,
                shouldValidate: true,
            });

            toast.success("Image uploaded successfully");
        } catch (error) {
            console.error("Gallery image upload failed:", error);

            toast.error("Error uploading image");
        } finally {
            setIsUploading(false);
        }
    };

    const handleRemoveGalleryImage = (index: number) => {
        const updatedImages = galleryImages.filter(
            (_, imageIndex) => imageIndex !== index,
        );

        setValue("images", updatedImages, {
            shouldDirty: true,
            shouldValidate: true,
        });
    };

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-2 ml-1">
                <label className="text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                    Gallery Images
                </label>

                <span className="text-[9px] font-black text-gray-300">
                    {galleryImages.length}/4 IMAGES
                </span>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Uploaded Images */}
                {galleryImages.map((image, index) => (
                    <div
                        key={`${image}-${index}`}
                        className="relative aspect-square rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden"
                    >
                        <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />

                        <button
                            type="button"
                            onClick={() => handleRemoveGalleryImage(index)}
                            className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/90 text-gray-400 hover:text-red-500 shadow-sm flex items-center justify-center transition-colors"
                        >
                            <Trash size={13} />
                        </button>
                    </div>
                ))}

                {/* Add / Loading Slot */}
                {galleryImages.length < 4 &&
                    (isUploading ? (
                        <div className="aspect-square rounded-2xl border-2 border-dashed border-primary/20 flex items-center justify-center">
                            <Loader2 />
                        </div>
                    ) : (
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleGalleryImagesChange}
                                className="hidden"
                                ref={inputRef}
                            />

                            <button
                                type="button"
                                onClick={handlePickImage}
                                className="aspect-square w-full rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 text-gray-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                            >
                                <ImagePlus size={20} />

                                <span className="text-[9px] font-black uppercase tracking-wider">
                                    Add Image
                                </span>
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default GalleryImages;
