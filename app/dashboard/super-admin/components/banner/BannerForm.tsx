"use client";

import {
    BannerFormSchema,
    type BannerFormType,
} from "@/schemas/banner/BannerSlideForm.Schema";
import type { BannerResponseType } from "@/schemas/banner/banner.schema";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { BannerFormProvider } from "./BannerFormContext";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { ApiError } from "@/lib/errors/ApiError";
import { useRouter } from "next/navigation";

type BannerFormProps = {
    children: React.ReactNode;
    banner: BannerResponseType | null;
};

const emptySlide: BannerFormType["slides"][number] = {
    badge: "",
    headlinePrimary: "",
    headlineSecondary: "",
    description: "",
    image: "",
};

const BannerForm = ({ children, banner }: BannerFormProps) => {
    const router = useRouter();

    const methods = useForm<BannerFormType>({
        resolver: zodResolver(BannerFormSchema),
        defaultValues: {
            slides: banner?.slides ?? [],
        },
    });

    const { control } = methods;

    const { append, remove, fields } = useFieldArray({
        control,
        name: "slides",
    });

    const addSlide = () => {
        append(emptySlide);
    };

    const removeSlide = (index: number) => {
        remove(index);
    };

    const onSubmit = async (data: BannerFormType) => {
        try {
            const method = banner ? "PATCH" : "POST";

            const response = await fetch("/api/banner", {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw await ApiError.fromResponse(response);
            }

            toast.success("Banner configuration saved");
            router.refresh();
        } catch (error) {
            toast.error("Failed to save banner configuration.");
            console.error("Save banner failed:", error);
        }
    };

    return (
        <FormProvider {...methods}>
            <BannerFormProvider
                addSlide={addSlide}
                removeSlide={removeSlide}
                fields={fields}
            >
                <form
                    id="banner-form"
                    className="space-y-6"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    {children}
                </form>
            </BannerFormProvider>
        </FormProvider>
    );
};

export default BannerForm;
