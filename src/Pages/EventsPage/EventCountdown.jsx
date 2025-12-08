import React from "react";
import useCountdown from "../../Component/function/DateCountdown";
function EventCountdown(props) {
  const { days, hours, minutes, seconds } = useCountdown(props.date);
  return (
    <>
      <section className="event-list-about-section">
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
        </div>
      </section>
    </>
  );
}

export default EventCountdown;
