import React, { useEffect, useRef, useState } from "react";
import QuickSearch from "../QuickSearch";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./navbar";

function Header() {
  const mastheadRef = useRef(null);
  const topHeaderRef = useRef(null);
  const bottomHeaderRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const masthead = mastheadRef.current;
      const topHeaderHeight = topHeaderRef.current.offsetHeight;

      if (window.innerWidth >= 992) {
        if (window.scrollY > topHeaderHeight + 40) {
          masthead.classList.add("fixed-header");
        } else {
          masthead.classList.remove("fixed-header");
        }
      } else {
        const bottomHeaderHeight = bottomHeaderRef.current.offsetHeight;
        const mobileHeaderHeight = topHeaderHeight + 10 + bottomHeaderHeight;

        if (window.scrollY > mobileHeaderHeight) {
          masthead.classList.add("fixed-header");
        } else {
          masthead.classList.remove("fixed-header");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className="site-header site-header-transparent"
        id="masthead"
        ref={mastheadRef}
      >
        <div className="container">
          <div className="main-header-wrapper">
            <div className="site-identity">
              <a href="index.html">
                <img src="assets/img/eventux-logo-img.png" alt="logo" />
              </a>
            </div>
            <div className="header-wrapper">
              <div className="top-header" ref={topHeaderRef}>
                <div className="top-header-wrapper">
                  <div className="row align-items-center">
                    <div className="col-sm-8 flex-grow-1 d-flex justify-content-center justify-content-sm-start">
                      <div className="schedule-wrapper d-flex flex-wrap flex-sm-nowrap">
                        <div className="header-schedule-info">
                          <i aria-hidden="true" className="fas fa-envelope"></i>
                          <span className="schedule-info">
                            <a href="mailto:info@domain.com">
                              company@example.com
                            </a>
                          </span>
                        </div>
                        <div className="header-schedule-info">
                          <i
                            aria-hidden="true"
                            className="fas fa-phone-alt"
                          ></i>
                          <span className="schedule-info">
                            {" "}
                            (+213) 456 678 999{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 mt-1 mt-sm-0 d-flex align-items-center justify-content-center justify-content-sm-end">
                      <div className="header-social social-links">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com" target="_blank">
                              <i
                                className="fab fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com" target="_blank">
                              <i
                                className="fab fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com" target="_blank">
                              <i
                                className="fab fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.whatsapp.com" target="_blank">
                              <i
                                className="fab fa-whatsapp"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="header-search-icon">
                        <button
                          className="search-icon"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowSearch(true);
                          }}
                        >
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-header" ref={bottomHeaderRef}>
                <div className="site-identity bottom-header-logo">
                  <a href="index.html">
                    <img src="assets/img/eventux-logo-img.png" alt="logo" />
                  </a>
                </div>
                <div className="hb-group d-flex align-items-center justify-content-end justify-content-sm-between">
                  <div className="main-navigation col-lg-9 d-none d-md-block">
                    <Navbar />
                  </div>
                  <div className="mobile-menu-container"></div>
                  <div className="appoinment-btn d-none d-sm-block">
                    <a href="reservation.html" className="button-round-primary">
                      BUY A TICKET
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <QuickSearch showSearch={showSearch} setShowSearch={setShowSearch} />
      <Outlet />
    </>
  );
}

export default Header;
