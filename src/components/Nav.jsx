import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.querySelector(location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 200); // Small delay to ensure rendering
        }
    }, [location]);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <nav>
            {/* Menu Button */}
            <img src="/vite-react/images/assets/menu_icon.png" className="icon" id="menu" onClick={toggleMenu} />

            {/* Navigation Links */}
            <ul className={isMenuOpen ? "open" : ""}>
                <HashLink smooth to="/#home">Home</HashLink>
                <HashLink smooth to="/#about">About Us</HashLink>
                <HashLink smooth to="/#contact">Contact</HashLink>
                <HashLink to="/games#all-games">Games</HashLink>
            </ul>
            <div></div>
        </nav>
    );
};

export default Nav;
