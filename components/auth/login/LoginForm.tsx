"use client";

import { ArrowRight, Lock, LogIn, Mail, ShieldCheck } from "lucide-react";
import { LoginFormData } from "@/schemas/auth/login.schema";
import { useFormContext } from "react-hook-form";
import useLoginMutation from "@/querys/authQueries/useLoginMutation";
import Link from "next/link";
import LoaderSvg from "@/components/ui/loaderSvg";
import InputField from "@/components/ui/InputField";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useFormContext<LoginFormData>();

    const { mutate, isPending } = useLoginMutation();

    const onSubmitData = (data: LoginFormData) => {
        mutate(data, {
            onSuccess: () => {
                toast.success("Welcome back !");
                router.refresh();

                setTimeout(() => {
                    router.push("/");
                }, 800);
            },

            onError: (error) => {
                toast.error(error.message);
            },
        });
    };

    return (
        <div className="min-h-190 p-10 sm:p-14 lg:p-18">
            <header>
                <div className="w-14 h-14 text-primary mb-8 rounded-2xl bg-green-100 flex items-center justify-center">
                    {<LogIn size={28} />}
                </div>

                <div className="space-y-3">
                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                        Welcome{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600 italic font-serif">
                            Back
                        </span>
                    </h2>

                    <p className="text-slate-500 font-medium text-lg leading-relaxed">
                        Sign in to your account to track orders, save favorites,
                        and discover the latest tech.
                    </p>
                </div>
            </header>
            <form onSubmit={handleSubmit(onSubmitData)}>
                {/* Email */}
                <InputField<LoginFormData>
                    register={register}
                    name="email"
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="e.g. you@example.com"
                    autoComplete="email"
                    error={errors.email?.message}
                    icon={Mail}
                />

                {/* Password */}
                <InputField<LoginFormData>
                    register={register}
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    error={errors.password?.message}
                    icon={Lock}
                    isForgotPass={true}
                />

                {/* Login Button */}
                <button
                    disabled={isPending}
                    className="mt-6 flex h-14 w-full items-center justify-center rounded-2xl bg-slate-950 px-6 text-base font-black uppercase tracking-wider text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-primary hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <span className="flex min-w-30 items-center justify-center">
                        {isPending ? (
                            <span className="relative inline-block h-2.5 w-10 overflow-hidden">
                                <LoaderSvg />
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5">
                                Sign In
                                <ArrowRight size={18} />
                            </span>
                        )}
                    </span>
                </button>
            </form>
            <div className="mt-9 flex items-center justify-between border-t border-slate-100 pt-8">
                <p className="text-sm text-slate-500 font-medium">
                    {"Don't have an account ? "}
                    <Link
                        href={"/register"}
                        className="font-bold text-primary hover:text-primary-dark transition-colors inline-block group border-b border-primary/30 pb-0.5"
                    >
                        Create an account
                    </Link>
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                    <ShieldCheck size={14} />
                    <span>Secure</span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
