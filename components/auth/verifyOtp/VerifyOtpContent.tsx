"use client";

import VerifyOtpForm from "./VerifyOtpForm";
import { useSearchParams } from "next/navigation";
import ResendOtp from "./ResendOtp";
import { ShieldCheck } from "lucide-react";

const VerifyOtpContent = () => {
    const searchParam = useSearchParams();
    const email = searchParam.get("email") ?? "";

    return (
        <section className="min-h-[90vh] w-full flex items-center justify-center bg-[#fafafa] py-12 px-4 sm:px-6 relative overflow-hidden font-sans">
            <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl shadow-gray-200/60 p-10 sm:p-12 relative z-10 border border-white/50 text-center">
                <div className="flex justify-center items-center p-2 sm:p-4 mx-auto mb-4 sm:mb-6 w-fit rounded-3xl bg-green-50 text-primary">
                    <ShieldCheck size={40} />
                </div>
                <h2 className=" mb-3 sm:mb-4 bg-[radial-gradient(circle,rgba(63,251,82,1)_30%,rgba(252,70,107,1)_100%)] bg-clip-text text-transparent ">
                    <span className="text-3xl font-black bg-[radial-gradient(circle,rgba(63,251,82,1)_30%,rgba(252,70,107,1)_100%)] bg-clip-text text-transparent uppercase">
                        Verify Email
                    </span>
                </h2>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                    We have sent a 6-digit code to
                    <br />
                    <span className="text-slate-900 font-bold">{email}</span>
                </p>

                <VerifyOtpForm email={email} />

                <ResendOtp email={email} />
            </div>
        </section>
    );
};

export default VerifyOtpContent;
