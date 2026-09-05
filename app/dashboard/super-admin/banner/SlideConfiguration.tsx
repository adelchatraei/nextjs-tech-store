/* eslint-disable @next/next/no-img-element */
"use client";

import { BannerFormType } from "@/schemas/banner/BannerSlideForm.Schema";
import { ImagePlus, Trash2, Upload } from "lucide-react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { useBannerForm } from "../components/banner/BannerFormContext";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { ApiError } from "@/lib/errors/ApiError";
import Loader2 from "@/components/ui/loader/Loader";

type SlideConfigurationProps = {
    index: number;
};
const SlideConfiguration = ({ index }: SlideConfigurationProps) => {
    const {
        register,
        formState: { errors },
        setValue,
        watch,
    } = useFormContext<BannerFormType>();

    const [uploadStatus, setUploadStatus] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const image = watch(`slides.${index}.image`);

    const handlePickImage = () => {
        inputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        void handleUploadImage(file);
    };

    const handleUploadImage = async (file: File) => {
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

            setValue(`slides.${index}.image`, data.imageUrl, {
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

    const { removeSlide } = useBannerForm();
    return (
        <>
            <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm p-5 sm:p-7 lg:p-8">
                {/* ================= SLIDE HEADER ================= */}

                <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 text-xs font-black">
                            {index + 1}
                        </div>

                        <h2 className="text-lg sm:text-xl font-black text-foreground">
                            Slide Configuration
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={() => removeSlide(index)}
                        className="w-9 h-9 rounded-xl bg-red-50 text-red-300 flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-all"
                        title="Remove slide"
                    >
                        <Trash2 size={15} />
                    </button>
                </div>

                <div className="space-y-7">
                    <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                            Badge Text
                        </label>

                        <input
                            type="text"
                            {...register(`slides.${index}.badge` as const)}
                            className="w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-bold text-foreground focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                        {errors.slides?.[index]?.badge && (
                            <p className="mt-1 text-xs text-red-500">
                                * {errors.slides[index]?.badge?.message}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                                Headline (Static Part)
                            </label>

                            <input
                                type="text"
                                {...register(
                                    `slides.${index}.headlinePrimary` as const,
                                )}
                                className="w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-bold text-foreground focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                            />
                            {errors.slides?.[index]?.headlinePrimary && (
                                <p className="mt-1 text-xs text-red-500">
                                    *{" "}
                                    {
                                        errors.slides[index]?.headlinePrimary
                                            ?.message
                                    }
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                                Headline (Highlight Part)
                            </label>

                            <input
                                type="text"
                                {...register(
                                    `slides.${index}.headlineSecondary` as const,
                                )}
                                className="w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-bold text-foreground focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                            />
                            {errors.slides?.[index]?.headlineSecondary && (
                                <p className="mt-1 text-xs text-red-500">
                                    *{" "}
                                    {
                                        errors.slides[index]?.headlineSecondary
                                            ?.message
                                    }
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                            Hero Description
                        </label>

                        <textarea
                            {...register(
                                `slides.${index}.description` as const,
                            )}
                            rows={3}
                            className="w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-transparent outline-none text-sm font-medium text-foreground resize-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                        {errors.slides?.[index]?.description && (
                            <p className="mt-1 text-xs text-red-500">
                                * {errors.slides[index]?.description?.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                                Slide Illustration
                            </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-end">
                            <div className="relative h-50 w-112.5 m-auto aspect-video rounded-3xl bg-[#F8FAFC] border border-gray-100 overflow-hidden flex items-center justify-center group shadow-inner">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className=" hidden"
                                    ref={inputRef}
                                />
                                {uploadStatus ? (
                                    <Loader2 />
                                ) : image ? (
                                    <div className="">
                                        <img
                                            src={image}
                                            alt="Hero illustration preview"
                                            className="w-full h-full object-contain p-6 scale-90 group-hover:scale-100 transition-transform duration-700"
                                        />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center gap-2">
                                        <ImagePlus
                                            size={24}
                                            className=" text-gray-600"
                                        />
                                        <span className="text-[12px] font-black uppercase tracking-widest text-gray-600">
                                            Select Image
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Upload */}

                            <button
                                onClick={handlePickImage}
                                type="button"
                                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gray-900 text-white text-xs font-black hover:bg-gray-800 transition-all"
                            >
                                <Upload size={15} />

                                <span>UPDATE ILLUSTRATION</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SlideConfiguration;
