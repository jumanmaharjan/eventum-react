import React from "react";

function FaqContactPage() {
  return (
    <>
      <section className="faq-contact-section">
        <div className="container">
          <div className="faq-contact-wrapper">
            <div className="faq-contact-info">
              <div className="section-head-margin35">
                <h3 className="section-title">
                  DON'T FOUND YOUR QUERIES?
                  <span className="highlight-text">CONTACT US!</span>
                  <span className="shadow-title-text">QUESTIONS</span>
                </h3>
                <p className="section-info">
                  Massa montes doloribus ridiculus habitasse sit morbi vulputate
                  fringilla ornare, habitant ipsa ipsa ut semper, diamlorem,
                  blanditiis className! Culpa repellat magnam rutrum molestiae
                  sapiente phasellus ea amet.
                </p>
              </div>
              <div className="contact-wrapper secondary-round-shadow-box">
                <i aria-hidden="true" className="jki jki-phone-light icons"></i>
                <div className="details-content">
                  <p className="mb-0">CALL US ANYTIME :</p>
                  <h4 className="mb-0">+988-567-89344</h4>
                </div>
              </div>
            </div>
            <figure className="faq-contact-img figure-round-border-3">
              <img src="assets/img/eventux-image-029.jpg" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqContactPage;
