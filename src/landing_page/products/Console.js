import React from 'react';

function Console() {
  return (
    <section className="Console-section container py-5" style={{ maxWidth: "1100px", margin: "auto" }}>
      <div className="row align-items-center justify-content-between">

        {/* Left Side Text */}
        <div className="col-lg-5">
          <h2 className="fw-normal mb-3">Console</h2>
          <p className="lead text-muted mb-4">
            The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
          </p>

          <div className="mb-4">
            <a href="#" className="text-primary text-decoration-none">
              Learn more <i className="fas fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-lg-7 text-center">
          <img
            src="media/images/console.png"
            alt="Console Platform"
            className="img-fluid"
            style={{ maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Console;
