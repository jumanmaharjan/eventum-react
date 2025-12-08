import React from "react";
import ServiceData from "../../../Component/ServicePart/ServiceData";
import ServicePart from "../../../Component/ServicePart/ServicePart";
function HomeJoin() {
  return (
    <>
      <section className="home-join-section">
        <div className="container">
          <div className="section-head">
            <h3 className="section-title mb-0">
              WHY ATTEND OUR
              <span className="highlight-text">EVENT?</span>
              <span className="shadow-title-text">JOIN US</span>
            </h3>
            <p className="section-info mb-0">
              Praesentium ullamco accusamus diam quibus dam libero feugiat,
              doloremque lacus per natoque provident sunt habitant vivamus
              viverra itaque itaque dignissim fringilla nonummy.
            </p>
            <div className="join-btn">
              <a href="about.html" className="button-round-primary ">
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="service-content-wrapper">
            {ServiceData.slice(0, 4).map((data) => (
              <ServicePart key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeJoin;
