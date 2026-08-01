import Logo from "./Navbar-cmp/Logo";
import HeaderActions from "./Navbar-cmp/HeaderActions ";
import NavLinks from "./Navbar-cmp/NavLinks";

const Navbar = () => {
    return (
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
            <div className="container-custom px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                <Logo />
                <NavLinks />
                <HeaderActions />
            </div>
        </header>
    );
};

export default Navbar;
