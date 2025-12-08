import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  // onurl change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a
        id="backTotop"
        href="#"
        className="to-top-icon"
        style={{ display: visible ? "inline" : "none" }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
}

export default ScrollToTop;
