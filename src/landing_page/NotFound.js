import React from 'react'

function NotFound() {
    return (
        <section className="py-5 text-center bg-white">
            <div className="container py-5">
                <h2 className="fw-normal mb-3" style={{ fontSize: "2rem", color: "#424242" }}>
                    404 Not Found
                </h2>
                <p>Sorry, the page you are looking for does not exist.</p>

            </div>
        </section>
    )
}

export default NotFound