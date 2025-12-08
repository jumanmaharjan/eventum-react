import React from "react";
import HomeForm from "./HomeForm";

const HomeContact = () => {
  return (
    <section className="home-contact-section">
      <div className="contact-overlay"></div>

      <div className="container">
        <div className="contact-info-container">
          {/* ------------ Left: Contact Form ------------ */}
          <div className="contact-form-inner">
            <div className="section-head">
              <h3 className="section-title">
                CONTACT FOR MORE <span className="highlight-text">INFO</span>
                <span className="shadow-title-text">INFO</span>
              </h3>
              <p className="section-info">
                Praesentium ullamco accusamus diam quibus dam libero feugiat,
                doloremque lacus per natoq.
              </p>
            </div>

            <HomeForm />
          </div>

          {/* ------------ Right: Contact Details + Map ------------ */}
          <div className="contact-details-content">
            <div className="contact-detail-wrapper">
              <div className="contact-details-list">
                <ul>
                  <li>
                    <span className="icons">
                      <i
                        className="icon icon-map-marker1"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div className="details-content">
                      <h6>EVENT VENUE:</h6>
                      <span>2005 Stokes Isle Apt. 896,</span>
                      <span>Venaville 10010, USA</span>
                    </div>
                  </li>

                  <li>
                    <span className="icons">
                      <i
                        className="jki jki-support1-light"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div className="details-content">
                      <h6>CONTACT INFO:</h6>
                      <span>
                        <a href="mailto:eventux@example.com">
                          Mail: eventux@example.com
                        </a>
                      </span>
                      <span>
                        <a href="tel:+234657225">Phone: +234-657-225</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="contact-social-wrapper">
                <h6 className="social-title">FOLLOW US ON:</h6>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ---------------- Map ---------------- */}
            <div className="map-section">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317838.95217734354!2d-0.27362819527326965!3d51.51107287614788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2snp!4v1632135241093!5m2!1sen!2snp"
                height="500"
                loading="lazy"
                allowFullScreen=""
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
