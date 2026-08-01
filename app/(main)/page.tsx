import Slider from "@/components/Main-cpm/Slider";
import StoreFrant from "@/components/Main-cpm/StoreFrant";
import Brands from "@/components/Main-cpm/‌‌Brands";

const Home = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
    const params = await searchParams;
    const sort = params.sort || "newest";

    return (
        <main className="min-h-[70vh]">
            <div className="bg-[#F8FAFC] min-h-screen">
                <section className="relative overflow-hidden py-10 lg:py-0 lg:min-h-[75vh] flex items-center bg-[#E0FFF4] bg-[radial-gradient(circle,rgba(224,255,244,1)_0%,rgba(255,255,255,1)_27%,rgba(255,255,255,1)_73%,rgba(224,255,244,1)_100%)]">
                    <Slider />
                </section>
                <section className="bg-white border-y border-gray-100 py-6 lg:py-10 overflow-hidden">
                    <Brands />
                </section>
                <section className="container-custom py-12 lg:py-16 relative z-20 flex flex-col gap-12 lg:gap-16">
                    <StoreFrant sort={sort} />
                </section>
            </div>
        </main>
    );
};

export default Home;
