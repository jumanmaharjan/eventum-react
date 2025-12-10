import React from "react";

import useCountdown from "../Component/function/DateCountdown";
function ComingSoon() {
  const { days, hours, minutes, seconds } = useCountdown("2025-12-24 23:58:58");
  return (
    <div className="comming-soon-section">
      <div className="container">
        <div className="comming-soon-wrap">
          <div className="site-identity-logo">
            <figure className="site-title">
              <a href="index.html">
                <img src="assets/img/eventux-logo-img.png" alt="logo" />
              </a>
            </figure>
            <p>We’re currently working on creating something fantastic.</p>
            <p>We’ll be here soon, subscribe to be notified.</p>
          </div>

          {/* Heading */}
          <article className="comming-soon-content">
            <h1 className="section-title mb-0">COMING SOON !</h1>
          </article>

          {/* Countdown Timer */}
          <div className="time-counter-wrap col-lg-8 offset-lg-2">
            <div className="time-counter">
              {/* Days */}
              <div className="counter-time">
                <span className="counter-days">{days}</span>
                <h6 className="label-text">Days</h6>
              </div>
              <span className="time-symbol">:</span>

              {/* Hours */}
              <div className="counter-time">
                <span className="counter-hours">{hours}</span>
                <h6 className="label-text">Hours</h6>
              </div>
              <span className="time-symbol">:</span>

              {/* Minutes */}
              <div className="counter-time">
                <span className="counter-minutes">{minutes}</span>
                <h6 className="label-text">Minutes</h6>
              </div>
              <span className="time-symbol">:</span>

              {/* Seconds */}
              <div className="counter-time">
                <span className="counter-seconds">{seconds}</span>
                <h6 className="label-text">Seconds</h6>
              </div>
            </div>

            <a href="#" className="button-round-primary comming-soon-btn mt-4">
              NOTIFY ME
            </a>
          </div>

          {/* Footer */}
          <div className="comming-soon-footer">
            <div className="copy-right text-center">
              Copyright &copy; {new Date().getFullYear()} Eventux. All right
              reserved.
            </div>

            {/* Social Links */}
            <div className="social-icons">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pinterest.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
