import React from "react";
import "./Footer.css"; // custom CSS

function Footer() {
    return (
        <footer className="footer-section" style={{ margin: "auto" }}>
            <div className="container py-5">
                <div className="row">
                    {/* Logo + Social */}
                    <div className="col-md-3 mb-4">
                        <img
                            src="https://zerodha.com/static/images/logo.svg"
                            alt="Zerodha"
                            className="footer-logo mb-3"
                        />
                        <p className="footer-text">© 2010 - 2025, Zerodha Broking Ltd.</p>
                        <p className="footer-text">All rights reserved.</p>

                        <div className="social-icons">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-telegram"></i>
                        </div>
                    </div>

                    {/* Account */}
                    <div className="col-md-2 mb-4">
                        <h6 className="footer-heading">Account</h6>
                        <ul className="footer-links">
                            <li><a href="#">Open demat account</a></li>
                            <li><a href="#">Minor demat account</a></li>
                            <li><a href="#">NRI demat account</a></li>
                            <li><a href="#">Commodity</a></li>
                            <li><a href="#">Dematerialisation</a></li>
                            <li><a href="#">Fund transfer</a></li>
                            <li><a href="#">MTF</a></li>
                            <li><a href="#">Referral program</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-md-2 mb-4">
                        <h6 className="footer-heading">Support</h6>
                        <ul className="footer-links">
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Support portal</a></li>
                            <li><a href="#">How to file a complaint?</a></li>
                            <li><a href="#">Status of your complaints</a></li>
                            <li><a href="#">Bulletin</a></li>
                            <li><a href="#">Circular</a></li>
                            <li><a href="#">Z-Connect blog</a></li>
                            <li><a href="#">Downloads</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-md-2 mb-4">
                        <h6 className="footer-heading">Company</h6>
                        <ul className="footer-links">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Philosophy</a></li>
                            <li><a href="#">Press & media</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Zerodha Cares (CSR)</a></li>
                            <li><a href="#">Zerodha.tech</a></li>
                            <li><a href="#">Open source</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 mb-4">
                        <h6 className="footer-heading">Quick links</h6>
                        <ul className="footer-links">
                            <li><a href="#">Upcoming IPOs</a></li>
                            <li><a href="#">Brokerage charges</a></li>
                            <li><a href="#">Market holidays</a></li>
                            <li><a href="#">Economic calendar</a></li>
                            <li><a href="#">Calculators</a></li>
                            <li><a href="#">Markets</a></li>
                            <li><a href="#">Sectors</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
