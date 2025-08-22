import React from "react";

export default function Investment() {
  const options = [
    {
      img: "media/images/s1.svg",
      title: "Stocks",
      desc: "Invest in all exchange-listed securities",
    },
    {
      img: "media/images/s2.svg",
      title: "Mutual funds",
      desc: "Invest in commission-free direct mutual funds",
    },
    {
      img: "media/images/s3.svg",
      title: "IPO",
      desc: "Apply to the latest IPOs instantly via UPI",
    },
    {
      img: "media/images/Sin4.svg",
      title: "Futures & options",
      desc: "Hedge and mitigate market risk through simplified F&O trading",
    },
  ];

  return (
    <section className="py-5 bg-white" style={{ maxWidth: "1100px", margin: "auto" }}>
      <div className="container text-center">
        {/* Heading */}
        <h3 className="fw-semibold mb-5" style={{ fontSize: "1.7rem" }}>
          Investment options with Zerodha demat account
        </h3>

        {/* Grid */}
        <div className="row g-4 justify-content-center">
          {options.map((item, idx) => (
            <div
              key={idx}
              className="col-md-6 col-lg-5 d-flex align-items-start mx-auto"
            >
              <img
                src={item.img}
                alt={item.title}
                className="me-3"
                style={{ width: "48px", height: "48px" }}
              />
              <div className="text-start">
                <h6 className="fw-semibold text-dark mb-1">{item.title}</h6>
                <p className="text-secondary mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5">
          <button
            className="btn btn-primary px-4 py-2 px-2"
            style={{
              backgroundColor: "#387ed1",
              borderColor: "#387ed1",
              fontWeight: 500,
            }}
          >
            Explore investments
          </button>
        </div>
      </div>
    </section>
  );
}
