import React from "react";

function BrochureBox() {
  return (
    <div className="widget-bg text-center">
      <h5>Feel free to know about our services</h5>
      <p>Voluptate purus dictum habitasse bibendum metus, accusantium</p>

      <a href="#" className="button-round-primary">
        <i className="fas fa-file-download me-2"></i>
        DOWNLOAD BROCHURE
      </a>

      <span className="or-style">OR CALL US NOW</span>

      <h5 className="tel-no">
        <a href="tel:+98525688899">(+985-256-888-99)</a>
      </h5>
    </div>
  );
}

export default BrochureBox;
