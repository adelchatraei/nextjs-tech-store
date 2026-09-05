// "use client";

// import { Eye, EyeClosed, LucideIcon } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import { FieldValues, Path, UseFormRegister } from "react-hook-form";

// type InputFieldProps<T extends FieldValues> = {
//     label: string;
//     placeholder: string;
//     type?: string;
//     id: string;
//     name: Path<T>;
//     containerClassName?: string;
//     inputClassName?: string;
//     register: UseFormRegister<T>;
//     error?: string;
//     disabled?: boolean;
//     autoComplete?: string;
//     icon?: LucideIcon;
//     isForgotPass?: boolean;
// };

// const InputField = <T extends FieldValues>({
//     label,
//     placeholder,
//     type = "text",
//     id,
//     name,
//     containerClassName,
//     inputClassName,
//     disabled = false,
//     register,
//     error,
//     autoComplete,
//     icon: Icon,
//     isForgotPass = false,
// }: InputFieldProps<T>) => {
//     const [eyeIcon, setEyeIcon] = useState(<EyeClosed size={20} />);
//     const [toggleType, setToggleType] = useState("password");
//     const [toggle, setToggle] = useState(true);

//     const isTypeInputPasssword = type === "password";

//     const handleClick = () => {
//         setToggle((prev) => !prev);

//         if (toggle) {
//             setEyeIcon(<Eye size={20} />);
//             setToggleType("text");
//         } else {
//             setEyeIcon(<EyeClosed size={20} />);
//             setToggleType("password");
//         }
//     };

//     return (
//         <div
//             className={`flex flex-col gap-1 p-3 sm:p-4 ${containerClassName ?? ""}`}
//         >
//             <label
//                 htmlFor={id}
//                 className=" flex justify-between uppercase text-gray-500 font-bold ml-3 text-sm"
//             >
//                 {label}
//                 {isForgotPass && (
//                     <Link
//                         href={"/login/forget-password"}
//                         className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors"
//                     >
//                         Forgot password?
//                     </Link>
//                 )}
//             </label>

//             <div
//                 className={`group flex items-center gap-3 sm:gap-5 sm:py-5 sm:px-6 py-3 px-5 bg-stone-100 rounded-3xl outline-none shadow-md focus:ring-2 placeholder:text-gray-300 placeholder:font-semibold ${error ? "ring-2 ring-red-400" : "focus:ring-gray-800"} ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${inputClassName ?? ""}`}
//             >
//                 {Icon && (
//                     <div>
//                         <Icon
//                             size={20}
//                             className=" text-slate-400 group-focus-within:text-primary transition-colors"
//                         />
//                     </div>
//                 )}
//                 <input
//                     {...register(name)}
//                     id={id}
//                     type={isTypeInputPasssword ? toggleType : type}
//                     placeholder={placeholder}
//                     disabled={disabled}
//                     autoComplete={autoComplete}
//                     className=" outline-none w-full"
//                 />
//                 {isTypeInputPasssword && (
//                     <span
//                         className="text-gray-500 cursor-pointer"
//                         onClick={handleClick}
//                     >
//                         {eyeIcon}
//                     </span>
//                 )}
//             </div>
//             {error && (
//                 <p className="mt-2 ml-3 text-sm font-medium text-red-500">
//                     {error}
//                 </p>
//             )}
//         </div>
//     );
// };

// export default InputField;

"use client";

import { Eye, EyeClosed, LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { JSX, useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

// تعریف تایپ‌های ورودی کامپوننت
type InputFieldProps<T extends FieldValues> = {
    label: string;
    placeholder: string;
    type?: "text" | "password" | "email" | "number" | "tel"; // محدود کردن تایپ‌های متداول
    id: string;
    name: Path<T>;
    containerClassName?: string;
    inputClassName?: string;
    register: UseFormRegister<T>;
    error?: string;
    disabled?: boolean;
    autoComplete?: string;
    icon?: LucideIcon;
    isForgotPass?: boolean;
};

// نگاشت استایل‌ها به سبک ساختار دکمه
const containerBaseStyle = "flex flex-col gap-1 p-3 sm:p-4";

const labelStyle =
    "flex justify-between uppercase text-gray-500 font-bold ml-3 text-sm";

const forgotPassLinkStyle =
    "text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors";

const inputWrapperBaseStyle =
    "group flex items-center gap-3 sm:gap-5 sm:py-5 sm:px-6 py-3 px-5 bg-stone-100 rounded-3xl outline-none shadow-md focus:ring-2 placeholder:text-gray-300 placeholder:font-semibold transition duration-200";

const statusStyles = {
    error: "ring-2 ring-red-400",
    focus: "focus:ring-gray-800",
    disabled: "opacity-60 cursor-not-allowed",
};

const inputBaseStyle = "outline-none w-full bg-transparent";

const InputField = <T extends FieldValues>({
    label,
    placeholder,
    type = "text",
    id,
    name,
    containerClassName = "",
    inputClassName = "",
    disabled = false,
    register,
    error,
    autoComplete,
    icon: Icon,
    isForgotPass = false,
}: InputFieldProps<T>): JSX.Element => {
    // استفاده از فلگ boolean به جای ذخیره مستقیم JSX در state
    const [showPassword, setShowPassword] = useState(false);

    const isTypePassword = type === "password";

    // تعیین نوع فیلد ورودی به صورت داینامیک
    const currentInputType = isTypePassword
        ? showPassword
            ? "text"
            : "password"
        : type;

    return (
        <div className={`${containerBaseStyle} ${containerClassName}`}>
            <label htmlFor={id} className={labelStyle}>
                {label}
                {isForgotPass && (
                    <Link
                        href="/login/forget-password"
                        className={forgotPassLinkStyle}
                    >
                        Forgot password?
                    </Link>
                )}
            </label>

            <div
                className={`
                    ${inputWrapperBaseStyle} 
                    ${error ? statusStyles.error : statusStyles.focus} 
                    ${disabled ? statusStyles.disabled : ""} 
                    ${inputClassName}
                `.trim()}
            >
                {Icon && (
                    <div>
                        <Icon
                            size={20}
                            className="text-slate-400 group-focus-within:text-primary transition-colors"
                        />
                    </div>
                )}

                <input
                    {...register(name)}
                    id={id}
                    type={currentInputType}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    className={inputBaseStyle}
                />

                {isTypePassword && (
                    <button
                        type="button" // برای جلوگیری از Submit ناخواسته فرم در داخل تگ فرم
                        className="text-gray-500 cursor-pointer focus:outline-none select-none"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? (
                            <Eye size={20} className="hover:text-primary" />
                        ) : (
                            <EyeClosed
                                size={20}
                                className="hover:text-primary"
                            />
                        )}
                    </button>
                )}
            </div>

            {error && (
                <p className="mt-2 ml-3 text-sm font-medium text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputField;
