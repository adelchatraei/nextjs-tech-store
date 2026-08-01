import Link from "next/link";
import Brand from "./Footer-cmp/‌Brand";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    const catalogLinks = [
        "Smartphones",
        "Laptops",
        "Accessories",
        "Tablets",
        "Audio Systems",
        "Gaming Gear",
    ];

    const supportLinks = [
        "Help Center",
        "Order Tracking",
        "Returns & Refunds",
        "Technical Setup",
        "Warranty Policy",
        "Contact Us",
    ];
    return (
        <footer className=" text-gray-400 pt-24 pb-12 overflow-hidden relative bg-[linear-gradient(156deg,#0c3d1d_0%,#0e2824_39%,#0f172a_100%)]">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}

                    <Brand />

                    {/* Catalog */}
                    <div>
                        <h3 className="text-white font-black text-sm uppercase tracking-widest mb-8">
                            Catalog
                        </h3>

                        <ul className="space-y-4 text-sm font-medium">
                            {catalogLinks.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href="/products"
                                        className="hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-primary group-hover:w-3 transition-all"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-black text-sm uppercase tracking-widest mb-8">
                            Support
                        </h3>

                        <ul className="space-y-4 text-sm font-medium">
                            {supportLinks.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href="/support"
                                        className="hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-primary group-hover:w-3 transition-all"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-8">
                        <h3 className="text-white font-black text-sm uppercase tracking-widest mb-8">
                            Stay Ahead
                        </h3>

                        <p className="text-xs leading-relaxed">
                            Subscribe to receive early-bird tech deals and
                            innovation updates.
                        </p>

                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="tech@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white font-bold"
                            />

                            <button className="absolute right-2 top-2 bottom-2 px-4 bg-primary text-[#0F172A] rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/5 text-xs font-black uppercase tracking-widest text-gray-500">
                    <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-primary" />
                        <span>
                            Friedrichstraße 121, 10117 Berlin · Europe Tech Hub
                        </span>
                    </div>

                    <div className="flex items-center gap-3 md:justify-center">
                        <Mail size={16} className="text-primary" />
                        <span>support@techstore.io</span>
                    </div>

                    <div className="flex items-center gap-3 md:justify-end">
                        <Phone size={16} className="text-primary" />
                        <span>+49 30 1234 5678</span>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-[10px] font-bold uppercase tracking-widest gap-4">
                    <p>© 2026 Techstore Innovation Lab. All rights reserved.</p>

                    <div className="flex items-center gap-8 text-white/40">
                        <Link
                            href="/privacy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/cookies"
                            className="hover:text-white transition-colors"
                        >
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
