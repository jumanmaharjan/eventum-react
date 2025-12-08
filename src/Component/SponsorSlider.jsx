import React from "react";
import Slider from "react-slick";

function SponsorSlider({ data, direction = "ltr", slidesToShow = 3 }) {
  const settings = {
    rtl: direction === "rtl",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div className="client-item" key={index}>
          <img src={item.img} alt="sponsor" />
        </div>
      ))}
    </Slider>
  );
}

export default SponsorSlider;
