import React, { useState } from "react";

const faqs = [
    {
        question: "What is a Zerodha account?",
        answer:
            "A Zerodha account allows you to invest and trade in stocks, commodities, and other financial instruments online."
    },
    {
        question: "What documents are required to open a demat account?",
        answer:
            "You will need your PAN card, Aadhaar card, bank proof, and a passport-size photograph."
    },
    {
        question: "Is Zerodha account opening free?",
        answer:
            "No, there are small account opening charges depending on the segments you choose."
    },
    {
        question: "Are there any maintenance charges for a demat account?",
        answer:
            "Yes, there are annual maintenance charges depending on your account type."
    },
    {
        question: "Can I open a demat account without a bank account?",
        answer:
            "No, linking your bank account is mandatory to open a demat account."
    }
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="container my-5" style={{ maxWidth: "1100px", margin: "auto" }}>
            <h4 className="fw-semibold mb-4">FAQs</h4>
            <div className="border-top">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-bottom py-3">
                        {/* Question Row */}
                        <div
                            className="d-flex justify-content-between align-items-center"
                            style={{ cursor: "pointer" }}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="fw-normal">{faq.question}</span>
                            <i
                                className={`fa-solid ${openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                                    } text-muted`}
                            ></i>
                        </div>

                        {/* Answer */}
                        {openIndex === index && (
                            <div className="mt-2 text-muted small">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
