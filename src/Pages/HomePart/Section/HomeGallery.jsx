import React from "react";
import VideoPopup from "../../../Component/VideoPopup";
function HomeGallery() {
  return (
    <>
      <section className="home-gallery-section">
        <div className="container">
          <div className="section-head col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <h3 className="section-title-center">
              PREVIOUS GALLERY IMAGES OF
              <span className="highlight-text">EVENT</span>
              <span className="shadow-title-text">GALLERY</span>
            </h3>
          </div>
          <div className="gallery-content">
            <div className="image-content-left">
              <figure className="left-top-img">
                <img src="assets/img/eventux-image-028.jpg" alt="" />
              </figure>
              <figure className="left-bottom-img">
                <img src="assets/img/eventux-image-030.jpg" alt="" />
              </figure>
            </div>
            <div className="image-content-center">
              <figure className="center-img">
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
            <div className="image-content-right">
              <figure className="right-top-img">
                <img src="assets/img/eventux-image-031.jpg" alt="" />
              </figure>
              <figure className="right-bottom-img">
                <img src="assets/img/eventux-image-029.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeGallery;
