import React from "react";

function HomePricing() {
  return (
    <>
      <section className="home-princing-section">
        <div className="container">
          <div className="pricing-content-wrapper">
            <div className="pricing-table-inner">
              <div className="pricing-detail">
                <figure className="top-figure">
                  <img src="assets/img/eventux-image-024.png" alt="" />
                </figure>
                <div className="pricing-head">
                  <span className="pricing-title">EARLY BIRD</span>
                  <h2 className="cost">$25</h2>
                  <span className="tax-info">All prices exclude 15% VAT!</span>
                </div>
                <p className="price-info">
                  Consectetur wisiqui jeirsrer voluptatem nostra, magn occaecat
                  dictum, aenn.
                </p>
                <div className="ticket-info">
                  <span className="Seats-info">
                    (Limited Seats Are Available)
                  </span>
                  <a
                    href="reservation.html"
                    className="button-round-primary ticket-btn"
                  >
                    BUY TICKET
                  </a>
                </div>
                <figure className="bottom-figure">
                  <img src="assets/img/eventux-image-025.png" alt="" />
                </figure>
              </div>
              <div className="pricing-detail">
                <figure className="top-figure">
                  <img src="assets/img/eventux-image-024.png" alt="" />
                </figure>
                <div className="pricing-head">
                  <span className="pricing-title">PLATINUM</span>
                  <h2 className="cost">$48</h2>
                  <span className="tax-info">All prices exclude 15% VAT!</span>
                </div>
                <p className="price-info">
                  Cum risus qui assumenda, ipsam voluptatem euismod unde anim
                  rhoncus laoreet justo, nobis poss.
                </p>
                <div className="ticket-info">
                  <span className="Seats-info">
                    (Limited Seats Are Available)
                  </span>
                  <a
                    href="reservation.html"
                    className="button-round-primary ticket-btn"
                  >
                    BUY TICKET
                  </a>
                </div>
                <figure className="bottom-figure">
                  <img src="assets/img/eventux-image-025.png" alt="" />
                </figure>
              </div>
            </div>
            <div className="price-detail-info">
              <div className="section-head">
                <h3 className="section-title">
                  GRAB OUR EVENT
                  <span className="highlight-text">TICKETS</span>
                  <span className="shadow-title-text">PRICING</span>
                </h3>
                <p className="section-info">
                  Praesentium ullamco accusamus diam quibus dam libero feugiat,
                  doloremque lacus per natoque provident sunt habitant vivamus
                  vive.
                </p>
              </div>
              <div className="price-info-list">
                <h6 className="list-title">WHAT YOU GET :</h6>
                <div className="price-list">
                  <ul>
                    <li className="price-item">Career Develop Opportunities</li>
                    <li className="price-item">Best For Business Purpose</li>
                    <li className="price-item">
                      Includes Breakfast, Lunch & Open-bar.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePricing;
