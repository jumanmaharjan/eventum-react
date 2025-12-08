import React from "react";
import { Link } from "react-router-dom";
import TeamData from "../../Component/TeamPart/TeamData";
import HomeSponsors from "../HomePart/Section/HomeSponsors";
import TeamCard from "../../Component/TeamPart/TeamCard";

function SpeakerList() {
  return (
    <>
      <section className="our-speaker-section">
        <div className="container">
          <div className="our-team-wrapper">
            {TeamData.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
      <HomeSponsors />
    </>
  );
}

export default SpeakerList;
