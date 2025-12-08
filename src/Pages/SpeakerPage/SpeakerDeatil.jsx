import React from "react";
import { useParams } from "react-router-dom";
import TeamData from "../../Component/TeamPart/TeamData";
import SpeakerDetailPart from "./SpeakerDetailPart";

function SpeakerDetail() {
  const { id } = useParams();
  const speakerId = parseInt(id);
  const speaker = TeamData.find((speak) => speak.id === speakerId);

  if (!speaker) {
    return <h2>Event Not Found</h2>;
  }

  return (
    <>
      <section className="event-speaker-detail our-speaker-details-section">
        <div className="container">
          <div className="speaker-detail-wrapper team-info-wrapper">
            <figure className="speaker-img">
              <img src={`/assets/img/${speaker.img}`} alt={speaker.name} />
            </figure>
            <div className="speaker-detail-info">
              <h6 className="section-sub-title">{speaker.role}</h6>
              <h3 className="section-title">{speaker.name}</h3>

              <div className="social-links">
                <ul>
                  {speaker.socials.facebook && (
                    <li>
                      <a
                        href={speaker.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                  )}
                  {speaker.socials.twitter && (
                    <li>
                      <a
                        href={speaker.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  )}
                  {speaker.socials.pinterest && (
                    <li>
                      <a
                        href={speaker.socials.pinterest}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  )}
                  {speaker.socials.instagram && (
                    <li>
                      <a
                        href={speaker.socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <p className="section-paragraph">{speaker.description}</p>

              <div className="contact-details-list">
                {speaker.contact?.map((item, i) => (
                  <div className="contact-wrapper" key={i}>
                    <span className="icons">
                      <i className={item.icon}></i>
                    </span>
                    <div className="details-content">
                      <p>{item.label}:</p>
                      <span>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="experience-wrappered">
            <div className="experience-info secondary-round-shadow-box">
              <h5 className="exp-title">
                <i className="icon icon-tools" aria-hidden="true"></i> Area of
                expertise :
              </h5>
              <ul className="experience-list icon-list-wrapper">
                {speaker.expertise?.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="experience-info secondary-round-shadow-box">
              <h5 className="exp-title">
                <i className="icon icon-book1" aria-hidden="true"></i> Education
                history :
              </h5>
              <ul className="experience-list icon-list-wrapper">
                {speaker.education?.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <SpeakerDetailPart />
    </>
  );
}

export default SpeakerDetail;
