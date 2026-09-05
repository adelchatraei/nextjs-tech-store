/* eslint-disable @next/next/no-img-element */
"use client";

import Loader2 from "@/components/ui/loader/Loader";
import { ApiError } from "@/lib/errors/ApiError";
import { CreateProductType } from "@/schemas/products/CreateProduct";
import { ImagePlus, Trash } from "lucide-react";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

const MainImage = () => {
    const { setValue, watch } = useFormContext<CreateProductType>();

    const [uploadStatus, setUploadStatus] = useState(false);
    const mainImage = watch("image");

    const inputRef = useRef<HTMLInputElement>(null);

    const handlePickImage = () => {
        inputRef.current?.click();
    };

    const handleMainImageChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        void handleUploadMainImage(file);
    };

    const handleUploadMainImage = async (file: File) => {
        setUploadStatus(true);

        const formData = new FormData();
        formData.append("image", file);
        try {
            const response = await fetch("/api/upload-image", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw await ApiError.fromResponse(response);
            }

            const data = await response.json();

            setValue("image", data.imageUrl, {
                shouldDirty: true,
                shouldValidate: true,
            });

            toast.success("Image uploaded successfully.");
        } catch (error) {
            toast.error("Error uploading image");
            console.error("Image upload failed:", error);
        } finally {
            setUploadStatus(false);
        }
    };

    const handleRemoveMainImage = () => {
        setValue("image", "", {
            shouldDirty: true,
            shouldValidate: true,
        });
    };

    return (
        <div>
            <label className="block mb-2 ml-1 text-[9px] font-black text-gray-400 tracking-[0.15em] uppercase">
                Main Image
            </label>

            <div className=" flex flex-col justify-center items-center border-2 border-dashed border-gray-200 rounded-2xl text-center hover:border-primary/30 transition-colors w-50 h-50 group:">
                {uploadStatus ? (
                    <Loader2 />
                ) : mainImage ? (
                    <div className="relative space-y-3 w-full h-full object-cover">
                        <img
                            src={mainImage}
                            alt="Product preview"
                            className=" absolute w-full h-full object-cover rounded-2xl"
                        />

                        <button
                            onClick={handleRemoveMainImage}
                            type="button"
                            className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/90 text-gray-400 hover:text-red-500 shadow-sm flex items-center justify-center transition-colors"
                        >
                            <Trash size={13} />
                        </button>
                    </div>
                ) : (
                    <div className="space-y-2 ">
                        <ImagePlus
                            size={24}
                            className="mx-auto text-gray-300"
                        />

                        <p className="text-xs font-bold text-gray-400">
                            Main product image
                        </p>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleMainImageChange}
                            className=" hidden"
                            ref={inputRef}
                        />

                        <button
                            type="button"
                            onClick={handlePickImage}
                            className="text-[9px] font-black text-primary uppercase tracking-wider hover:text-primary-dark"
                        >
                            Select Image
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainImage;
