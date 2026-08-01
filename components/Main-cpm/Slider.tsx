import SliderItems, { SliderItemProps } from "./SliderItems";
import TechImage from "@/public/tech-removebg-preview (1).webp";
import AudioImage from "@/public/download-removebg-preview.webp";
import DailyRoutineImage from "@/public/download-1-removebg-preview.webp";
import GamingMonitorImage from "@/public/download-2.webp";

const Slider = () => {
    const slide: SliderItemProps[] = [
        {
            id: "1",
            tag: "New Hot Deal",
            title1: "Experience the",
            title2: "Future of Tech",
            description:
                "Discover revolutionary gadgets that redefine your lifestyle",
            image: TechImage,
        },
        {
            id: "2",
            tag: "Pure Sound",
            title1: "Elevate your",
            title2: "Audio Reality",
            description:
                "Experience crystal-clear sound with active noise cancellation and industry-leading bass performance.",
            image: AudioImage,
        },
        {
            id: "3",
            tag: "Smart Lifestyle Gear",
            title1: "Upgrade your",
            title2: "Daily Routine",
            description:
                "Stay connected and track your health with our latest collection of premium smart wearables",
            image: DailyRoutineImage,
        },
        {
            id: "4",
            tag: "Performance King",
            title1: "Gaming Monitor",
            title2: "Visual Borders",
            description:
                "Experience 4K clarity with ultra-fast refresh rates designed for the ultimate immersive viewing experience",
            image: GamingMonitorImage,
        },
    ];
    return (
        <>
            <SliderItems slide={slide} />
        </>
    );
};

export default Slider;
