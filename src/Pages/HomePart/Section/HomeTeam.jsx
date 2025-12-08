import React from "react";
import TeamData from "../../../Component/TeamPart/TeamData";
import TeamCard from "../../../Component/TeamPart/TeamCard";
import Counter from "../../../Component/function/Counter";

function HomeTeam() {
  return (
    <section className="home-team-section">
      <div className="container">
        <div className="team-detail-container">
          {/* Right Side Speakers */}
          <div className="team-info-content team-right">
            <div className="section-head">
              <h3 className="section-title">
                CHECKOUT OUR EVENT{" "}
                <span className="highlight-text">SPEAKERS?</span>
                <span className="shadow-title-text">SPEAKERS</span>
              </h3>

              <p className="section-info">
                Praesentium ullamco accusamus diam quibus dam libero feugiat,
                doloremque lacus per natoque provident sunt habitant vivamus.
              </p>

              <div className="team-btn">
                <a className="button-round-primary">VIEW ALL SPEAKERS</a>
              </div>
            </div>

            <div className="right-side-speaker speaker-img-wrapper">
              {TeamData.slice(0, 2).map((member) => (
                <TeamCard key={member.id} {...member} />
              ))}
            </div>
          </div>

          {/* Left Side Speakers */}
          <div className="team-info-wrapper team-left">
            <div className="leftside-speaker-img speaker-img-wrapper">
              {TeamData.slice(2, 4).map((member) => (
                <TeamCard key={member.id} {...member} />
              ))}
            </div>

            {/* Counter Section */}
            <div className="home-counter-section counter-inner-three-side secondary-round-shadow-box">
              <div className="counter-item">
                <h4 className="counter-no">
                  <Counter target={20} />+
                </h4>
                <h6 className="Completed">PROFESSIONAL SPEAKERS</h6>
              </div>
              <div className="counter-item">
                <h4 className="counter-no">
                  <Counter target={45} />+
                </h4>
                <h6 className="Completed">OUR EVENT SESSIONS</h6>
              </div>
              <div className="counter-item">
                <h4 className="counter-no">
                  <Counter target={80} />+
                </h4>
                <h6 className="Completed">SPONSORS & PARTNERS</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTeam;
