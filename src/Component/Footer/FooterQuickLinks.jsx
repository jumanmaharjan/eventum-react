import React from "react";

const FooterQuickLinks = () => {
  const footerLinks = [
    { id: 1, title: "Speakers", url: "speaker.html", group: "left" },
    { id: 2, title: "Agenda", url: "event-list.html", group: "left" },
    { id: 3, title: "Tickets Price", url: "pricing.html", group: "left" },
    { id: 4, title: "Our Process", url: "single-page.html", group: "left" },

    { id: 5, title: "Our Blogs", url: "blog-archive.html", group: "right" },
    { id: 6, title: "Testimonials", url: "testimonial.html", group: "right" },
    { id: 7, title: "Contact Us", url: "contact.html", group: "right" },
    { id: 8, title: "FAQ / Support", url: "faq.html", group: "right" },
  ];
  const leftLinks = footerLinks.filter((item) => item.group === "left");
  const rightLinks = footerLinks.filter((item) => item.group === "right");

  return (
    <div className="col-lg-4 col-sm-6 ps-lg-5">
      <aside className="widget">
        <h6 className="widget-title">QUICK SERVICES</h6>

        <div className="row">
          {/* left side*/}
          <div className="col-sm-6">
            <ul>
              {leftLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* right side*/}
          <div className="col-sm-6">
            <ul>
              {rightLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default FooterQuickLinks;
