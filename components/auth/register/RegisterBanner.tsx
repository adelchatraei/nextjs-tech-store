import Image from "next/image";
import registerBanner from "@/public/register-bannder.webp";
import { Zap } from "lucide-react";

const RegisterBanner = () => {
    return (
        <div className="w-full lg:w-1/2 relative hidden lg:block bg-slate-950 p-3">
            <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                <Image
                    src={registerBanner}
                    alt="Register-banner"
                    className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl">
                        <div className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center mb-6">
                            <Zap size={24} className=" animate-pulse" />
                        </div>
                        <h3 className="text-2xl text-white font-black tracking-tight mb-3">
                            0 Setup. 100% Performance
                        </h3>
                        <p className="text-white/70 font-medium leading-relaxed">
                            Join over 12,000 top-tier professionals who have
                            upgraded their workflow through our curated hardware
                            collection.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterBanner;
