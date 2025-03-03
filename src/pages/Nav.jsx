import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
    return (
        <nav>
            <HashLink smooth to="/#home">Home</HashLink>
            <HashLink smooth to="/#about">About Us</HashLink>
            <HashLink smooth to="/#contact">Contact</HashLink>
            <Link to="/games">Games</Link>
        </nav>
    )
};

export default Nav;