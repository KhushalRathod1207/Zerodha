import React from "react";
import "./Home.css";

function TrustSection() {
  const sectionData = [
    {
      title: "Customer-first always",
      text: `That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments,
             making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.`,
    },
    {
      title: "No spam or gimmicks",
      text: `No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use
             at your pace, the way you like.`,
      link: { href: "/about", label: "Our philosophies →" },
    },
    {
      title: "The Zerodha universe",
      text: `Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored
             services specific to your needs.`,
    },
    {
      title: "Do better with money",
      text: (
        <>
          With initiatives like{" "}
          <a
            href="#"
            rel="noopener noreferrer"
            className="zerodha-link"
          >
            Nudge
          </a>{" "}
          and{" "}
          <a
            href="#"
            rel="noopener noreferrer"
            className="zerodha-link"
          >
            Kill Switch
          </a>
          , we don't just facilitate transactions, but actively help you do
          better with your money.
        </>
      ),
    },
  ];

  return (
    <section className="trust-section container py-5 mt-5" style={{ maxWidth: "1100px", margin: "auto" }}>
      {/* Heading */}
      <h2 className="trust-title mb-5">Trust with confidence</h2>

      <div className="row g-5 align-items-center">
        {/* Left Column (text content) */}
        <div className="col-12 col-md-6">
          {sectionData.map((item, idx) => (
            <div key={idx} className="mb-5">
              <h3 className="trust-subtitle">{item.title}</h3>
              <p className="trust-text">
                {item.text}{" "}
                {item.link && (
                  <a href={item.link.href} className="zerodha-link">
                    {item.link.label}
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column (image + links) */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <img
            src="media/images/TrustWithConfidence.png"
            alt="Trust Section"
            className="img-fluid mb-4 trust-img"
          />
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start" style={{ textAlign: "center", display: "block !important" }}>
            <a href="/products" className="zerodha-link">
              Explore our products →
            </a>
            <a
              href="/support"
              target="_self"
              rel="noopener noreferrer"
              className="zerodha-link"
            >
              Try Kite demo →
            </a>
          </div>
        </div>
      </div>

      {/* Press Logos */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid press-logos"
          />
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
