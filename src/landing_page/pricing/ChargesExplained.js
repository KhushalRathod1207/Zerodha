import React from "react";

function ChargesExplained() {
  return (
    <>
      <style>{`
        .charges-section {
          padding: 60px 15px;
          background-color: #fff;
        }
        .charges-heading {
          font-size: 1.75rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2rem;
          color: #1f1f1f;
        }
        .charges-subtext {
          font-size: 0.85rem;
          color: #555;
          margin-bottom: 0.75rem;
        }
        .charges-list {
          padding-left: 1.25rem;
          font-size: 0.8rem;
          color: #555;
        }
       
      `}</style>

      <section className="charges-section container"  >
        <h4 className="charges-heading text-start" style={{ color: "#424242", textAlign: "center" }}>Charges explained</h4>
        <div className="row justify-content-center">
          {/* Column 1 */}
          <div className="col-lg-4 col-md-12 mb-4">
            <p>Securities/Commodities transaction tax</p>
            <p className="charges-subtext">
              Tax by the government when transacting on the exchanges. Charged on both buy and sell sides when trading equity delivery. Charged only on selling side for intraday or F&O.
            </p>
            <p className="charges-subtext">
              When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
            </p>

            <p>Transaction/Turnover Charges</p>
            <p className="charges-subtext">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
            <p className="charges-subtext">BSE revised transaction charges in certain groups like XC, XD, XT, Z to ₹10,000 per crore.</p>

            <p>Call & trade</p>
            <p className="charges-subtext">Additional ₹50 per order placed through a dealer at Zerodha including auto square off orders.</p>

            <p>Stamp charges</p>
            <p className="charges-subtext">Stamp charges by the Government of India as per the Indian Stamp Act of 1899.</p>

            <p>NRI brokerage charges</p>
            <ul className="charges-list">
              <li>₹100 per order for F&O.</li>
              <li>For non-PIS account: 0.5% or ₹100 per order (whichever is lower).</li>
              <li>For PIS account: 0.5% or ₹200 per order (whichever is lower).</li>
              <li>₹500 + GST yearly AMC charges.</li>
            </ul>

            <p>Account with debit balance</p>
            <p className="charges-subtext">Orders will be charged ₹40 per executed order instead of ₹20 if account is in debit balance.</p>

            <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
            <ul className="charges-list">
              <li>Equity/Futures - ₹10 per crore + GST.</li>
              <li>Options - ₹50 per crore + GST.</li>
              <li>Currency Futures - ₹0.05 per lakh + GST; Options - ₹2 per lakh + GST.</li>
            </ul>

            <p>Margin Trading Facility (MTF)</p>
            <ul className="charges-list">
              <li>Interest: 0.04% per day (₹40/lakh) on funded amount.</li>
              <li>Brokerage: 0.3% or ₹20/order, whichever lower.</li>
              <li>Pledge charge: ₹15 + GST per pledge/unpledge request per ISIN.</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-12">
            <p>GST</p>
            <p className="charges-subtext">
              18% of (brokerage + SEBI charges + transaction charges).
            </p>

            <p>SEBI Charges</p>
            <p className="charges-subtext">₹10 per crore + GST by SEBI for regulating the markets.</p>

            <p>DP (Depository participant) charges</p>
            <p className="charges-subtext">
              ₹15.34 per scrip on stock sale, irrespective of quantity.
            </p>
            <p className="charges-subtext">Female demat account holders get ₹0.25 discount per transaction on CDSL fee.</p>

            <p>Pledging charges</p>
            <p className="charges-subtext">₹30 + GST per pledge request per ISIN.</p>

            <p>AMC (Account maintenance charges)</p>
            <p className="charges-subtext">BSDA demat: Zero charges if holding value &lt; ₹4,00,000.</p>
            <p className="charges-subtext">Non-BSDA demat: ₹300/year + GST, charged quarterly.</p>

            <p>Corporate action order charges</p>
            <p className="charges-subtext">₹20 + GST for OFS / buyback / takeover / delisting orders via Console.</p>

            <p>Off-market transfer charges</p>
            <p className="charges-subtext">₹25 per transaction.</p>

            <p>Physical CMR request</p>
            <p className="charges-subtext">First request free; subsequent ₹20 + ₹100 courier + GST.</p>

            <p>Payment gateway charges</p>
            <p className="charges-subtext">₹9 + GST (UPI transfers free).</p>

            <p>Delayed Payment Charges</p>
            <p className="charges-subtext">Interest at 18% p.a. or 0.05% per day on debit balance.</p>

            <p>Trading using 3-in-1 account with block functionality</p>
            <ul className="charges-list">
              <li><b>Delivery & MTF:</b> 0.5% per order.</li>
              <li><b>Intraday:</b> 0.05% per order.</li>
            </ul>
          </div>
        </div>


      </section>
    </>
  );
}

export default ChargesExplained;
