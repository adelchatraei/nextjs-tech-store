import notFoundImage from "@/public/not-found-image.webp";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex flex-col justify-center items-center">
            <div className="relative w-100 md:w-125 h-100 md:h-125">
                <Image
                    src={notFoundImage}
                    alt="not found image"
                    fill
                    className="object-cover"
                />
            </div>
            <Link
                href={"/"}
                className="flex justify-center items-center gap-3 px-4 md:px-6 py-2 md:py-4 bg-primary hover:shadow-md hover:bg-primary-dark rounded-3xl text-white text-[16px] md:text-xl  font-bold uppercase group"
            >
                <ArrowLeft
                    size={20}
                    className="group-hover:-translate-x-1 transition-transform"
                />
                back to home
            </Link>
        </main>
    );
};

export default NotFound;
