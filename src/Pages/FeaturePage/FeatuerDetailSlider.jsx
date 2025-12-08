import React from "react";
import Slider from "react-slick";

function FeatuerDetailSlider({ data, direction = "ltr", slidesToShow = 2 }) {
  const settings = {
    rtl: direction === "rtl",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((img, i) => (
        <div className="gallery-item" key={i}>
          <figure className="gallery-img figure-round-border">
            <img src={img} alt={`Gallery ${i}`} />
          </figure>
        </div>
      ))}
    </Slider>
  );
}

export default FeatuerDetailSlider;
