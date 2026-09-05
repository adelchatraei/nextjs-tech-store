"use client";

import { FormProvider, useForm } from "react-hook-form";
import LoginBanner from "./LoginBanner";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/schemas/auth/login.schema";
import LoginForm from "./LoginForm";

const LoginContent = () => {
    const method = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),

        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <div className=" bg-[linear-gradient(337deg,rgba(206,237,221,1)_0%,rgba(255,255,255,1)_26%,rgba(255,255,255,1)_67%,rgba(206,237,221,1)_100%)]">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <div className="grid overflow-hidden rounded-[36px] bg-white shadow-xl lg:grid-cols-2">
                    <FormProvider {...method}>
                        <LoginForm />
                    </FormProvider>
                    <LoginBanner />
                </div>
            </div>
        </div>
    );
};

export default LoginContent;
