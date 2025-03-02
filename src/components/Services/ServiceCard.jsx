import Slider from "react-slick";
import serviceCardData from "../ComponentAPI/serviceCardAPI";
export default  function  ()  {
  var sliderSettings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    touchThreshold: 30,
    className: "main-services__slider",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...sliderSettings}>
      {serviceCardData.map((val, index) => {
        return (
          <div class="main-services__slider-item" id={String(index)}>
            <div
              class={"card card--service " + val.clsName}
              style={{ background: val.bgColor }}
            >
              {/* <Link to={val.pathUrl}> */}
              <div class="card-img">
                <img
                  src={val.image.src}
                  class="img-fluid"
                  alt=""
                  loading="lazy"
                  width={val?.imageWidth}
                  height={val?.imageHeight}
                />
              </div>
              <div class="card-body">
                <h3 class="card-title">{val.title}</h3>
                <p>{val.description}</p>
                {/* <button class="btn btn-light">{props.linkName}</button> */}
              </div>
              {/* </Link> */}
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
