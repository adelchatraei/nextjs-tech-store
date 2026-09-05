import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import CompanyHighlights from "./CompanyHighlights";
import QualityOffer from "./QualityOffer";
import CustomerClub from "./CustomerClub";
import Articles from "./Articles";
import AboutStore from "./AboutStore";
import { ProductFilterType } from "@/types/ProductFiltersType";

export type StoreFrantProps = {
    filter: ProductFilterType;
    searchParam: Record<string, string | string[] | undefined>;
};

const StoreFrant = ({ filter, searchParam }: StoreFrantProps) => {
    return (
        <>
            <div className="">
                <Categories />
            </div>
            <div className="">
                <FeaturedProducts filter={filter} searchParam={searchParam} />
            </div>
            <div className="">
                <CompanyHighlights />
            </div>
            <div className="">
                <QualityOffer />
            </div>
            <div>
                <CustomerClub />
            </div>
            <div>
                <Articles />
            </div>
            <div>
                <AboutStore />
            </div>
        </>
    );
};

export default StoreFrant;
