import React, { useState } from "react";

export default function ChargesTab() {
  const [activeTab, setActiveTab] = useState("Equity");

  const data = {
    Equity: {
      headers: [
        "Equity Delivery",
        "Equity Intraday",
        "Equity F&O (Futures)",
        "Equity F&O (Options)",
      ],
      rows: [
        ["₹0", "₹20 or 0.03% (lower)", "₹20 or 0.03%", "Flat ₹20"],
        ["0.1% buy & sell", "0.025% on sell", "0.02% on sell", "0.1% premium (sell)"],
        [
          "NSE: 0.00297%, BSE: 0.00375%",
          "NSE: 0.00297%, BSE: 0.00375%",
          "NSE: 0.00173%, BSE: 0%",
          "NSE: 0.03503% (premium)",
        ],
        ["18% GST on turnover", "18% GST on turnover", "18% GST on turnover", "18% GST on turnover"],
        ["₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
        ["0.015% buy", "0.003% buy", "0.002% buy", "0.003% buy"],
      ],
    },
    Currency: {
      headers: ["Currency Futures", "Currency Options"],
      rows: [
        ["₹20 or 0.03%", "₹20 or 0.03%"],
        ["—", "—"],
        ["NSE: 0.0009%", "NSE: 0.03503% (premium)"],
        ["18% GST on turnover", "18% GST on turnover"],
        ["₹10 / crore", "₹10 / crore"],
        ["0.0001% buy", "0.0001% buy"],
      ],
    },
    Commodity: {
      headers: ["Commodity Futures", "Commodity Options"],
      rows: [
        ["₹20 or 0.03%", "₹20 or 0.03%"],
        ["CTT: 0.01% sell", "CTT: 0.05% sell"],
        ["Non-agri: 0.0036%, Agri: 0.00275%", "0.002% both sides"],
        ["18% GST on turnover", "18% GST on turnover"],
        ["₹10 / crore", "₹10 / crore"],
        ["0.01% buy", "0.01% buy"],
      ],
    },
  };

  return (
    <div className="container py-5" style={{ maxWidth: "1100px", margin: "auto" }}>
      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center">
        {Object.keys(data).map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Table */}
      <div className="table-responsive mt-3">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-light">
            <tr>
              {data[activeTab].headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data[activeTab].rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Extra link for Equity tab */}
      {activeTab === "Equity" && (
        <div className="text-center mt-3">
          <a href="#" style={{ color: "#387ed1", fontWeight: "500" }}>
            Calculate your costs upfront using our brokerage calculator →
          </a>
        </div>
      )}
    </div>
  );
}
