import React from 'react'

function Coin() {
  return (
    <section className="Coin-section container py-5" style={{ maxWidth: "1100px", margin: "auto" }}>
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-7 text-center mb-4 mb-lg-0">
          <img src="media/images/Coin.png" alt="Coin Platform" className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>

        <div className="col-lg-5">
          <h2 className="fw-normal">Coin</h2>
          <p className="lead text-muted">
            Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.
          </p>

          <div className="mb-4">
            <a href="#" className="text-primary me-4 text-decoration-none">
              Coin <i className="fas fa-arrow-right ms-1"></i>
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
  )
}

export default Coin