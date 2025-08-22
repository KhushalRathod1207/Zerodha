import React from "react";
import "./Home.css";

function EducationSection() {
    return (
        <section className="education-section container py-2" style={{ maxWidth: "1100px", margin: "auto" }}>
            <div className="row align-items-center">
                {/* Left Image */}
                <div className="col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="media/images/V.svg"
                        alt="Varsity"
                        className="img-fluid education-img"
                    />
                </div>

                {/* Right Content */}
                <div className="col-md-6">
                    <h3 className="education-title mb-3">
                        Free and open market education
                    </h3>

                    <p className="education-text mb-3">
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="/about" className="zerodha-link">
                        Varsity →
                    </a>

                    <p className="education-text mt-4 mb-2">
                        TradingQ&A, the most active trading and investment community in
                        India for all your market related queries.
                    </p>
                    <a href="/support" className="zerodha-link">
                        TradingQ&A →
                    </a>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;
