"use client";

import { useRef, useEffect } from "react";

type OtpInputProps = {
    length?: number;
    value: string;
    onChange: (value: string) => void;
};

const OtpInput = ({ length = 6, value, onChange }: OtpInputProps) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    return (
        <div className="mt-10 flex justify-center gap-1">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={value[index] ?? ""}
                    onChange={(e) => {
                        const digit = e.target.value.replace(/\D/g, "");

                        const otpArray = value.split("");

                        otpArray[index] = digit;

                        onChange(otpArray.join(""));
                        if (digit && index < length - 1) {
                            inputRefs.current[index + 1]?.focus();
                        }
                    }}
                    onKeyDown={(e) => {
                        if (
                            e.key === "Backspace" &&
                            !value[index] &&
                            index > 0
                        ) {
                            inputRefs.current[index - 1]?.focus();
                        }
                    }}
                    className="
                    h-11
                    w-9
                    sm:h-16
                    sm:w-14
                    bg-stone-100
                    rounded-2xl
                    text-center
                    text-2xl
                    font-bold
                    outline-none
                    transition
                    focus:ring-2
                    focus:ring-primary
                    "
                    ref={(element) => {
                        inputRefs.current[index] = element;
                    }}
                />
            ))}
        </div>
    );
};

export default OtpInput;
