"use client";

import { ImageIcon } from "lucide-react";
import { useBannerForm } from "./BannerFormContext";
import SlideConfiguration from "../../banner/SlideConfiguration";

const BannerContent = () => {
    const { fields, addSlide } = useBannerForm();
    return (
        <>
            {fields.length === 0 ? (
                <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm min-h-83.75 flex items-center justify-center p-6">
                    <div className="flex flex-col items-center text-center max-w-md">
                        <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-300 mb-6">
                            <ImageIcon size={31} strokeWidth={1.7} />
                        </div>

                        <h2 className="text-lg sm:text-xl font-black text-foreground">
                            No slides added yet
                        </h2>

                        <p className="mt-2 text-sm font-medium text-gray-400 leading-6">
                            Add up to 4 premium slides to showcase your tech
                            <br className="hidden sm:block" />
                            products with style.
                        </p>

                        <button
                            onClick={addSlide}
                            type="button"
                            className="mt-7 px-7 py-3.5 rounded-2xl bg-primary text-white text-xs font-black shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
                        >
                            Initialize First Slide
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    {fields.map((_, index) => {
                        return <SlideConfiguration key={index} index={index} />;
                    })}
                </>
            )}
        </>
    );
};

export default BannerContent;

//  {!hasSlides ? (
//                     <div className="bg-white rounded-[30px] border border-gray-100 shadow-sm min-h-83.75 flex items-center justify-center p-6">
//                         <div className="flex flex-col items-center text-center max-w-md">
//                             <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-300 mb-6">
//                                 <ImageIcon size={31} strokeWidth={1.7} />
//                             </div>

//                             <h2 className="text-lg sm:text-xl font-black text-foreground">
//                                 No slides added yet
//                             </h2>

//                             <p className="mt-2 text-sm font-medium text-gray-400 leading-6">
//                                 Add up to 4 premium slides to showcase your tech
//                                 <br className="hidden sm:block" />
//                                 products with style.
//                             </p>

//                             <button
//                                 type="button"
//                                 className="mt-7 px-7 py-3.5 rounded-2xl bg-primary text-white text-xs font-black shadow-lg shadow-primary/20 hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all"
//                             >
//                                 Initialize First Slide
//                             </button>
//                         </div>
//                     </div>
//                 ) : (
//                     <>
//                         {" "}
//                         {slides.map((slide, index) => {
//                             return (
//                                 <SlideConfiguration
//                                     key={slide._id}
//                                     index={index}
//                                 />
//                             );
//                         })}
//                     </>
//                 )}
