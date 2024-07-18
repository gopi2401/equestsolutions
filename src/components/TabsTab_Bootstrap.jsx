import { Tab, Tabs } from "react-bootstrap";
import technologyData from "./ComponentAPI/technologyAPI";
import Astroimage from "./astroimage.astro";
export default function (){
    return(<>  
    <Tabs>
              {technologyData.map((val, index) => {
                return (
                  <Tab eventKey={"tab-" + index} key={index} title={val.title}>
                    <div className="technology__tab-wrapper">
                      <div className="technology__img">
                        <image src={val.mainImg} alt={val.title} loading="lazy" />
                      </div>
                      <ul className="technology__icon-list list-unstyled">
                        {val.images.map((iconVal, iconIndex) => {
                          return (
                            <li key={iconIndex}>
                              <image
                                src={iconVal.image}
                                className="img-fluid"
                                alt=""
                                loading="lazy"
                                width={41}
                                height={41}
                              />
                              {/* <Astroimage img={iconVal.image} alt=""/> */}
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
       </>);
}