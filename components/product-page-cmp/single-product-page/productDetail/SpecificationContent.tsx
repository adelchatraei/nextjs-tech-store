import { getKeyFeatures, parseSpecification } from "@/utils/parseSpecification";
import { ListTodo, Sparkles } from "lucide-react";

type SpecificationContentProps = {
    specifications: string;
};

const SpecificationContent = ({
    specifications,
}: SpecificationContentProps) => {
    const parseSpecificationText = parseSpecification(specifications);
    const keyFeature = getKeyFeatures(parseSpecificationText);

    console.log(parseSpecificationText);
    // console.table(keyFeature);

    return (
        <div className="space-y-10">
            <h2 className="text-xl font-bold text-slate-800">
                Technical{" "}
                <span className="text-primary italic">Specifications</span>
            </h2>
            <div className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
                <div className="w-full">
                    <div className="bg-slate-50 border-b border-gray-100 px-5 sm:px-8 py-4">
                        <h3 className="font-bold text-slate-700 uppercase tracking-wider italic text-xs sm:text-sm flex items-center gap-2">
                            <Sparkles size={14} className="text-primary" /> Key
                            Features
                        </h3>
                    </div>
                    <div className="divide-y divide-gray-100 bg-white">
                        {keyFeature.map((feature, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors"
                                >
                                    <div className="px-5 sm:px-8 py-3 sm:py-5 font-bold text-gray-500 text-[10px] sm:text-xs sm:w-1/3 bg-gray-50/40 uppercase tracking-tight sm:tracking-normal">
                                        {feature.label}
                                    </div>
                                    <div className="px-5 sm:px-8 py-3 sm:py-5 text-slate-800 font-bold sm:font-medium text-[11px] sm:text-xs border-t border-gray-50 sm:border-0">
                                        {feature.value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="bg-[#f0fdf4] border-t border-b border-gray-100 px-5 sm:px-8 py-4 mt-6">
                        <h3 className="font-bold text-primary uppercase tracking-wider italic text-xs sm:text-sm flex items-center gap-2">
                            <ListTodo size={14} /> Technical Specifications
                        </h3>
                    </div>
                    <div>
                        {parseSpecificationText.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="">
                                {/* عنوان + آیکون بخش */}
                                <h3 className="flex items-center gap-2 pl-3 py-2 text-sm sm:text-xl font-bold mb-4 bg-gray-100">
                                    <span>{section.icon}</span>
                                    <span>{section.title}</span>
                                </h3>

                                {/* همه‌ی آیتم‌های بخش، زیر هم */}
                                <div className="flex flex-col divide-y divide-gray-200 rounded-lg overflow-hidden">
                                    {section.subGroups.map((group, index) => (
                                        <div key={index}>
                                            {/* اگه subGroup عنوان داشت (مثل "Main Camera — Wide") نشونش بده */}
                                            {group.title && (
                                                <div className="bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-600">
                                                    {group.title}
                                                </div>
                                            )}

                                            {group.items.map(
                                                (item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors"
                                                    >
                                                        {item.label ? (
                                                            <>
                                                                <span className="px-5 sm:px-8 py-3 sm:py-5 font-bold text-gray-500 text-[10px] sm:text-xs sm:w-1/3 bg-gray-50/40 uppercase tracking-tight sm:tracking-normal">
                                                                    {item.label}
                                                                </span>
                                                                <span className="px-5 sm:px-8 py-3 sm:py-5 text-slate-800 font-bold sm:font-medium text-[11px] sm:text-xs border-t border-gray-50 sm:border-0">
                                                                    {item.value}
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <span className="text-slate-800 font-bold sm:font-medium text-[12px] sm:text-[14px]">
                                                                {item.value}
                                                            </span>
                                                        )}
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* {parseSpecificationText.map((spec, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors"
                                >
                                    <h3>
                                        {spec.icon}
                                        <span className="px-5 sm:px-8 py-3 sm:py-5 font-bold text-gray-500 text-[10px] sm:text-xs sm:w-1/3 bg-gray-50/40 uppercase tracking-tight sm:tracking-normal">
                                            {spec.title}
                                        </span>
                                    </h3>
                                    {spec.subGroups.map((sub, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="px-5 sm:px-8 py-3 sm:py-5 text-slate-800 font-bold sm:font-medium text-[11px] sm:text-xs border-t border-gray-50 sm:border-0"
                                            ></div>
                                        );
                                    })}
                                </div>
                            );
                        })} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificationContent;

{
    /* <div
    key={}
    className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors"
>
    <div className="px-5 sm:px-8 py-3 sm:py-5 font-bold text-gray-500 text-[10px] sm:text-xs sm:w-1/3 bg-gray-50/40 uppercase tracking-tight sm:tracking-normal">
       
    </div>
    <div className="px-5 sm:px-8 py-3 sm:py-5 text-slate-800 font-bold sm:font-medium text-[11px] sm:text-xs border-t border-gray-50 sm:border-0"></div>
</div>; */
}
