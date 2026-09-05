import { WandSparkles } from "lucide-react";
import BannerAddSlideButton from "./BannerAddSlideButton";

const HeaderBannerPage = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start gap-3">
                {/* Icon */}

                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <WandSparkles size={21} strokeWidth={2.5} />
                </div>

                {/* Title */}

                <div className="space-y-1">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                        Hero Spotlight
                    </h1>

                    <p className="text-gray-500 text-sm font-medium">
                        {`Customize the premium spotlight section of your
                            platform's home page.`}
                    </p>
                </div>
            </div>

            {/* Add Slide */}

            <BannerAddSlideButton />
        </div>
    );
};

export default HeaderBannerPage;
