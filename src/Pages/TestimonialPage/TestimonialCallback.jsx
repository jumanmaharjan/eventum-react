import React from "react";
import { Link } from "react-router-dom";

function TestimonialCallback() {
  return (
    <>
      <section className="callback-section">
        <div className="container">
          <div className="section-head-margin35 section-title-center text-center px-lg-5 mb-0 col-lg-10 offset-lg-1">
            <h3 className="section-title">
              BUILD YOUR CAREER BY ATTENDING OUR GRAND{" "}
              <span className="highlight-text">EVENTS</span>
              <span className="shadow-title-text">CALLBACK</span>
            </h3>

            <p className="section-info">
              Massa montes doloribus ridiculus habitasse sit morbi vulputate
              fringilla ornare, habitant ipsa ipsa ut semper, diamlorem,
              blanditiis class! Culpa repellat magnam rutrum molestiae.
            </p>

            <div className="callback-button">
              <span className="contact-btn">
                <Link to="/reservation" className="button-round-primary">
                  BUY A TICKET
                </Link>
              </span>

              <span className="banner-btn">
                <Link to="/about" className="button-round-white-transparent">
                  LEARN MORE
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialCallback;
