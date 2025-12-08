import React from "react";
import useCountdown from "../../../Component/function/DateCountdown";
function HomeAbout() {
  const { days, hours, minutes, seconds } = useCountdown("2025-12-24 23:58:58");
  return (
    <>
      <section className="home-about-section">
        <div className="container">
          <div className="about-counter-wrapper">
            <div className="about-counter-left-side">
              <h4 className="section-title mb-0">
                COUNT EVERY SECOND UNTIL THE{" "}
                <span className="highlight-text">EVENT</span>
              </h4>
            </div>
            <div className="about-counter-right-side">
              <div className="time-counter" data-date="2025-12-24 23:58:58">
                <div className="counter-time">
                  <span className="counter-days">{days}</span>
                  <h6 className="label-text">Days</h6>
                </div>
                <span className="time-symbol">:</span>
                <div className="counter-time">
                  <span className="counter-hours">{hours}</span>
                  <h6 className="label-text">Hours</h6>
                </div>
                <span className="time-symbol">:</span>
                <div className="counter-time">
                  <span className="counter-minutes">{minutes}</span>
                  <h6 className="label-text">Minutes</h6>
                </div>
                <span className="time-symbol">:</span>
                <div className="counter-time">
                  <span className="counter-seconds">{seconds}</span>
                  <h6 className="label-text">Seconds</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="about-wrapper">
            <div className="about-image-wrapper">
              <div className="about-left-img-content">
                <figure className="left-top">
                  <img src="assets/img/eventux-image-008.jpg" alt="" />
                </figure>
                <figure className="left-bottom">
                  <img src="assets/img/eventux-image-006.jpg" alt="" />
                </figure>
              </div>
              <figure className="about-center-image">
                <img src="assets/img/eventux-image-005.jpg" alt="" />
              </figure>
              <div className="about-right-img-content">
                <figure className="right-top">
                  <img src="assets/img/eventux-image-007.jpg" alt="" />
                </figure>
                <figure className="right-bottom">
                  <img src="assets/img/eventux-image-009.jpg" alt="" />
                </figure>
              </div>
            </div>
            <div className="about-info-wrapper">
              <h3 className="section-title">
                WELCOME TO THE GRAND
                <span className="highlight-text">MEETUP</span>
                <span className="shadow-title-text">ABOUT</span>
              </h3>
              <p className="about-short-info">
                Praesentium ullamco accusamus diam quibus dam libero feugiat,
                doloremque lacus per natoque provident sunt habitant vivamus
                viverra itaque itaque dignissim frin.
              </p>
              <div className="about-detail-wrapper">
                <a href="about.html" className="button-round-primary about-btn">
                  LEARN MORE
                </a>
                <div className="author_content">
                  <figure className="author-img">
                    <img src="assets/img/eventux-image-010.jpg" alt="" />
                  </figure>
                  <div className="auther-info">
                    <h6>JR. MIKEL JOBBS</h6>
                    <p>EVENT ORGANISER</p>
                  </div>
                </div>
              </div>
              <div className="about-goal">
                <div className="goal-box">
                  <div className="goal-icon">
                    <i aria-hidden="true" className="icon icon-Profile"></i>
                  </div>
                  <h6 className="goal-title">
                    <a href="#">ATTEND EVENT</a>
                  </h6>
                </div>
                <div className="goal-box">
                  <div className="goal-icon">
                    <i aria-hidden="true" className="icon icon-handshake"></i>
                  </div>
                  <h6 className="goal-title">
                    <a href="#">BECOME SPONSER</a>
                  </h6>
                </div>
                <div className="goal-box">
                  <div className="goal-icon">
                    <i
                      aria-hidden="true"
                      className="jki jki-user-check-line"
                    ></i>
                  </div>
                  <h6 className="goal-title">
                    <a href="#">JOIN & INVOLVED</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;
