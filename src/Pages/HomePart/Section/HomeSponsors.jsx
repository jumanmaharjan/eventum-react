import React from "react";
import { sponsorData } from "../../../Component/sponsorData";
import SponsorSlider from "../../../Component/SponsorSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeSponsors() {
  return (
    <section className="home-sponsor-section">
      <div className="overlay"></div>
      <div className="overlay-top-pattern"></div>
      <div className="overlay-bottom-pattern"></div>

      <div className="container">
        <div className="sponsor-content-wrapper">
          {/* SECTION TITLE */}
          <div className="section-head">
            <h3 className="section-title">
              OUR OPTIMISTIC PARTNERS &nbsp;
              <span className="highlight-text">SPONSERS</span>
              <span className="shadow-title-text">SPONSERS</span>
            </h3>
            <p className="section-info">
              Praesentium ullamco accusamus diam quibus dam libero feugiat,
              doloremque lacus per natoque provident sunt habitant vivamus
              viverra itaque itaque dignissim fringilla nonummy. Repellat enim
              consequat explicabo nullam rem
            </p>
          </div>

          {/* GOLD SPONSORS */}
          <div className="sponser-divider gold-sponser">
            <div className="sponser-premium-title">
              <h6>GOLD SPONSERS</h6>
              <i className="jki jki-arrow-point-to-down-light"></i>
            </div>

            <div className="client-slider text-center">
              <SponsorSlider data={sponsorData.gold} />
            </div>
          </div>

          {/* SILVER SPONSORS */}
          <div className="sponser-divider silver-sponser">
            <div className="sponser-premium-title">
              <h6>SILVER SPONSERS</h6>
              <i className="jki jki-arrow-point-to-down-light"></i>
            </div>

            <div className="client-slider-rtl text-center" dir="rtl">
              <SponsorSlider data={sponsorData.silver} direction="rtl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSponsors;
