import React from 'react'

function Varsity() {
    return (
        <section className="Varsity-section container py-5">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-7 text-center mb-4 mb-lg-0">
                    <img src="media/images/Varsity.png" alt="Varsity Platform" className="img-fluid" style={{ maxWidth: "100%" }} />
                </div>

                <div className="col-lg-5">
                    <h2 className="fw-normal">Varsity mobile</h2>
                    <p className="lead text-muted">
                        An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.
                    </p>

                    <div className="d-flex gap-3">
                        <a href="#">
                            <img src="media/images/google-play-badge.svg" alt="Google Play" height="40" />
                        </a>
                        <a href="#">
                            <img src="media/images/appstore-badge.svg" alt="App Store" height="40" />
                        </a>
                    </div>
                </div>
            </div>

            <h5 class="landing-subheading text-center  py-5">Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/">Zerodha.tech</a> blog.</h5>
        </section>
    )
}

export default Varsity

