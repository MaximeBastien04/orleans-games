import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
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

    return (
        <nav>
            <ul>
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
