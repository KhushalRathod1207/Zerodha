import React from 'react'

function Hero() {
  return (
    <section className="text-center py-5" style={{ maxWidth: "1100px", margin: "auto" }}>
      <div className="container">
        <h2 className="fw-semibold mb-2" style={{ fontSize: "1.8rem" }}>
          Zerodha Products
        </h2>
        <p className="text-muted fs-5 mb-2">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="mb-0">
          Check out our{"  "}
          <a href="#" className="text-primary text-decoration-none">
            investment offerings
            <i className="fas fa-arrow-right"></i>
          </a>
        </p>
        <hr className="mx-auto mt-4" style={{ maxWidth: "75%", opacity: "0.3" }} />
      </div>
    </section>
  )
}

export default Hero