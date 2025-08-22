import React from 'react'

function ChargesOptionalValue() {
  return (
    <div className="container py-5" style={{ maxWidth: "1100px", margin: "auto" }}>

      {/* Optional Value Added Services */}
      <h5 className="mt-5 mb-3">Charges for optional value added services</h5>
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TickerTape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy &amp; Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Historical: 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ChargesOptionalValue