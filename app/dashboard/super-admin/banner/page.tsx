import getBanner from "@/querys/bannerQuery/getBanner";
import HeaderBannerPage from "../components/banner/HeaderBannerPage";
import BannerForm from "../components/banner/BannerForm";
import BannerContent from "../components/banner/BannerContent";
import SaveConfigurationButton from "../components/banner/SaveConfigurationButton";

const BannerPage = async () => {
    const banner = await getBanner();

    return (
        <div className="space-y-7 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <BannerForm banner={banner}>
                <HeaderBannerPage />

                <BannerContent />

                <SaveConfigurationButton />
            </BannerForm>
        </div>
    );
};

export default BannerPage;
