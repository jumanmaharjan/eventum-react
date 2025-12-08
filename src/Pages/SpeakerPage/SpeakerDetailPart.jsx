import React from "react";
import { scheduleData } from "../../Component/schedule/scheduleData";
import EventListCard from "../EventsPage/EventListCard";
function SpeakerDetailPart() {
  return (
    <>
      <section class="home-schedule-section speaker-detail-schedule">
        <div class="container">
          <div class="speaker-schedule-title text-center">
            <h5 class="d-inline-block">EVENT LECTURE FROM HIM</h5>
          </div>
          <div className="day-routine-content">
            {scheduleData.map((day, index) => (
              <EventListCard key={index} index={index} day={day} noItem={1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SpeakerDetailPart;
