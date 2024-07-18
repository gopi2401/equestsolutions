import Slider from "react-slick";
import wordsClientData from "./ComponentAPI/wordsClientAPI";
const SliderAstro1 = () => {
  const clientSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    touchThreshold: 30,
    centerPadding: "100px",
    centerMode: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
          centerMode: true,
        },
      },
    ],
  };
  return (
    <Slider {...clientSettings}>
      {wordsClientData.map((val, index) => {
        return (
          <div class="item" key={index}>
            <div class="words_from_client_content_wrapper">
              <div class="words_from_client-details">
                <p>{val.description}</p>
              </div>
              <div class="words_from_client-bottom-text">
                <p class="words_from_client-name">{val.clientName}</p>
                <p class="words_from_client-designation">
                  {val.clientOccupation}
                </p>
              </div>
              <div class="words_from_client-img">
                <Image
                  src={val.clientImg}
                  alt=""
                  class="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderAstro1;
