import { Zap } from "lucide-react";
import Image from "next/image";
import ArticlesItem, { ArticlesProps } from "./ArticlesItem";
import SpatialComputing from "@/public/spatialcomputing.webp";
import EssentialDevices from "@/public/EssentialDevicesfor2024.webp";
import MunichHub from "@/public/MunichHub.webp";

const Articles = () => {
    const posts: ArticlesProps[] = [
        {
            id: "1",
            title: "The Future of Spatial Computing",
            category: "Trends",
            image: SpatialComputing,
        },
        {
            id: "2",
            title: "Top 10 Essential Devices for 2024",
            category: "Culture",
            image: EssentialDevices,
        },
        {
            id: "3",
            title: "Inside the Munich Design Hub",
            category: "Studio",
            image: MunichHub,
        },
    ];

    return (
        <section className="mb-10 sm:mb-16">
            <div className="flex items-end justify-between mb-6">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4 block">
                        The Journal
                    </span>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter">
                        News You Can{" "}
                        <span className="text-primary">Actually Use</span>
                    </h2>
                </div>
                <button className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">
                    Read All Stories <Zap size={14} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <ArticlesItem data={post} key={post.id} />
                ))}
            </div>
        </section>
    );
};

export default Articles;
