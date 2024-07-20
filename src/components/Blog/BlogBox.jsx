import "../../assets/css/component/Blog/BlogBoxComponent/BlogBox.scss";
import rightArrow from "../../assets/media/right-arrow.svg";
// import BlogDetail from "../../../pages/Blog/BlogDetails/BlogDetail";
const BASE_URL = import.meta.env.BASE_URL;
const BlogBox = (props) => {
  function generateFlagName() {
    switch (props.flag) {
      case "javascript":
        return "JavaScript";
      case "development":
        return "Web Development";
      case "frontend":
        return "Front-End Development";
      case "backend":
        return "Back-End Development";
      case "shopify":
        return "Shopify";
      case "design":
        return "Web Design";
      case "seo":
        return "Search Engine Optimization";
      case "app":
        return "App Development";
      case "react":
        return "React Js";
      case "magento":
        return "Magento Development";
      case "sass":
        return "SaaS/PaaS ";
      case "clutch":
        return "Clutch";
      case "wordpress":
        return "WordPress Development";
      default:
        return "No flag provided!";
    }
  }

  return (
    <div
      className={`blog_content_box_wrapper ${
        props.orientation === "horizontal"
          ? "blog_content_box_wrapper--horizontal"
          : ""
      }`}
    >
      <div className="blog_content_img">
        <a href={BASE_URL+`blog/${props.pathUrl}`}>
          <div
            className="blog_content-bg-img"
            // style={{ backgroundImage: "url(" + props.blogImg + ")" }}
          >
            <img src={props.blogImg.src} alt="blog" />
          </div>
        </a>
      </div>

      <div className="blog_content_details">
        <div className="blog_content__info">
          <p className={`blog_content__tag blog_content__tag--${props.flag}`}>
            {generateFlagName()}
          </p>
          <span className="blog_content__author">
            {new Date(props.dateCreated).toLocaleDateString("en-GB", {
              hour12: false,
            })}
          </span>
          <span className="blog_content__author">eQuest Solutions</span>
        </div>
        <p className="blog_content-title">
          <a href={`/blog/${props.pathUrl}`}>{props.blogTitle}</a>
        </p>
        <div className="blog_content-desc a">
          <p>{props.blogDesc}</p>
        </div>
        <div className="blog_content-link-wrapper">
          <a href={`/blog/${props.pathUrl}`} className="blog_content-link">
            Read More{" "}
            <img
              src={rightArrow.src}
              alt="right arrow"
              loading="lazy"
              width={"13px"}
              height={"10px"}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
