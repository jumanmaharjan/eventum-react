import React from "react";
import { Link } from "react-router-dom";
function EventListCard(props) {
  return (
    <>
      <div
        key={props.index}
        className={`routine-content ${
          props.index % 2 === 0 ? "routine-left" : "routine-right"
        }`}
      >
        <div className="week-title">
          <i aria-hidden="true" className="jki jki-calendar3-light"></i>
          <h5>{props.day.day}</h5>
          <i
            aria-hidden="true"
            className="jki jki-arrow-point-to-down-light"
          ></i>
        </div>

        {(props.noItem
          ? props.day.lectures.slice(0, props.noItem)
          : props.day.lectures
        ).map((lec, lecIndex) => (
          <div className="routine-detail" key={lecIndex}>
            <div className="time-detail">
              <span className="time-title">{lec.title}</span>
              <h6 className="time-period">{lec.time}</h6>
            </div>

            <div className="routine-description">
              <h5 className="chapter-title">{lec.topic}</h5>
              <p className="ch-paragraph">{lec.desc}</p>
              <span className="chapter-link">
                <Link to={`/event-detail/${lec.id}`}>VIEW DETAILS..</Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EventListCard;
