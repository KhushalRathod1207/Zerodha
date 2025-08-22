import React from "react";
import "./Signup.css"; // custom Zerodha-like styles


export default function AccountTypes() {
    const accounts = [
        {
            icon: "fa-user",
            title: "Individual Account",
            text: "Invest in equity, mutual funds and derivatives",
            link: "#",
        },
        {
            icon: "fa-users",
            title: "HUF Account",
            text: "Make tax-efficient investments for your family",
            link: "#",
        },
        {
            icon: "fa-globe",
            title: "NRI Account",
            text: "Invest in equity, mutual funds, debentures, and more",
            link: "#",
        },
        {
            icon: "fa-child",
            title: "Minor Account",
            text: "Teach your little ones about money & invest for their future",
            link: "#",
        },
        {
            icon: "fa-building",
            title: "Corporate / LLP / Partnership",
            text: "Manage your business surplus and investments easily",
            link: "#",
        },
    ];

    return (
        <section className="py-5 bg-white" >
            <div className="container" style={{ maxWidth: "1100px", margin: "auto" }}>
                {/* Heading */}
                <h2
                    className="text-center mb-5 fw-semibold"
                    style={{ fontSize: "1.8rem", color: "#1c1c1c" }}
                >
                    Explore different account types
                </h2>

                {/* Cards */}
                <div className="row g-4 justify-content-center">
                    {accounts.map((acc, idx) => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
                            <a
                                href={acc.link}
                                className="card h-100 border-0 text-center text-decoration-none"
                                style={{
                                    borderRadius: "12px",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <div className="card-body d-flex flex-column align-items-center p-4">
                                    {/* Icon */}
                                    <div
                                        className="mb-3 d-flex align-items-center justify-content-center"
                                        style={{
                                            width: "64px",
                                            height: "64px",
                                            borderRadius: "50%",
                                            background: "#f2f6ff",
                                        }}
                                    >
                                        <i className={`fas ${acc.icon} fa-lg text-primary`}></i>
                                    </div>

                                    {/* Title */}
                                    <h6 className="fw-semibold text-dark mb-2">{acc.title}</h6>

                                    {/* Text */}
                                    <p className="text-muted small">{acc.text}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
