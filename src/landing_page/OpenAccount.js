import React from "react";
import "../index.css"; // external CSS for styling

function OpenAccount() {
    return (
        <section className="open-account-section text-center bg-white">
            <div className="container py-2">
                <h2 className="open-account-title mb-3">
                    Open a Zerodha account
                </h2>
                <p className="open-account-text mb-4">
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <a href="#open-account" className="open-account-btn btn-primary btn btn-lg px-4 py-2">
                    <a href="/signup" style={{ textAlign: "center", textDecoration: "None", color: "white" }}>Sign up now</a>
                </a>
            </div>
        </section>
    );
}

export default OpenAccount;
