import { Tab, Tabs } from "react-bootstrap";
import technologyData from "./ComponentAPI/technologyAPI";
export default function () {
  return (
    <>
      <Tabs>
        {technologyData.map((val, index) => {
          return (
            <Tab eventKey={"tab-" + index} key={index} title={val.title}>
              <div className="technology__tab-wrapper">
                <div className="technology__img">
                  <img src={val.mainImg.src} alt={val.title} loading="lazy" />
                </div>
                <ul className="technology__icon-list list-unstyled">
                  {val.images.map((iconVal, iconIndex) => {
                    return (
                      <li key={iconIndex}>
                        <img
                          src={iconVal.image.src}
                          className="img-fluid"
                          alt=""
                          loading="lazy"
                          width={41}
                          height={41}
                        />
                        <span className="technology__icon-name">
                          {iconVal.title}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
}
