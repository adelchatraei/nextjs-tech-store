import { Mail, Send } from "lucide-react";

const DirectMessageSction = () => {
    return (
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            {/* Decorative Blur Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />

            <h2 className="text-2xl font-black text-foreground mb-8 flex items-center gap-3 tracking-tight">
                <Mail className="text-primary" aria-hidden="true" />
                Direct Message
            </h2>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                            Full Name
                        </label>
                        <input
                            required
                            placeholder="John Doe"
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm"
                            type="text"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                            Email Address
                        </label>
                        <input
                            required
                            placeholder="john@example.com"
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm"
                            type="email"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                        Message Detail
                    </label>
                    <textarea
                        required
                        rows={5}
                        placeholder="How can we assist you?"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-sm resize-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl flex items-center justify-center gap-3 bg-primary text-white shadow-primary/30 hover:-translate-y-1 active:scale-95"
                >
                    <Send className="w-4.5 h-4.5" aria-hidden="true" />
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default DirectMessageSction;
