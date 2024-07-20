import Slider from "react-slick";
import clientLogoData from "./ComponentAPI/clientLogosAPI";
const SliderAstro = (props) => {
  var sliderSettings = {
    className: "client-logos__slider",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 7,
    autoplay: true,
    touchThreshold: 30,
    autoplaySpeed: 3000,
    speed: 2000,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          centerPadding: "30",
          centerMode: true,
        },
      },
    ],
  };
  return (
    <Slider {...sliderSettings}>
      {clientLogoData.map((val, index) => {
        return (
          <div class="client-logo__item" key={index}>
            <img
              src={typeof(val.image) === 'string' ? val.image : val.image.src}
              class="img-fluid"
              alt=""
              loading="lazy"
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderAstro;
