import React from 'react'

function People() {
    return (

        <div className="container py-5" style={{ width: "900px", margin: "auto", maxWidth: "100%", boxSizing: "border-box" }}>
            {/* Section Title */}
            <h4 className="text-center mb-5" style={{ color: "#424242" }}>People</h4>

            <div className="row align-items-center">
                {/* Left Column - Image */}
                <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
                    <img
                        className="img-fluid rounded-circle founder-image shadow"
                        src="media/images/nithinKamath.jpg"
                        alt="Nithin Kamath, CEO"
                        width={"250px"}
                    />
                    <h5 className="mt-3 fw-bold">Nithin Kamath</h5>
                    <p className="text-muted">Founder, CEO</p>
                </div>

                {/* Right Column - Text */}
                <div className="col-12 col-md-7">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade-long stint as a trader.
                        Today, Zerodha has changed the landscape of the Indian broking
                        industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
                        and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on{" "}
                        <a href="#" target="_blank" rel="noreferrer" title="Homepage">Homepage</a> /{" "}
                        <a href="#" target="_blank" rel="noreferrer" title="TradingQnA">TradingQnA</a> /{" "}
                        <a href="#" target="_blank" rel="noreferrer" title="Twitter">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default People