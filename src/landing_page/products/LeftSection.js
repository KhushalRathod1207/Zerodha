import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlayURL, appStoreURL }) {
    return (
        <section className="container py-5" style={{ maxWidth: "1100px", margin: "auto" }}>
            <div className="row align-items-center justify-content-between">

                {/* Left - Image */}
                <div className="col-lg-7 text-center mb-4 mb-lg-0">
                    <img
                        src={imageURL}
                        alt={productName}
                        className="img-fluid"
                        style={{ maxWidth: "100%", objectFit: "contain" }}
                    />
                </div>

                {/* Right - Text */}
                <div className="col-lg-5">
                    <h2 className="fw-normal mb-3">{productName}</h2>
                    <p className="lead text-muted mb-4">{productDescription}</p>

                    <div className="mb-4">
                        {tryDemo && (
                            <a href={tryDemo} className="text-primary me-4 text-decoration-none">
                                Try demo <i className="fas fa-arrow-right ms-1"></i>
                            </a>
                        )}
                        {learnMore && (
                            <a href={learnMore} className="text-primary text-decoration-none">
                                Learn more <i className="fas fa-arrow-right ms-1"></i>
                            </a>
                        )}
                    </div>

                    {/* Store Badges */}
                    <div className="d-flex gap-3">
                        {googlePlayURL && (
                            <a href={googlePlayURL}>
                                <img src="media/images/google-play-badge.svg" alt="Google Play" height="40" />
                            </a>
                        )}
                        {appStoreURL && (
                            <a href={appStoreURL}>
                                <img src="media/images/appstore-badge.svg" alt="App Store" height="40" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeftSection;
