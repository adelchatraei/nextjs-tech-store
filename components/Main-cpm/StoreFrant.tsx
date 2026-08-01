import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import CompanyHighlights from "./CompanyHighlights";
import QualityOffer from "./QualityOffer";
import CustomerClub from "./CustomerClub";
import Articles from "./Articles";
import AboutStore from "./AboutStore";

const StoreFrant = ({ sort }: { sort: string }) => {
    return (
        <>
            <div className="">
                <Categories />
            </div>
            <div className="">
                <FeaturedProducts sort={sort} />
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
