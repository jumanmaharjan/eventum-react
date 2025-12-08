import React from "react";

const PageTitle = ({ title }) => {
  return (
    <>
      <section className="inner-banner-wrap">
        <div className="container">
          <div className="inner-banner-content">
            <h2 className="inner-title">{title}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;
