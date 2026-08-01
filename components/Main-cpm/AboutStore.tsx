import ServicesStore from "./ServicesStore";

const AboutStore = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm text-gray-600 leading-relaxed">
                <ServicesStore />
            </div>
            <div className="mt-16 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">
                    Leading Computer, Laptop &amp; Gadget Shop in Germany
                </h2>
                <div className="space-y-4 text-justify">
                    <p>
                        Welcome to our tech store, your one-stop destination for
                        all things technology. Since our inception, we have been
                        committed to providing our customers with the best
                        quality products at the most affordable prices. Whether
                        you are a professional gamer, a creative designer, or
                        just a tech enthusiast, we have the right gear for you.
                    </p>
                    <p>
                        We specialize in **Laptops**, **Desktops**, **Graphics
                        Cards**, and **Gaming Peripherals**. Our after-sales
                        service is what sets us apart, ensuring that you have
                        peace of mind with every purchase. Explore our flagship
                        collection today and join our growing community of
                        satisfied customers.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutStore;
