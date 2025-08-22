import React, { useState } from "react";

const peopleData = [
    {
        name: "Nikhil Kamath",
        role: "Co-founder & CFO",
        image: "/media/images/p1.jpg",
        bio: "Nikhil Kamath is the co-founder and CFO of Zerodha, shaping business strategy and driving growth."
    },
    {
        name: "Dr. Kailash Nadh",
        role: "CTO",
        image: "/media/images/p2.jpg",
        bio: "Dr. Kailash Nadh leads Zerodha's technology, focusing on innovation and building robust platforms."
    },
    {
        name: "Venu Madhav",
        role: "COO",
        image: "/media/images/p3.jpg",
        bio: "Venu Madhav is the Chief Operating Officer, ensuring seamless operations and customer satisfaction."
    },
    {
        name: "Hanan Delvi",
        role: "CCO",
        image: "/media/images/p4.jpg",
        bio: "Hanan Delvi oversees compliance, risk management, and corporate governance at Zerodha."
    },
    {
        name: "Seema Patil",
        role: "Director",
        image: "/media/images/p5.jpg",
        bio: "Seema Patil is a Director at Zerodha, spearheading initiatives in operations and compliance."
    },
    {
        name: "Karthik Rangappa",
        role: "Chief of Education",
        image: "/media/images/p6.jpg",
        bio: "Karthik Rangappa heads Zerodha Varsity, creating educational content for traders and investors."
    },
    {
        name: "Austin Prakesh",
        role: "Director Strategy",
        image: "/media/images/p7.jpg",
        bio: "Austin Prakesh drives strategic planning and partnerships for Zerodha’s long-term growth."
    }
];

function MorePeople() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleBio = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container py-5 text-center" style={{ width: "900px", margin: "auto", maxWidth: "100%", boxSizing: "border-box" }}>
            <div className="row justify-content-start">
                {peopleData.map((person, index) => (
                    <div className="col-md-4 col-lg-4 mb-4" key={index}>
                        <div className="border-0 bg-transparent">
                            <div
                                className="mx-auto rounded-circle overflow-hidden"
                                style={{ width: "200px", height: "200px", color: "#424242" }}
                            >
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                            <div className="mt-3">
                                <h5>{person.name}</h5>
                                <p className="text-muted">{person.role}</p>
                                <button
                                    className="btn btn-link p-0" style={{ color: "#666", textDecoration: "none" }}
                                    onClick={() => toggleBio(index)}
                                >
                                    Bio{" "}
                                    <i
                                        className={`ms-1 fas ${openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                                            }`}
                                    ></i>
                                </button>
                                {openIndex === index && (
                                    <p className="mt-2">{person.bio}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MorePeople;
