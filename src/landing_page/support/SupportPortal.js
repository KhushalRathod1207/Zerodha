import React, { useState } from "react";

function SupportPortal() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqData = [
    {
      icon: "fa-user-plus",
      title: "Account Opening",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      icon: "fa-user-circle",
      title: "Your Zerodha Account",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      icon: "fa-chart-line",
      title: "Kite",
      links: [
        "Login issues",
        "Marketwatch setup",
        "Order types",
        "Charts",
        "Mobile app guide",
      ],
    },
    {
      icon: "fa-rupee-sign",
      title: "Funds",
      links: [
        "Adding funds",
        "Withdrawing funds",
        "Fund transfer charges",
        "UPI & netbanking",
        "Settlement cycle",
      ],
    },
    {
      icon: "fa-desktop",
      title: "Console",
      links: [
        "Reports",
        "Tax P&L statements",
        "Ledger",
        "Portfolio tracking",
        "Corporate actions",
      ],
    },
    {
      icon: "fa-coins",
      title: "Coin",
      links: [
        "Mutual fund investing",
        "SIP setup",
        "Redeeming funds",
        "Switching funds",
        "Tax saving ELSS",
      ],
    },
  ];

  return (
    <div className="container py-4" style={{ maxWidth: "1100px", margin: "auto" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-semibold">Support Portal</h3>
        <button className="btn btn-primary btn-sm">My tickets</button>
      </div>

      {/* Search */}
      <div className="mb-5 position-relative">
        <i
          className="fas fa-search position-absolute text-muted"
          style={{ top: "50%", left: "15px", transform: "translateY(-50%)" }}
        ></i>
        <input
          type="text"
          className="form-control form-control-lg ps-5 shadow-sm"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          style={{ borderRadius: "8px" }}
        />
      </div>

      <div className="row">
        {/* Left Column */}
        <div className="col-md-8 mb-4">
          {faqData.map((item, index) => (
            <div
              className="border mb-3 bg-white"
              style={{ borderRadius: "6px", overflow: "hidden" }}
              key={index}
            >
              {/* Accordion Header */}
              <div
                className="d-flex align-items-center p-3"
                style={{ cursor: "pointer" }}
                onClick={() => toggleItem(index)}
              >
                <i className={`fas ${item.icon} text-primary me-3`}></i>
                <strong className="flex-grow-1">{item.title}</strong>
                <i
                  className={`fas fa-chevron-${openItems.includes(index) ? "up" : "down"
                    } text-secondary`}
                ></i>
              </div>

              {/* Accordion Body */}
              {openItems.includes(index) && (
                <div className="p-3 bg-light border-top">
                  <ul className="mb-0 ps-3" style={{ color: "#0056b3" }}>
                    {item.links.map((link, i) => (
                      <li key={i} className="mb-2">
                        <a
                          href="#"
                          className="text-decoration-none text-primary"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="col-md-4">
          {/* Announcements */}
          <div
            className="p-3 mb-3"
            style={{
              backgroundColor: "#fff4e5",
              border: "1px solid #ffe0b2",
              borderRadius: "6px",
              fontSize: "14px",
            }}
          >
            <p className="fw-semibold mb-2 text-dark">Announcements</p>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="text-decoration-none text-dark small">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
              <a href="#" className="text-decoration-none text-dark small">
                Revision in expiry day of Index and Stock derivatives contracts
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border rounded">
            <div className="bg-light p-2 fw-semibold">Quick links</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                1. <a href="#">Track account opening</a>
              </li>
              <li className="list-group-item">
                2. <a href="#">Track segment activation</a>
              </li>
              <li className="list-group-item">
                3. <a href="#">Intraday margins</a>
              </li>
              <li className="list-group-item">
                4. <a href="#">Kite user manual</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPortal;
