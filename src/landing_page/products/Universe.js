import React from 'react';

function Universe() {
  return (
    <section className="container text-center py-5" style={{ maxWidth: "1100px", margin: "auto" }}>

      {/* Heading */}
      <h2 className="fw-normal mb-2">The Zerodha Universe</h2>
      <p className="text-muted mb-5">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      {/* Partner Logos */}
      <div className="row gy-5">

        {/* Zerodha Fund House */}
        <div className="col-6 col-md-4">
          <img src="media/images/zerodhafundhouse.png" alt="Zerodha Fund House" height="40" className="mb-3" />
          <p className="text-muted small" style={{ lineHeight: '1.5rem' }}>
            Our asset management venture is creating simple and transparent index funds
            to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-6 col-md-4">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" height="40" className="mb-3" />
          <p className="text-muted small" style={{ lineHeight: '1.5rem' }}>
            Options trading platform that lets you create strategies, analyze positions,
            and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

        {/* Tijori */}
        <div className="col-6 col-md-4">
          <img src="media/images/tijori.svg" alt="Tijori" height="40" className="mb-3" />
          <p className="text-muted small" style={{ lineHeight: '1.5rem' }}>
            Investment research platform that offers detailed insights on stocks, sectors,
            supply chains, and more.
          </p>
        </div>

        {/* Streak */}
        <div className="col-6 col-md-4">
          <img src="media/images/streakLogo.png" alt="Streak" height="40" className="mb-3" />
          <p className="text-muted small" style={{ lineHeight: '1.5rem' }}>
            Systematic trading platform that allows you to create and backtest strategies
            without coding.
          </p>
        </div>

        {/* Smallcase */}
        <div className="col-6 col-md-4">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" height="40" className="mb-3" />
          <p className="text-muted small" style={{ lineHeight: '1.5rem' }}>
            Thematic investing platform that helps you invest in diversified baskets
            of stocks or ETFs.
          </p>
        </div>

        {/* Ditto */}
        <div className="col-6 col-md-4">
          <img src="media/images/dittoLogo.png" alt="Ditto" height="40" className="mb-3" />
          <p className="text-muted small" style={{ lineHeight: '1.5rem' }}>
            Personalized advice on life and health insurance. No spam and no mis-selling.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="mt-5">
        <a href="#"
          className="btn btn-primary px-4 py-2"
          style={{ fontSize: '1rem', borderRadius: '4px' }}>
          Sign up for free
        </a>
      </div>
    </section>
  );
}

export default Universe;
