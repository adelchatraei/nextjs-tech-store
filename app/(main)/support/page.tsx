import ContactSidebar from "@/components/support-page-cmp/ContactSidebar";
import DirectMessageSction from "@/components/support-page-cmp/DirectMessageSction";
import QuestionsSection from "@/components/support-page-cmp/QuestionsSection";
import SupportHeader from "@/components/support-page-cmp/SupportHeader";

const Support = () => {
    return (
        <div className="bg-[#F8FAFC] min-h-screen pb-24">
            <SupportHeader />
            <div className="container-custom -mt-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <section className="lg:col-span-2 space-y-8">
                        <QuestionsSection />

                        <DirectMessageSction />
                    </section>
                    <aside className="space-y-6">
                        <ContactSidebar />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Support;
