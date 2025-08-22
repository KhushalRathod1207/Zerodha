import React from "react";
import "./Home.css";

function PricingSection() {
    return (
        <section className="pricing-section container py-5" style={{ maxWidth: "1100px", margin: "auto" }}>
            <div className="row align-items-center">
                {/* Left Side Text */}
                <div className="col-md-5 mb-4 mb-md-0">
                    <h3 className="pricing-title">Unbeatable pricing</h3>
                    <p className="pricing-text">
                        We pioneered the concept of discount broking and price transparency
                        in India. Flat fees and no hidden charges.
                    </p>
                    <a href="/pricing" className="zerodha-link">
                        See pricing →
                    </a>
                </div>

                {/* Right Side Pricing Icons */}
                <div className="col-md-7">
                    <div className="d-flex justify-content-between flex-wrap">
                        {/* Free account opening */}
                        <div className="d-flex align-items-center mb-4 pricing-item">
                            <img
                                src="media/images/pricing0.svg"
                                alt="Free account opening"
                                className="pricing-icon"
                            />
                            <p className="mb-0 pricing-label">
                                Free account <br /> opening
                            </p>
                        </div>

                        {/* Free equity delivery */}
                        <div className="d-flex align-items-center mb-4 pricing-item">
                            <img
                                src="media/images/pricing0.svg"
                                alt="Free equity delivery"
                                className="pricing-icon"
                            />
                            <p className="mb-0 pricing-label">
                                Free equity delivery <br /> and direct mutual funds
                            </p>
                        </div>

                        {/* Intraday and F&O */}
                        <div className="d-flex align-items-center mb-4 pricing-item">
                            <img
                                src="media/images/intradayTrades.svg"
                                alt="Intraday and F&O"
                                className="pricing-icon"
                            />
                            <p className="mb-0 pricing-label">
                                Intraday and <br /> F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;
