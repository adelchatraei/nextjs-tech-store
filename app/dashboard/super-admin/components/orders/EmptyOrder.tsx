import { ShoppingBag } from "lucide-react";
import Link from "next/link";

type EmptyOrderProps = {
    setStatus: (value: string) => void;
};

const EmptyOrder = ({ setStatus }: EmptyOrderProps) => {
    return (
        <tbody className="animate-in fade-in slide-in-from-top-4 duration-1000 divide-y divide-gray-50">
            <tr>
                <td colSpan={5} className="py-32 text-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative mb-10 group">
                            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition-all duration-500 scale-90"></div>
                            <div className="relative w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center text-primary shadow-premium border border-gray-100 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                                <ShoppingBag size={56} />
                            </div>
                        </div>

                        <h3 className="text-3xl font-black text-foreground tracking-tight">
                            No Orders Found
                        </h3>

                        <p className="text-gray-400 font-bold mt-2 max-w-sm mx-auto leading-relaxed uppercase text-[10px] tracking-[0.2em]">
                            {`We couldn't find any orders matching your criteria. Try adjusting your search or filters.`}
                        </p>

                        <div className="mt-10 flex gap-4 justify-center">
                            <Link
                                className="px-6 py-3 bg-zinc-900 text-white rounded-xl font-bold text-xs hover:bg-black transition-all"
                                href="/"
                            >
                                Go Store
                            </Link>
                            <button
                                className="px-6 py-3 bg-white border border-gray-100 text-gray-500 rounded-xl font-bold text-xs hover:bg-gray-50 transition-all"
                                onClick={() => setStatus("All")}
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default EmptyOrder;
