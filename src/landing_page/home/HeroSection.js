import React from "react";
import "./Home.css"

function HeroSection() {
    return (
        <section className="hero-section bg-white py-5" style={{ maxWidth: "1100px", margin: "auto" }}>
            <div className="container text-center">
                {/* Hero Image */}
                <div className="mb-4">
                    <img
                        href="/"
                        src="media/images/homeHero.png"
                        alt="Hero"
                        className="img-fluid hero-img"
                    />
                </div>

                {/* Hero Text */}
                <h1 className="hero-title mb-3">
                    Invest in everything
                </h1>

                <p className="hero-subtitle mb-4">
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs,
                    bonds, and more.
                </p>

                <button className="btn hero-btn px-5 py-2"  >
                    <a href="/signup" target="_self" style={{ textDecoration: "None", color: "white" }}> Sign up for free</a>
                </button>
            </div>
        </section>
    );
}

export default HeroSection;
