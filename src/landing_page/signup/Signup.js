import React from "react";
import "./Signup.css"; // custom Zerodha-like styles

export default function Signup() {
    return (
        <div className="container my-5 py-5 signup-container">
            {/* Heading */}
            <h5 className="fw-bold text-center mb-3 signup-heading">
                Open a free demat and trading account online
            </h5>
            <p className="text-secondary text-center lead signup-subtitle mb-5">
                Start investing brokerage free and join a community of 1.6+ crore investors and traders
            </p>

            <div className="row align-items-center">
                {/* Left Visual */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="https://zerodha.com/static/images/landing.png"
                        alt="Zerodha account open"
                        className="img-fluid signup-visual"
                    />
                </div>

                {/* Right Signup Form */}
                <div className="col-12 col-md-6">
                    <h5 className="fw-bold mb-1">Signup now</h5>
                    <small className="text-secondary d-block mb-3">
                        Or track your existing application
                    </small>

                    <div className="input-group mb-3 shadow-sm">
                        <span className="input-group-text bg-light fw-bold country-code">
                            🇮🇳 +91
                        </span>
                        <input
                            type="tel"
                            className="form-control mobile-input"
                            placeholder="Enter your mobile number"
                        />
                    </div>

                    <button className="btn btn-primary w-100 fw-bold get-otp-btn">
                        Get OTP
                    </button>

                    <p className="mt-3 small text-secondary signup-terms">
                        By proceeding, you agree to the{" "}
                        <a href="#" target="_blank" rel="noreferrer">
                            terms
                        </a>{" "}
                        &{" "}
                        <a href="#" target="_blank" rel="noreferrer">
                            privacy policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
