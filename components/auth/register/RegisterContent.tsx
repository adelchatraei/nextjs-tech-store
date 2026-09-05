"use client";

import { FormProvider, useForm } from "react-hook-form";
import RegisterBanner from "./RegisterBanner";
import RegisterForm from "./RegisterForm";
import {
    RegisterFormData,
    registerSchema,
} from "@/schemas/register/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterContent = () => {
    const method = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),

        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    return (
        <div className=" bg-[linear-gradient(337deg,rgba(206,237,221,1)_0%,rgba(255,255,255,1)_26%,rgba(255,255,255,1)_67%,rgba(206,237,221,1)_100%)]">
            <div className="min-h-[90vh] w-full flex items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden">
                <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-2xl shadow-gray-200/60 overflow-hidden flex flex-col lg:flex-row-reverse relative z-10 border border-white/50 ">
                    <FormProvider {...method}>
                        <RegisterForm />
                    </FormProvider>

                    <RegisterBanner />
                </div>
            </div>
        </div>
    );
};

export default RegisterContent;
