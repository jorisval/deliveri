import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../utils/context";

function NavLg() {
    const {activePage} = useContext(HeaderContext);
    return (
        <div className="nav-lg">
            <nav>
                <ul className="">
                    <li className={ activePage === "home" ? "active" : "" }><Link to="/">Home</Link></li>
                    <li className=""><Link to="/">Our Service</Link></li>
                    <li className=""><Link to="/">Pricing</Link></li>
                    <li className={ activePage === "contact" ? "active" : "" }><Link to="/contact">Contact</Link></li>
                    <li className={ activePage === "blog" ? "active" : "" }><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavLg;