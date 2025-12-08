import React from "react";
import { Link } from "react-router-dom";
import { scheduleData } from "../../../Component/schedule/scheduleData";

function OtherEvents() {
  const events = scheduleData.flatMap((day) =>
    day.lectures.map((lecture) => ({
      topic: lecture.topic,
      id: lecture.id,
    }))
  );

  return (
    <div className="widget widget-bg icon-list-content round-border">
      <h5 className="bg-title round-border">OTHER EVENT LIST</h5>
      <p className="widget-bg-info">
        Voluptate purus dictum habitasse bibendum metus, accusantium cupidit
      </p>

      <ul>
        {events.slice(0, 4).map((event, i) => {
          return (
            <li key={i}>
              <Link to={`/event-detail/${event.id}`}>
                <i className="jki jki-arrow-right-circle-line"></i>
                {event.topic}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OtherEvents;
