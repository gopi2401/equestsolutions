import Slider from "react-slick";
import "../assets/css/component/About/EquestLeader/EquestLeader.scss";
import leaderItemData from "../components/ComponentAPI/leaderItemAPI";

const SliderAstro3 = () => {
  const leaderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerPadding: "150px",
    centerMode: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px",
        },
      },
    ],
  };
  return (
    <Slider {...leaderSettings}>
      {leaderItemData.map((val, index) => {
        return (
          <div class="item" key={index}>
            <div class="eq_leader_content_wrapper">
              <div class="eq_leader-img">
                <img src={val.leaderImg.src} alt="" class="img-fluid" />
              </div>
              <p class="eq_leader-name">{val.leaderName}</p>
              <p class="eq_leader-designation">{val.leaderOccupation}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderAstro3;
