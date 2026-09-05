import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

interface ContactCard {
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    value: string;
}

const contactCards: ContactCard[] = [
    {
        icon: Phone,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500",
        title: "Support Hotline",
        description: "Direct line for instant technical assistance.",
        value: "+880 1234-567890",
    },
    {
        icon: Mail,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-500",
        title: "Email Help Desk",
        description: "Expect a detailed response within 1 business day.",
        value: "support@techstore.com",
    },
    {
        icon: MapPin,
        iconBg: "bg-orange-50",
        iconColor: "text-orange-500",
        title: "Global HQ",
        description: "Visit our tech hub in the heart of the city.",
        value: "Dhaka, Bangladesh",
    },
];

export default function ContactSidebar() {
    return (
        <aside className="space-y-6">
            {contactCards.map((card) => (
                <div
                    key={card.title}
                    className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl shadow-gray-200/30 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                    <div
                        className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center ${card.iconColor} mb-6 group-hover:scale-110 transition-transform`}
                    >
                        <card.icon size={28} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-black text-foreground tracking-tight mb-2 text-balance">
                        {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium mb-4">
                        {card.description}
                    </p>
                    <p className="text-primary text-xl font-black">
                        {card.value}
                    </p>
                </div>
            ))}

            <div className="bg-primary p-10 rounded-[40px] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-1000" />
                <Sparkles
                    size={32}
                    strokeWidth={2}
                    className="text-yellow-400 mb-6"
                />
                <h3 className="text-2xl font-black tracking-tight mb-4">
                    Live Resolution
                </h3>
                <p className="text-white/70 text-sm font-medium leading-relaxed mb-8">
                    Our expert engineers are online right now to solve your
                    hardware queries.
                </p>
                <button
                    type="button"
                    className="w-full py-4 bg-white text-primary rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all"
                >
                    Start Live Chat
                </button>
            </div>
        </aside>
    );
}
