import React from 'react'

function Kite() {
  return (
    <section className="kite-section container py-5" style={{ maxWidth: "1100px", margin: "auto" }}>
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-7 text-center mb-4 mb-lg-0">
          <img src="media/images/kite.png" alt="Kite Platform" className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>

        <div className="col-lg-5">
          <h2 className="fw-normal">Kite</h2>
          <p className="lead text-muted">
            Our ultra-fast flagship trading platform with streaming market data,
            advanced charts, an elegant UI, and more. Enjoy the Kite experience
            seamlessly on your Android and iOS devices.
          </p>

          <div className="mb-4">
            <a href="#" className="text-primary me-4 text-decoration-none">
              Try demo <i className="fas fa-arrow-right ms-1"></i>
            </a>
            <a href="#" className="text-primary text-decoration-none">
              Learn more <i className="fas fa-arrow-right ms-1"></i>
            </a>
          </div>

          <div className="d-flex gap-3">
            <a href="#">
              <img src="media/images/google-play-badge.svg" alt="Google Play" height="40" />
            </a>
            <a href="#">
              <img src="media/images/appstore-badge.svg" alt="App Store" height="40" />
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Kite

