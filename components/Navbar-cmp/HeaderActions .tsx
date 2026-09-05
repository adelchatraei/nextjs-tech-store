import HamburgerMenuIcon from "@/components/icons/NavBar/HamburgerMenuIcon";
import ShopingBasket from "./shopingBasket";
import FavoriteUser from "./FavoriteUser";
import LoginAndAuth from "./LoginAndAuth";
import SearchBoxHeader from "./SearchBoxHeader";

const HeaderActions = () => {
    return (
        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-5">
            <SearchBoxHeader />

            <div className="flex items-center gap-1 sm:gap-2">
                <FavoriteUser />

                <ShopingBasket />

                <LoginAndAuth />

                <HamburgerMenuIcon />
            </div>
        </div>
    );
};

export default HeaderActions;
