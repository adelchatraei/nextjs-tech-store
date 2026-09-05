import { ChevronDown, Zap } from "lucide-react";

const QuestionsSection = () => {
    return (
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-2xl font-black text-foreground mb-8 flex items-center gap-3 tracking-tight">
                <Zap size={24} className="text-primary" />
                Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                <div className="border-b border-gray-50 last:border-0 pb-4">
                    <button className="w-full flex items-center justify-between py-4 text-left group">
                        <span className="font-bold transition-colors text-gray-600 group-hover:text-primary">
                            How long does shipping take?
                        </span>
                        <ChevronDown
                            size={20}
                            className=" text-gray-400 transition-transform duration-300"
                        />
                    </button>
                </div>
                <div className="border-b border-gray-50 last:border-0 pb-4">
                    <button className="w-full flex items-center justify-between py-4 text-left group">
                        <span className="font-bold transition-colors text-gray-600 group-hover:text-primary">
                            What is your return policy?
                        </span>
                        <ChevronDown
                            size={20}
                            className="text-gray-400 transition-transform duration-300"
                        />
                    </button>
                </div>
                <div className="border-b border-gray-50 last:border-0 pb-4">
                    <button className="w-full flex items-center justify-between py-4 text-left group">
                        <span className="font-bold transition-colors text-gray-600 group-hover:text-primary">
                            Are your products covered by warranty?
                        </span>
                        <ChevronDown
                            size={20}
                            className="text-gray-400 transition-transform duration-300"
                        />
                    </button>
                </div>
                <div className="border-b border-gray-50 last:border-0 pb-4">
                    <button className="w-full flex items-center justify-between py-4 text-left group">
                        <span className="font-bold transition-colors text-gray-600 group-hover:text-primary">
                            Do you offer technical support for setup?
                        </span>
                        <ChevronDown
                            size={20}
                            className="text-gray-400 transition-transform duration-300"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionsSection;
