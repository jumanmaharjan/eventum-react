import React from "react";
import FaqAccordion from "./FaqAccordion";
import FaqData from "./FaqData";
import FaqContactPage from "./FaqContactPage";

function FaqPage() {
  return (
    <>
      <section className="faq-page-section">
        <div className="container">
          <div className="section-head">
            <h3 className="section-title mb-0">
              FREQUENTLY ASKED
              <span className="highlight-text">QUESTIONS</span>
              <span className="shadow-title-text">QUESTION</span>
            </h3>
            <p className="section-info mb-0">
              Incidunt quos primis placerat laboriosam dolorum amet quod aptent
              quibusdam cillum animi, magni hendrerit, quasi exercitation,
              dolore nobis, hac sapiente vivamus saepe
            </p>
          </div>
          <div className="faq-page-container">
            {/* RIGHT COLUMN */}
            <div className="faq-right-info">
              <FaqAccordion faqs={FaqData.rightFaqs} />
            </div>

            {/* LEFT COLUMN */}
            <div className="faq-left-info">
              <FaqAccordion faqs={FaqData.leftFaqs} />
            </div>
          </div>
        </div>
      </section>
      <FaqContactPage />
    </>
  );
}

export default FaqPage;
