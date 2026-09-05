import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import QueryProvider from "@/providers/QueryProvider";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <SmoothScroll>
                <QueryProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </QueryProvider>
            </SmoothScroll>
        </div>
    );
}
