import React from "react";

function Charges() {
  const pricingData = [
    {
      img: "media/images/pricing0.svg",
      title: "Free equity delivery",
      desc: "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.",
    },
    {
      img: "media/images/intradayTrades.svg",
      title: "Intraday and F&O trades",
      desc: "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity. Flat ₹20 on all option trades.",
    },
    {
      img: "media/images/pricingEquity.svg",
      title: "Free direct MF",
      desc: "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.",
    },
  ];

  return (
    <div className="container text-center py-5" style={{ maxWidth: "1100px", margin: "auto" }}>
      <h5 className="fw-semibold" style={{ color: "#424242" }}>
        Charges
      </h5>
      <p className="text-muted">List of all charges and taxes</p>

      <div className="row mt-5">
        {pricingData.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div>
              <img
                src={item.img}
                alt={item.title}
                style={{ height: "80px", marginBottom: "15px" }}
              />
              <h6 className="fw-semibold" style={{ color: "#424242" }}>
                {item.title}
              </h6>
              <p
                className="text-muted"
                style={{ fontSize: "0.9rem", maxWidth: "300px", margin: "0 auto" }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Charges;
