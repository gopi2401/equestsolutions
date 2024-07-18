
import Slider from "react-slick";
import awardsAndAchievementsData from "./ComponentAPI/awardsAndAchievementsAPI";
const SliderAstro2=()=>{
  const awardSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 30,
    // centerPadding: "180px",
    centerMode: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
    ],
  };

    return(  <Slider {...awardSettings}>
      {awardsAndAchievementsData.map((val) => {
        return (
          <div key={val.id} className="d-flex align-items-center">
            <a
              href={val.pathUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={val.img}
                className="slider-img"
                alt="top cross platform mobile app development companies"
                style={{ height: val.height, width: val.width }}
                loading="lazy"
              />
            </a>
          </div>
        );
      })}
    </Slider>  );
};

export default SliderAstro2;