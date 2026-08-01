import BrandsItem from "./BrandsItem";

const Brands = () => {
    return (
        <div className="container-custom flex items-center justify-between">
            <div className="flex items-center justify-between gap-12">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 whitespace-nowrap border-r border-gray-100 pr-12 hidden lg:block">
                    Global Fleet
                </span>
            </div>
            <div className="flex-1 flex items-center justify-between opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 ">
                <BrandsItem stateIcon="mobile" BrandName="APPLE" />
                <BrandsItem stateIcon="mobile" BrandName="SAMSUNG" />
                <BrandsItem stateIcon="headPhone" BrandName="SONY" />
                <BrandsItem stateIcon="cpu" BrandName="NVIDIA" />
                <BrandsItem stateIcon="monitor" BrandName="LG" />
                <BrandsItem stateIcon="laptop" BrandName="DEL" />
            </div>
        </div>
    );
};

export default Brands;
