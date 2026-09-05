"use client";

import DeliveryIcon from "@/components/icons/Slider/DeliveryIcon";
import WarrantyIcon from "@/components/icons/Slider/WarrantyIcon";
import Image from "next/image";
import GuaranteeIcon from "@/components/icons/Slider/Guarantee";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Transition } from "framer-motion";
import { CreateBannerType } from "@/schemas/banner/banner.schema";

export interface SliderItemProps {
    id: string;
    tag?: string;
    title1?: string;
    title2?: string;
    description?: string;
    image: StaticImport;
}

interface SlideProps {
    slide: CreateBannerType["slides"];
}

const smoothTransition: Transition = {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.6,
};

const containerVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            ...smoothTransition,
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
    exit: { opacity: 0, y: -20, scale: 0.98, transition: smoothTransition },
};

const imageVariants = {
    initial: { opacity: 0, x: 40, scale: 0.96 },
    animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: smoothTransition,
    },
    exit: {
        opacity: 0,
        x: 40,
        scale: 0.96,
        transition: smoothTransition,
    },
};

const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
        opacity: 1,
        x: 0,
        transition: smoothTransition,
    },
    exit: {
        opacity: 0,
        x: -20,
        transition: smoothTransition,
    },
};

const descriptionVariants = {
    initial: { opacity: 0, y: 12 },
    animate: {
        opacity: 1,
        y: 0,
        transition: smoothTransition,
    },
    exit: {
        opacity: 0,
        y: 12,
        transition: smoothTransition,
    },
};

const SliderItems = ({ slide }: SlideProps) => {
    const [current, setCurrent] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent((prev) => (prev + 1) % slide?.length);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slide.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [slide.length]);

    if (slide.length === 0) return null;
    const currentSlide = slide[current];
    return (
        <div className="container-custom px-4 sm:px-15 relative z-10 w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide.description}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* TEXT */}
                        <div className=" lg:col-span-6 text-center lg:text-left order-2 lg:order-1 lg:pl-7">
                            <motion.div
                                variants={textVariants}
                                className=" inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-emerald-100 shadow-sm mb-4"
                            >
                                <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-emerald-700">
                                    {currentSlide.badge}
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={textVariants}
                                className=" text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 mb-4 leading-[1.1]"
                            >
                                {currentSlide.headlinePrimary}
                                <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-emerald-500">
                                    {currentSlide.headlineSecondary}
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={descriptionVariants}
                                className=" mx-auto lg:mx-0 max-w-xl text-sm sm:text-lg md:text-xl text-slate-700 mb-8 leading-relaxed font-medium"
                            >
                                {currentSlide.description}
                            </motion.p>

                            <motion.div
                                variants={descriptionVariants}
                                className=" flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center lg:justify-start"
                            >
                                <div className="flex gap-2 items-center">
                                    <div className="p-1.5 bg-green-100 rounded-full text-green-600">
                                        <WarrantyIcon />
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold">
                                        1 Year Warranty
                                    </span>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <div className="p-1.5 bg-green-100 rounded-full text-green-600">
                                        <DeliveryIcon />
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold">
                                        Next-Day Delivery
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* IMAGE */}
                        <motion.div
                            variants={imageVariants}
                            className=" lg:col-span-6 relative order-1 lg:order-2 flex justify-center h-75 sm:h-100 lg:h-137.5 items-center"
                        >
                            <div className="absolute top-10 left-6 hidden sm:block z-10">
                                <div className="bg-white p-2 rounded-xl shadow-lg border border-green-50 ">
                                    <GuaranteeIcon />
                                </div>
                            </div>

                            <Image
                                src={currentSlide.image}
                                alt="banner-image"
                                priority
                                fill
                                className="w-full h-auto max-w-162.5 object-contain"
                            />

                            <div className=" hidden sm:flex flex-col items-center absolute right-2 bottom-2 bg-slate-900 text-white px-3 py-1 rounded-lg shadow-xl  animate-bounce">
                                <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-400">
                                    BEST SELLER
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    2026
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default SliderItems;
