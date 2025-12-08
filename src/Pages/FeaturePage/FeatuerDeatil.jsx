import React, { useState } from "react";
import FeatuerDetailSlider from "./FeatuerDetailSlider";
import services from "../../Component/ServicePart/ServiceData";
import { useParams } from "react-router-dom";

function FeatureDetail({
  gallery = [
    "/assets/img/eventux-image-037.jpg",
    "/assets/img/eventux-image-034.jpg",
    "/assets/img/eventux-image-035.jpg",
  ],
  faqs = [
    {
      ques: "WHAT WE GET FROM THIS EVENT?",
      ans: "Lorem ipsum dolor sit amet... pulvinar dapibus leo.",
    },
    {
      ques: "IS THERE ANY REFRESHMENT PROGRAM?",
      ans: "Lorem ipsum dolor sit amet... pulvinar dapibus leo.",
    },
    {
      ques: "IS IT FOR EDUCATIONAL PURPOSE?",
      ans: "Lorem ipsum dolor sit amet... pulvinar dapibus leo.",
    },
  ],
}) {
  const { id } = useParams();
  const serviceid = parseInt(id);

  const servicedata = services.find((item) => item.id === serviceid);

  const benefits = servicedata.list;
  const mid = Math.ceil(benefits.length / 2);
  const benefitsplit = [benefits.slice(0, mid), benefits.slice(mid)];

  // OPEN ONE - CLOSE OTHERS
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="feature-detail-section">
      <div className="container">
        <div className="feature-detail-inner-detail">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-lg-7">
              <div className="right-sidebar">
                <h4>{servicedata.title}</h4>

                <figure className="feature-detail-img figure-round-border">
                  <img
                    src={`/assets/img/${servicedata.img}`}
                    alt={servicedata.title}
                  />
                </figure>

                {servicedata.long_desc.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                {/* BENEFITS */}
                <div className="key-point-list">
                  <div className="row">
                    {benefitsplit.map((column, colIndex) => (
                      <div className="col-sm-6" key={colIndex}>
                        <div className="item-list">
                          <ul>
                            {column.map((item, i) => (
                              <li key={i}>
                                <i className="fas fa-check-circle"></i>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GALLERY */}
                <div className="gallery-slider">
                  <FeatuerDetailSlider data={gallery} />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-5 ps-lg-5">
              <div className="sidebar">
                {/* FAQ */}
                <div className="widget-bg widget-form round-border">
                  <h5 className="bg-title round-border">
                    Frequently Asked Questions
                  </h5>

                  <div id="accordion-tab-one" className="accordion-content">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaq === index;

                      return (
                        <div
                          className={`card tab-pane ${isOpen ? "open" : ""}`}
                          key={index}
                        >
                          <div
                            className="card-header"
                            role="tab"
                            onClick={() => toggleFaq(index)}
                          >
                            <h6 className="mb-0">
                              <a
                                href="#"
                                className={isOpen ? "" : "collapsed"}
                                onClick={(e) => e.preventDefault()}
                              >
                                {faq.ques}
                              </a>
                            </h6>
                          </div>

                          {isOpen && <div className="card-body">{faq.ans}</div>}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* OTHER FEATURES LIST */}
                <div className="widget widget-bg icon-list-content round-border">
                  <h5 className="bg-title round-border">OTHERS FEATURES</h5>
                  <ul>
                    {[
                      "Best Experience Speaker",
                      "Potential Client Network",
                      "Tech Creativity Boosting",
                      "Career Build Up Experience",
                      "Business Plan Marketing Expo",
                      "After Party Concert & Events",
                    ].map((item, i) => (
                      <li key={i}>
                        <a href="#">
                          <i className="fas fa-arrow-circle-right"></i>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureDetail;
