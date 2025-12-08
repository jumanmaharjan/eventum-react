import React from "react";
import SponsorSlider from "../../Component/SponsorSlider";
import HomeTeam from "../HomePart/Section/HomeTeam";
import VideoPopup from "../../Component/VideoPopup";

function About() {
  const imagedata = [
    { img: "assets/img/eventux-image-016.png" },
    { img: "assets/img/eventux-image-017.png" },
    { img: "assets/img/eventux-image-018.png" },
    { img: "assets/img/eventux-image-019.png" },
    { img: "assets/img/eventux-image-020.png" },
    { img: "assets/img/eventux-image-021.png" },
    { img: "assets/img/eventux-image-022.png" },
  ];
  return (
    <>
      <section className="about-page-section">
        <div className="container">
          <div className="about-inner-wrapper">
            {/* LEFT SECTION */}
            <div className="about-inner-content">
              <div className="section-head-margin35">
                <h3 className="section-title">
                  WELCOME TO THE GRAND
                  <span className="highlight-text">MEETUP</span>
                  <span className="shadow-title-text">ABOUT</span>
                </h3>
                <p className="section-info">
                  Praesentium ullamco accusamus diam quibus dam libero feugiat,
                  doloremque lacus per natoque provident sunt habitant vivamus
                  viverra itaque itaque dignissim frin occaecati magnam,
                  voluptatibus.
                </p>
              </div>

              {/* IMAGE + VIDEO SECTION */}
              <div className="image-content-center">
                <figure className="center-img figure-round-border">
                  <img src="assets/img/eventux-image-027.jpg" alt="" />
                </figure>

                <div className="gallery-detail-type">
                  <div className="video-button">
                    <VideoPopup
                      videoId="IUN664s7N-c"
                      trigger={<i className="icon icon-play-button"></i>}
                    />
                  </div>

                  <div className="gallery-info">
                    <h5 className="gallery-title">
                      EXPLORE OUR CAREER BOOSTING EVENT
                    </h5>
                    <p className="gallery-detail">
                      Praesentium ullamco accusamus diam quibus dam libero
                      feugiat, doloremque lacus per natoque provident sunt
                      habitant.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="about-inner-info-content">
              <p className="about-info">
                Consectetuer nisl! Nonummy penatibus consequat? Dolore ridiculus
                rutrum proident molestias saepe architecto voluptas felis!
              </p>

              {/* GOAL BOXES */}
              <div className="about-goal">
                <div className="goal-box">
                  <div className="goal-icon">
                    <i className="icon icon-Profile"></i>
                  </div>
                  <h6 className="goal-title">
                    <a href="#">ATTEND EVENT</a>
                  </h6>
                </div>

                <div className="goal-box">
                  <div className="goal-icon">
                    <i className="icon icon-handshake"></i>
                  </div>
                  <h6 className="goal-title">
                    <a href="#">BECOME SPONSER</a>
                  </h6>
                </div>

                <div className="goal-box">
                  <div className="goal-icon">
                    <i className="jki jki-user-check-line"></i>
                  </div>
                  <h6 className="goal-title">
                    <a href="#">JOIN & INVOLVED</a>
                  </h6>
                </div>
              </div>

              <p className="about-info">
                Consectetuer nisl! Nonummy penatibus consequat? Dolore ridiculus
                rutrum proident molestias saepe architecto voluptas felis!
              </p>

              {/* WHAT YOU GET */}
              <div className="price-info-list">
                <h6 className="list-title">WHAT YOU GET :</h6>
                <div className="price-list">
                  <ul>
                    <li className="price-item">Career Develop Opportunities</li>
                    <li className="price-item">Best For Business Purpose</li>
                    <li className="price-item">
                      Includes Breakfast, Lunch &amp; Open-bar.
                    </li>
                  </ul>
                </div>
              </div>

              {/* GOLD SPONSORS */}
              <div className="sponser-divider gold-sponser">
                <div className="sponser-title text-center">
                  <h6 className="primary-color">GOLD SPONSERS:</h6>
                </div>

                <div className="client-slider-about text-center">
                  <SponsorSlider data={imagedata} slidesToShow={4} />
                </div>
              </div>

              {/* SILVER SPONSORS */}
              <div className="sponser-divider silver-sponser">
                <div className="sponser-title text-center">
                  <h6 className="primary-color">SILVER SPONSERS:</h6>
                </div>

                <div className="client-slider-rtl-about text-center" dir="rtl">
                  <SponsorSlider
                    data={imagedata.reverse()}
                    direction="rtl"
                    slidesToShow={4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeTeam />
    </>
  );
}

export default About;
