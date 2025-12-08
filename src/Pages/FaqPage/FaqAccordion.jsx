import React, { useState } from "react";

const FaqAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion-content">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            className={`card tab-pane ${isOpen ? "show active" : ""}`}
            key={index}
          >
            {/* HEADER */}
            <div className="card-header" onClick={() => toggle(index)}>
              <h5 className="mb-0">
                <a
                  className={isOpen ? "" : "collapsed"}
                  onClick={(e) => e.preventDefault()}
                >
                  {item.question}
                </a>
              </h5>
            </div>

            {/* BODY */}
            <div className={`collapse ${isOpen ? "show" : ""}`}>
              <div className="card-body">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
