import React from "react";
import BlogBox from "./BlogBox";
import "../../assets/css/component/Blog/BlogList/BlogList.scss";

function BlogContainerLarge(props) {
  return (
    <>
      {/* Custom row start:  This row is for outputing 2 boxes of 2/3rd length and 1 box to the side */}
      <div className="row custom_row_margin-lg">
        <div className="col-lg-12 col-md-12 col-12">
          {" "}
          {/* col-lg-8 col-md-12 col-12 */}
          <div className="row custom_row_margin-lg">
            {props.data.map((val, index) => {
              if (index > 0) return null;
              return (
                <div
                  className="col-lg-12 col-md-6 col-12 custom_col_padding-lg"
                  key={index}
                >
                  <BlogBox
                    orientation={
                      index === 0 || index === 1 ? "horizontal" : "vertical"
                    }
                    flag={val.flag}
                    blogImg={val.img}
                    blogTitle={val.title}
                    blogDesc={val.description}
                    pathUrl={val.pathUrl}
                    dateCreated={val.dateCreated}
                    detailHTML={val.detailHTML}
                  ></BlogBox>
                </div>
              );
            })}
          </div>
        </div>

        {/* {props.data.length > 2 && <div className="col-lg-4 col-md-6 col-12 custom_col_padding-lg">
          <BlogBox
            orientation={"vertical"}
            flag={props.data[2].flag}
            blogImg={props.data[2].img}
            blogTitle={props.data[2].title}
            blogDesc={props.data[2].description}
            pathUrl={props.data[2].pathUrl}
            dateCreated={props.data[2].dateCreated}
          ></BlogBox>
        </div>} */}
        {/* Custom row end */}

        {/* This row will output all other boxes */}
        {props.data.map((val, index) => {
          if (index <= 0) return null;
          return (
            <div
              className={"col-lg-4 col-md-6 col-12 custom_col_padding-lg"}
              key={index}
            >
              <BlogBox
                orientation="vertical"
                flag={val.flag}
                blogImg={val.img}
                blogTitle={val.title}
                blogDesc={val.description}
                pathUrl={val.pathUrl}
                dateCreated={val.dateCreated}
              ></BlogBox>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogContainerLarge;
