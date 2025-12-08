import React from "react";

const FooterBottom = () => {
  return (
    <div className="bottom-footer">
      <div className="container">
        <p className="copy-right text-center">
          Copyright © {new Date().getFullYear()} Eventux. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
