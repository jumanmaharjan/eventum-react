import React from "react";
import { scheduleData } from "../../Component/schedule/scheduleData";

import EventListCard from "./EventListCard";
import EventCountdown from "./EventCountdown";
function EventList() {
  return (
    <>
      <section className="home-schedule-section event-list-section">
        <div className="container">
          <div className="day-routine-content">
            {scheduleData.map((day, index) => (
              <EventListCard key={index} index={index} day={day} />
            ))}
          </div>
        </div>
      </section>
      <EventCountdown date={"2025-12-24 23:58:58"} />
    </>
  );
}

export default EventList;
