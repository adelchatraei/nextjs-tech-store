import SmoothScroll from "@/components/SmoothScroll";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";

interface SuperAdminLayoutProps {
    children: React.ReactNode;
}

const SuperAdminLayout = ({ children }: SuperAdminLayoutProps) => {
    return (
        <SmoothScroll>
            <div className="min-h-screen bg-stone-100 flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Area */}
                <div className="flex-1 min-w-0 flex flex-col">
                    <DashboardHeader />

                    <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
                </div>
            </div>
        </SmoothScroll>
    );
};

export default SuperAdminLayout;
