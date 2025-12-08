import React from "react";
import { Link } from "react-router-dom";
import ServicePart from "../../Component/ServicePart/ServicePart";
import ServiceData from "../../Component/ServicePart/ServiceData";
import EventCountdown from "../EventsPage/EventCountdown";

function Feature() {
  return (
    <>
      <section className="home-join-section feature-section">
        <div className="container">
          <div className="service-content-wrapper">
            {ServiceData.slice(0, 4).map((data) => (
              <ServicePart key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
      <EventCountdown date={"2025-12-24 23:58:58"} />
    </>
  );
}

export default Feature;
