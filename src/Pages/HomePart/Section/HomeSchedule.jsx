import React from "react";
import { scheduleData } from "../../../Component/schedule/scheduleData";

function HomeSchedule() {
  return (
    <section className="home-schedule-section">
      <div className="container">
        <div className="section-head col-lg-6 col-md-8 offset-lg-3 offset-md-2">
          <h3 className="section-title-center">
            TIME TABLE FOR OUR GRAND
            <span className="highlight-text"> EVENT</span>
            <span className="shadow-title-text">SCHEDULE</span>
          </h3>
        </div>

        <div className="day-routine-content">
          {scheduleData.slice(0, 2).map((day, index) => (
            <div
              key={index}
              className={`routine-content ${
                index % 2 === 0 ? "routine-left" : "routine-right"
              }`}
            >
              <div className="week-title">
                <i aria-hidden="true" className="jki jki-calendar3-light"></i>
                <h5>{day.day}</h5>
                <i
                  aria-hidden="true"
                  className="jki jki-arrow-point-to-down-light"
                ></i>
              </div>

              {day.lectures.map((lec, lecIndex) => (
                <div className="routine-detail" key={lecIndex}>
                  <div className="time-detail">
                    <span className="time-title">{lec.title}</span>
                    <h6 className="time-period">{lec.time}</h6>
                  </div>

                  <div className="routine-description">
                    <h5 className="chapter-title">{lec.topic}</h5>
                    <p className="ch-paragraph">{lec.desc}</p>
                    <span className="chapter-link">
                      <a href={lec.link}>VIEW DETAILS..</a>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="schedule-btn text-center">
          <a href="event-list.html" className="button-round-primary">
            DISCOVER ALL LIST
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeSchedule;
