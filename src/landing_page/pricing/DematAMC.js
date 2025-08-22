import React from 'react'

function DematAMC() {
  return (
    <div className="container py-5" style={{ maxWidth: "1100px", margin: "auto" }}>

      {/* Demat AMC */}
      <h5 className="mt-5 mb-3">Demat AMC (Annual Maintenance Charge)</h5>
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Value of holdings</th>
            <th>AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to ₹4 lakh</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>₹4 lakh – ₹10 lakh</td>
            <td>₹ 100 per year, charged quarterly*</td>
          </tr>
          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹ 300 per year, charged quarterly</td>
          </tr>
        </tbody>
      </table>
      <small className="text-muted">
        * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. <a href="#">click here</a>.
      </small>
    </div>

  )
}

export default DematAMC