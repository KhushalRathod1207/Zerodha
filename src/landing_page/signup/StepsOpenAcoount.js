import React from "react";
import "./Signup.css"; // custom Zerodha-like styles

export default function StepsOpenAccount() {
    return (
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
            {/* Main Header */}
            <section className="py-5 bg-white text-center">
                <div className="container">
                    <h2 className="fw-semibold" style={{ fontSize: "1.8rem", color: "#424242" }}>
                        Steps to open a demat account with Zerodha
                    </h2>
                </div>
            </section>

            {/* Steps to open a demat account */}
            <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Illustration */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="media/images/steps-acop.svg"
                                alt="Steps illustration"
                                className="img-fluid"
                            />
                        </div>

                        {/* Steps */}
                        <div className="col-md-6 text-start">
                            {[
                                "Enter the requested details",
                                "Complete e-sign & verification",
                                "Start investing!",
                            ].map((step, idx) => (
                                <div
                                    className={`mb-${idx < 2 ? "4" : "0"} d-flex align-items-start`}
                                    key={idx}
                                >
                                    <span
                                        className="fw-bold text-primary d-inline-flex align-items-center justify-content-center rounded-circle me-3"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            background: "#e8f0fc",
                                        }}
                                    >
                                        {`0${idx + 1}`}
                                    </span>
                                    <p className="mb-0">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits section */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Illustration */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="media/images/acop-benefits.jpg"
                                alt="Benefits illustration"
                                className="img-fluid"
                            />
                        </div>

                        {/* Benefits text */}
                        <div className="col-md-6 text-start">
                            <h5 className="fw-semibold mb-4">
                                Benefits of opening a Zerodha demat account
                            </h5>

                            <div className="mb-4">
                                <h6 className="fw-semibold">Unbeatable pricing</h6>
                                <p className="text-muted small mb-0">
                                    Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday
                                    and F&O trades.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h6 className="fw-semibold">Best investing experience</h6>
                                <p className="text-muted small mb-0">
                                    Simple and intuitive trading platform with an easy-to-understand user interface.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h6 className="fw-semibold">No spam or gimmicks</h6>
                                <p className="text-muted small mb-0">
                                    Committed to transparency — no gimmicks, spam, "gamification", or intrusive push
                                    notifications.
                                </p>
                            </div>

                            <div>
                                <h6 className="fw-semibold">The Zerodha universe</h6>
                                <p className="text-muted small mb-0">
                                    More than just an app — gain free access to the entire ecosystem of our partner
                                    products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
