import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the hamburger menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu after clicking a link
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white py-3 border-bottom sticky-top">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
                    <img
                        src="media/images/logo.svg"
                        alt="Zerodha Logo"
                        height="20"
                        className="me-2"
                    />
                </Link>

                {/* Toggle button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" onClick={closeMenu}>
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products" onClick={closeMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing" onClick={closeMenu}>
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support" onClick={closeMenu}>
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
