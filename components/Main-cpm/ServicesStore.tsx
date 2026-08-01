const ServicesStore = () => {
    const featuresData = [
        {
            title: "Top Laptop Gallery in Germany",
            description:
                "Whether you're looking for a high-performance gaming laptop or a sleek ultrabook for work, we offer the latest models from top brands like HP, Asus, Dell, and Apple. Our collection is curated for durability and power.",
        },
        {
            title: "Premium PC Components",
            description:
                "Build your dream rig with our wide range of processors, motherboards, graphics cards, and storage solutions. We provide genuine components that ensure your system runs at peak performance for years to come.",
        },
        {
            title: "Next-Gen Audio & Gadgets",
            description:
                "Experience superior sound with our premium headphones and speakers. From professional studio gear to portable Bluetooth speakers, we've got something for every audiophile and gadget enthusiast.",
        },
    ];

    return (
        <>
            {featuresData.map((feature, index) => (
                <div key={index} className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 border-l-4 border-primary pl-3">
                        {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </>
    );
};

export default ServicesStore;
