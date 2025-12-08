import React from "react";
import Counter from "../../../Component/function/Counter";

function banner() {
  return (
    <>
      <section className="home-banner">
        <div className="overlay"></div>
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-section-info">
              <h6 className="section-sub-title">CONFERENCE</h6>
              <h2 className="section-title">EVENT</h2>
              <h5 className="section-info">
                BUSINESS. MARKETING. AGENCY MEETUP
              </h5>
            </div>
            <div className="banner-service-content">
              <div className="service-type">
                <figure className="service-icon">
                  <i aria-hidden="true" className="jki jki-users-line"></i>
                </figure>
                <h5 className="service-title">
                  <Counter target={800} />+ VISITORS
                </h5>
              </div>
              <div className="service-type">
                <figure className="service-icon">
                  <i aria-hidden="true" className="jki jki-calendar3-light"></i>
                </figure>
                <h5 className="service-title">10TH - 13TH MARCH</h5>
              </div>
              <div className="service-type">
                <figure className="service-icon">
                  <i aria-hidden="true" className="jki jki-map-pin-line"></i>
                </figure>
                <h5 className="service-title">WEST ROAD, LOS ANGELES</h5>
              </div>
            </div>
            <div className="section-button">
              <span className="banner-btn">
                <a href="reservation.html" className="button-round-primary">
                  BUY A TICKET
                </a>
              </span>
              <span className="banner-btn">
                <a href="about.html" className="button-round-white-transparent">
                  LEARN MORE
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default banner;
