import Image from "next/image";
import loginImageCover from "@/public/login-image.webp";
import loginImageCover2 from "@/public/login-imagr-2.webp";
import { Quote } from "lucide-react";

const LoginBanner = () => {
    // return <div className="hidden bg-slate-900 lg:block">Banner</div>;

    return (
        <div className="w-full relative hidden lg:block bg-slate-950 p-3">
            <div className="relative w-full h-full rounded-[30px] overflow-hidden">
                <Image
                    alt="Tech Store Premium Setup"
                    loading="lazy"
                    fill
                    className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-1000 ease-out"
                    src={loginImageCover}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl">
                        <Quote size={32} className="text-primary/60 mb-4" />
                        <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                            The ecosystem provided by Tech Store completely
                            transformed how our studio approaches hardware
                            deployment.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-white/20 relative overflow-hidden">
                                <Image
                                    alt="Sarah J."
                                    loading="lazy"
                                    className="object-cover"
                                    src={loginImageCover2}
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-black">
                                    Sarah Jenkins
                                </h4>
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/50">
                                    Lead Architect, Nexus
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginBanner;
