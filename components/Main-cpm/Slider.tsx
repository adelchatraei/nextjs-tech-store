import getBanner from "@/querys/bannerQuery/getBanner";
import SliderItems from "./SliderItems";

const Slider = async () => {
    const banner = await getBanner();
    const slider = banner?.slides ?? [];

    return (
        <>
            <SliderItems slide={slider} />
        </>
    );
};

export default Slider;
