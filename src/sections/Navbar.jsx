import React from 'react'
import {navLinks} from "../constants/index.js";
import { Link } from 'react-scroll';

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <Link to={name === 'Home' ? 'home' : href} smooth={true} duration={500} className="nav-li_a cursor-pointer">
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleMenu = function () {
        setIsOpen((prev) => !prev)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        - Your Name -
                    </a>

                    <button onClick={toggleMenu}
                            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                            aria-label="Toggle menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                             alt="toggle"
                             className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems/>
                    </nav>
                </div>
                <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <nav className="p-5">
                        <NavItems/>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Navbar
