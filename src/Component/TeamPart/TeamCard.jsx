import React from "react";
import { Link } from "react-router-dom";
function TeamCard(props) {
  return (
    <>
      <figure className="team-figure" key={props.id}>
        <img src={`/assets/img/${props.img}`} alt={props.name} />
        <div className="team-detail">
          <h5 className="team-name">
            <Link to={`/speaker-detail/${props.id}`}>{props.name}</Link>
          </h5>
          <span className="job-title">{props.role}</span>
          <div className="social-group">
            <ul>
              {props.socials.facebook && (
                <li>
                  <a
                    href={props.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
              )}
              {props.socials.twitter && (
                <li>
                  <a
                    href={props.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              )}
              {props.socials.pinterest && (
                <li>
                  <a
                    href={props.socials.pinterest}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              )}
              {props.socials.instagram && (
                <li>
                  <a
                    href={props.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </figure>
    </>
  );
}

export default TeamCard;
