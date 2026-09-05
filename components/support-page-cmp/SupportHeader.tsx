import { CircleQuestionMark, MessageCircle } from "lucide-react";

const SupportHeader = () => {
    return (
        <section className="bg-primary pt-24 pb-48 text-white relative overflow-hidden">
            <div className="container-custom text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/20">
                    <MessageCircle size={14} />
                    <span>How can we help you today?</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">
                    Help
                    <span className="text-primary-light">Center</span>
                </h1>
                <div className="max-w-2xl mx-auto relative group">
                    <CircleQuestionMark
                        size={22}
                        className=" absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 z-20"
                    />
                    <input
                        type="text"
                        className="w-full pl-16 pr-6 py-5 rounded-3xl text-foreground bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-white/20 transition-all font-medium text-lg relative z-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default SupportHeader;
