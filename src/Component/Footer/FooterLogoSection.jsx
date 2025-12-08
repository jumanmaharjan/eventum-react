import React from "react";

const FooterLogoSection = () => {
  return (
    <div className="col-lg-4 col-sm-6">
      <aside className="widget widget_text img-textwidget">
        <div className="footer-logo">
          <a href="/">
            <img src="assets/img/eventux-logo-img.png" alt="logo" />
          </a>
        </div>

        <div className="textwidget widget-text">
          Volutpat turpis distinctio voluptatibus, libero viverra risus quisque
          dictumst. Voluptatem delectus facilisi, eiusm.
        </div>

        <div className="footer-social-links">
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default FooterLogoSection;
