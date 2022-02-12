import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselstyle.css";
function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider className="carousel" {...settings}>
      <div className="wrap">
        <img src="/images/slider-badging.jpg" alt="" />
      </div>
      <div className="wrap">
        <img src="/images/slider-badag.jpg" alt="" />
      </div>
      <div className="wrap">
        <img src="/images/slider-scale.jpg" alt="" />
      </div>
      <div className="wrap">
        <img src="/images/slider-scales.jpg" alt="" />
      </div>
    </Slider>
  );
}

export default Carousel;
