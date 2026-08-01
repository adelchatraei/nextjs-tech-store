import { Facebook, Github, Instagram, Store, Twitter } from "lucide-react";
import Link from "next/link";

const Brand = () => {
    return (
        <div className="space-y-8">
            <Link
                href="/"
                className="text-2xl font-black text-white flex items-center gap-2 group"
            >
                <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 transition-transform group-hover:rotate-12">
                    <Store size={22} />
                </div>
                <span className="tracking-tighter">
                    Tech<span className="text-primary">Store</span>
                </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs">
                Empowering your digital lifestyle with high-performance hardware
                and futuristic innovation. Your trusted partner in tech
                excellence since 2024.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
                {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                    <a
                        key={i}
                        href="#"
                        className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                    >
                        <Icon size={18} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Brand;
