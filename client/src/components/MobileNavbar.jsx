import { Link } from "react-router-dom"; 
import { navLinks } from "../constants/nav";
import chevronRight from "../assets/mobileNavbar/chevron-right.svg"; 
import "../styles/MobileNavbar.css"; 

export const MobileNavbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <nav className={"mobile__navbar " + (menuOpen && "active")}>
            <div className="mobile__menu">
                <ul>
                    {navLinks.map((link)=> (
                        <li key={link.id} onClick={()=> setMenuOpen(!menuOpen)}>
                            <Link to={`${link.path}`}>{link.text}</Link>
                            <img src={chevronRight} alt="chevron right arrow" /> 
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
