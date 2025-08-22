import React from 'react'

function KiteConnectAPI() {
  return (
    <section className="Kite-section container py-5 " style={{ maxWidth: "1100px", margin: "auto" }}>
      <div className="row align-items-center justify-content-between">

        {/* Left Side Text */}
        <div className="col-lg-5">
          <h2 className="fw-normal mb-3">Kite Connect API</h2>
          <p className="lead text-muted mb-4">
            Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
          </p>

          <div className="mb-4">
            <a href="#" className="text-primary text-decoration-none">
              Kite Connect  <i className="fas fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="col-lg-7 text-center">
          <img
            src="media/images/KiteConnectAPI.svg"
            alt="Kite Platform"
            className="img-fluid"
            style={{ maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  )
}

export default KiteConnectAPI