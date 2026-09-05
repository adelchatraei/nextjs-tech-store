"use client";

import { Controller, FormProvider, useForm } from "react-hook-form";
import OtpInput from "./OtpInput";
import {
    VerifyOtpFormData,
    verifyOtpSchema,
} from "@/schemas/verify-otp/verifyOtp.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import LoaderSvg from "@/components/ui/loaderSvg";
import useVerifyOtpQuery from "@/querys/authQueries/useVerifyOtpQuery";
import { useRouter } from "next/navigation";
import { ApiError } from "@/lib/errors/ApiError";
import { toast } from "react-hot-toast";

type VerifyOtpFormProps = {
    email: string;
};

const VerifyOtpForm = ({ email }: VerifyOtpFormProps) => {
    const method = useForm<VerifyOtpFormData>({
        resolver: zodResolver(verifyOtpSchema),

        defaultValues: {
            otp: "",
        },

        mode: "onChange",
    });

    const router = useRouter();

    const { mutate, isPending } = useVerifyOtpQuery();

    const onSubmitData = (data: VerifyOtpFormData) => {
        mutate(
            {
                email,
                otp: data.otp,
            },
            {
                onSuccess: () => {
                    toast.success(
                        "Your account has been verified successfully.",
                    );

                    setTimeout(() => {
                        router.push("/login");
                    }, 800);
                },

                onError: (error) => {
                    if (error instanceof ApiError) {
                        toast.error(error.message);
                        return;
                    }

                    console.error(error);
                },
            },
        );
    };

    return (
        <FormProvider {...method}>
            <form onSubmit={method.handleSubmit(onSubmitData)}>
                <Controller
                    name="otp"
                    control={method.control}
                    render={({ field }) => (
                        <OtpInput
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />
                <button
                    disabled={isPending}
                    className="mt-8 flex h-14 w-full items-center justify-center rounded-2xl bg-slate-950 px-6 text-base font-black uppercase tracking-wider text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-primary hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <span className="flex min-w-30 items-center justify-center">
                        {isPending ? (
                            <span className="relative inline-block h-2.5 w-10 overflow-hidden">
                                <LoaderSvg />
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5">
                                Verify Account
                                <ArrowRight size={18} />
                            </span>
                        )}
                    </span>
                </button>
            </form>
        </FormProvider>
    );
};

export default VerifyOtpForm;
