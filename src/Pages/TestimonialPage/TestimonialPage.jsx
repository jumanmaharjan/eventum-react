import React from "react";
import TestimonialsData from "./TestimonialData";
import TestimonialCallback from "./TestimonialCallback";
function TestimonialPage() {
  return (
    <>
      <section className="testimonial-page-section">
        <div className="container">
          <div className="testimonial-wrapper-outer">
            {TestimonialsData.map((item, index) => (
              <div
                key={index}
                className="testimonial-item transparent-round-shadow-box"
              >
                <figure className="testimonial-img">
                  <img src={item.img} alt={item.name} />
                </figure>

                <div className="testimonial-detail">
                  <p className="testimonial-quote">“{item.quote}”</p>

                  <div className="author-info">
                    <h6 className="author-name">{item.name}</h6>
                    <span className="author-desc">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialCallback />
    </>
  );
}

export default TestimonialPage;
