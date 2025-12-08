import React from "react";
import FooterLogoSection from "./FooterLogoSection";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterSubscribe from "./FooterSubscribe";

const FooterTop = () => {
  return (
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <FooterLogoSection />
          <FooterQuickLinks />
          <FooterSubscribe />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
