import { ArrowRight, Lock, Mail, User, UserPlus } from "lucide-react";
import Link from "next/link";
import InputField from "../../ui/InputField";
import { RegisterFormData } from "@/schemas/register/register.schema";
import { useFormContext } from "react-hook-form";
import useRegisterMutation from "@/querys/authQueries/useRegisterMutation";
import LoaderSvg from "../../ui/loaderSvg";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ApiError } from "@/lib/errors/ApiError";

const RegisterForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useFormContext<RegisterFormData>();

    const { mutate, isPending } = useRegisterMutation();

    const onSubmitData = (data: RegisterFormData) => {
        mutate(data, {
            onSuccess: (response) => {
                toast.success("Registration successful! Please verify your email")

                router.push(
                    `/verify-otp?email=${encodeURIComponent(response.email)}`,
                );
            },

            onError: (error) => {
                if (error instanceof ApiError) {
                        toast.error(error.message);
                        return;
                    }
            },
        });
    };

    return (
        <div className="w-full lg:w-1/2 p-10 sm:p-12 lg:p-15 flex flex-col justify-center relative">
            <header className="mb-10">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-8 flex items-center justify-center">
                    <UserPlus size={28} />
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                    Create an{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-indigo-600 italic font-serif">
                        Account
                    </span>
                </h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">
                    Join Tech Store today to start shopping for the best tech
                    products and manage your orders.
                </p>
            </header>
            <form onSubmit={handleSubmit(onSubmitData)} className="space-y-1">
                {/* Email */}
                <InputField<RegisterFormData>
                    register={register}
                    name="name"
                    label="full name"
                    id="fullName"
                    type="text"
                    placeholder="e.g. Toni kroos"
                    autoComplete="full-name"
                    error={errors.name?.message}
                    icon={User}
                />
                <InputField<RegisterFormData>
                    register={register}
                    name="email"
                    label="email address"
                    id="fullName"
                    type="text"
                    placeholder="e.g. you@example.com"
                    autoComplete="new-email"
                    error={errors.email?.message}
                    icon={Mail}
                />
                <InputField<RegisterFormData>
                    register={register}
                    name="password"
                    label="password"
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    error={errors.password?.message}
                    icon={Lock}
                />
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
            <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-8">
                <p className="text-sm text-slate-500 font-medium">
                    Already have an account ?{" "}
                    <Link
                        href={"/login"}
                        className="font-bold text-primary hover:text-primary-dark transition-colors inline-block group border-b border-primary/30 pb-0.5"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
