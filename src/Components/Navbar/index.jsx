
import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
// for going back ho homepage after clicking on favicon
import { Link } from "react-router-dom";
import './style.scss';
const data = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "About",
        to: "/about",
    },
    {
        label: "case study",
        to: "/resume",
    },
    {
        label: "Contact",
        to: "/contact",
    },

]

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }
    return (

        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to={"/"} className="navbar_container_logo">
                        <FaReact size={60} />
                    </Link>
                    <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                        {
                            data && Array.isArray(data) && data.map((item, key) => (
                                <li key={key} className="navbar_container_menu_item">
                                    <Link className="navbar_container_menu_item_links" to={item.to}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))

                        }
                    </ul>
                    <div className="nav-icon" onClick={handleToggleIcon}>
                        {toggleIcon ? <HiX size={50} /> : <FaBars size={50} />}
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
