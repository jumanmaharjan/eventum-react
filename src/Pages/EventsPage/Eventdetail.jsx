import React from "react";
import { useParams } from "react-router-dom";
import { scheduleData } from "../../Component/schedule/scheduleData";
import Sidebar from "./sidebar/Sidebar";
import EventImage from "./Content/EventImage";
import EventIntro from "./Content/EventIntro";
import EventDetails from "./Content/EventDetails";
import EventBenefits from "./Content/EventBenefits";

function EventDetail() {
  const { id } = useParams();
  const lectureId = parseInt(id);

  // Finding
  const lecture = scheduleData
    .flatMap((day) => day.lectures)
    .find((lec) => lec.id === lectureId);

  if (!lecture) {
    return <h2>Event Not Found</h2>;
  }
  return (
    <section className="event-detail-section">
      <div className="container">
        <div className="event-detail-inner-detail">
          <div className="row">
            {/* Left Sidebar */}
            <div className="col-lg-4 order-2 order-lg-0">
              <Sidebar />
            </div>

            {/* Right Content */}
            <div className="col-lg-8 order-1 order-lg-1">
              <div className="right-sidebar">
                <EventImage img={lecture.img} />
                <EventIntro topic={lecture.topic} desc={lecture.desc} />
                <EventDetails details={lecture.details} />
                <EventBenefits benefits={lecture.benefits} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetail;
