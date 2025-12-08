import React from "react";

function Gallery() {
  return (
    <>
      <div className="gallery-section">
        {/* Home Gallery Section */}
        <div className="home-gallery-section">
          <div className="container">
            <div className="gallery-content">
              {/* Left Column */}
              <div className="image-content-left">
                <figure className="left-top-img">
                  <img src="/assets/img/eventux-image-028.jpg" alt="" />
                </figure>
                <figure className="left-bottom-img">
                  <img src="/assets/img/eventux-image-030.jpg" alt="" />
                </figure>
                <figure className="left-top-img">
                  <img src="/assets/img/eventux-image-007.jpg" alt="" />
                </figure>
              </div>

              {/* Center Column */}
              <div className="image-content-center">
                <figure className="center-img">
                  <img src="/assets/img/eventux-image-027.jpg" alt="" />
                </figure>
                <figure className="center-img bottom-center">
                  <img src="/assets/img/eventux-image-006.jpg" alt="" />
                </figure>
              </div>

              {/* Right Column */}
              <div className="image-content-right">
                <figure className="right-top-img">
                  <img src="/assets/img/eventux-image-031.jpg" alt="" />
                </figure>
                <figure className="right-bottom-img">
                  <img src="/assets/img/eventux-image-029.jpg" alt="" />
                </figure>
                <figure className="right-top-img">
                  <img src="/assets/img/eventux-image-008.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Callback Section */}
      <section className="callback-section">
        <div className="container">
          <div className="section-head-margin35 section-title-center text-center px-lg-5 col-lg-10 offset-lg-1">
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
                <a href="/reservation" className="button-round-primary">
                  BUY A TICKET
                </a>
              </span>
              <span className="banner-btn">
                <a href="/about" className="button-round-white-transparent">
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

export default Gallery;
