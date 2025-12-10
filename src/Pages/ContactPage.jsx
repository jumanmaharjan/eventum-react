import React from "react";

function ContactPage() {
  return (
    <section className="contact-page-section">
      <div className="container">
        {/* Contact Details */}
        <div className="contact-detail-list">
          <div className="contact-detail-wrapper transparent-round-shadow-box">
            <span className="icons">
              <i aria-hidden="true" className="icon icon-support"></i>
            </span>
            <div className="details-content">
              <h6>EMAIL & PHONE NO :</h6>
              <span>
                <a href="mailto:company@domain.com">company@domain.com</a>
              </span>
              <span>
                <a href="tel:+234657225">Phone: +234-657-225</a>
              </span>
            </div>
          </div>

          <div className="contact-detail-wrapper transparent-round-shadow-box">
            <span className="icons">
              <i aria-hidden="true" className="icon icon-file-3"></i>
            </span>
            <div className="details-content">
              <h6>TICKET BOOKING :</h6>
              <span>
                <a href="tel:+234657225">Phone: +234-657-225</a>
              </span>
              <span>
                <a href="mailto:company@domain.com">company@domain.com</a>
              </span>
            </div>
          </div>

          <div className="contact-detail-wrapper transparent-round-shadow-box">
            <span className="icons">
              <i aria-hidden="true" className="icon icon-map-marker1"></i>
            </span>
            <div className="details-content">
              <h6>VENUE LOCATION :</h6>
              <span>2005 Stokes Isle Apt.</span>
              <span>896, Venaville, USA</span>
            </div>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="contact-form-inner">
          <div className="contact-detail-container">
            <div className="section-head-margin35">
              <h3 className="section-title">
                CONTACT FOR MORE INFO OF{" "}
                <span className="highlight-text">EVENT</span>
                <span className="shadow-title-text">CONTACT</span>
              </h3>
              <p className="section-info">
                Aut dolorem dicta? Ipsam tristique nec pulvinar? Corporis
                delectus facilisi, sint quas, ornare voluptatem possimus, magna
                hic! Magnis, fermentum. Aenean alias adipiscing facilis itaque
                montes hym.
              </p>
            </div>

            <div className="map-section">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317838.95217734354!2d-0.27362819527326965!3d51.51107287614788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2snp!4v1632135241093!5m2!1sen!2snp"
                height="300"
                allowFullScreen
                loading="lazy"
                title="Event Location"
              ></iframe>
            </div>
          </div>

          <form className="contact-from secondary-round-shadow-box">
            <p>
              <input type="text" name="name" placeholder="Your Name.." />
            </p>
            <p>
              <input type="email" name="email" placeholder="Your Email.." />
            </p>
            <p>
              <textarea rows="7" placeholder="Enter Your Message.."></textarea>
            </p>
            <p>
              <input type="submit" name="submit" value="SEND MESSAGE" />
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
