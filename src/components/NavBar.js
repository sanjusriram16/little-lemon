import { Link } from "react-router-dom";
import './NavBar.css';
import logo from '../images/logo.svg';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link to="/"><img src={logo} alt="logo of little lemon restaurant" width={150}/></Link>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/booking">Reserve</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    );
}

export default NavBar;