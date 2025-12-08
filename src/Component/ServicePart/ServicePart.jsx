import React from "react";

function ServicePart(props) {
  return (
    <>
      <div className="service-type">
        <figure className="service-figure">
          <i aria-hidden="true" className={props.icon}></i>
        </figure>
        <div className="service-info">
          <h5 className="service-title">
            <a href="feature-detail.html">{props.title}</a>
          </h5>
          <p className="service-detail">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default ServicePart;
