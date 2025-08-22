import React from 'react'

function ChargesAccountOpening() {
  return (
    <div className="container py-5" style={{ maxWidth: "1100px", margin: "auto" }}>

      {/* Charges for Account Opening */}
      <h5 className="mb-3">Charges for account opening</h5>
      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ChargesAccountOpening


