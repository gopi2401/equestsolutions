import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const BASE_URL = import.meta.env.BASE_URL.length > 1 ? import.meta.env.BASE_URL : ".";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [canRender, setCanRender] = useState(false);
  const [expanded, setExpanded] = useState("");
  const [width, setWidth] = useState(Number);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange());
    setCanRender(true);
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <>
      {canRender && (
        <header className={scroll ? "header header-fixed" : "header"}>
          <Navbar expanded={expanded} fixed="top">
            <Container>
              <Navbar.Brand>
                <a href={BASE_URL}>
                  <img
                    src={BASE_URL + "/images/logo-large-1.png"}
                    alt="eQuest Solutions"
                    className="img-fluid"
                    width={150}
                    height={78}
                  />
                </a>
              </Navbar.Brand>
              <Navbar.Toggle
                onClick={() =>
                  width <= 991 ? setExpanded(expanded ? "" : "expanded") : false
                }
                aria-controls="navbarScroll"
              >
                <span></span>
                <span></span>
                <span></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: "calc(100vh - 85px)" }}
                  navbarScroll
                >
                  <a
                    className={`nav-link ${({ isActive }) =>
                      isActive ? "active" : ""}`}
                    onClick={() =>
                      width <= 991
                        ? setExpanded(expanded ? "" : "expanded")
                        : false
                    }
                    href={BASE_URL}
                  >
                    Home
                  </a>

                  {/* onClick={() => width<=991 ? (setExpanded(expanded ? '' : 'expanded')) : false} for mobile*/}
                  <a className="nav-link" href={BASE_URL + "services"}>
                    Services
                  </a>

                  {/* <Link className="nav-link" to="/technologies">Technologies</Link> */}

                  {/* Uncomment below code to show services tab in navbar */}

                  {/* <Dropdown
                    id="navbarScrollingDropdown"
                    as={NavItem}
                    className="header_service_dropdown"
                    // onClick={(e) => e.target.classList.toggle("active")}
                  >
                    <Dropdown.Toggle
                      // className="nav-item__has-dropdown"
                      className={`nav-link ${({ isActive }) =>
                        isActive ? "active" : ""}`}
                      as={NavLink}
                      to="/services"
                    >
                      Services
                    </Dropdown.Toggle>
                    <div className="dropdown-menu">
                      <div className="header_service_dropdown_menu header_dropdown_menu">
                        <div className="row">
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/shopify.svg"
                                  }
                                  alt=""
                                  width="512"
                                  height="512"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/shopify-enterprise-services">
                                    Shopify Enterprise Services
                                  </Link>
                                </p>
                                <p>
                                  Scalable, secure, and customizable e-commerce
                                  solution for businesses.Contact us to learn
                                  more.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/e-commerce.svg"
                                  }
                                  alt=""
                                  width="512"
                                  height="512"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/ecommerce-development">
                                    E-commerce Development
                                  </Link>
                                </p>
                                <p>
                                  Customized solutions for scalable and
                                  user-friendly online stores. Contact us today.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/mobile.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/custom-application-development">
                                    Mobile Apps Development
                                  </Link>
                                </p>
                                <p>
                                  Engage your audience with innovative,
                                  user-friendly apps. Contact us to learn more.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/web_development.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/web-development-services">
                                    Web Development
                                  </Link>
                                </p>
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/icon-ui-ux.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/ui-ux-development">
                                    UI/UX Development
                                  </Link>
                                </p>
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/software_migration.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/software-migration">
                                    Software Migration
                                  </Link>
                                </p>
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/qa_services.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/qa-services">
                                    QA Services
                                  </Link>
                                </p>
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/offshore_dev_center.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/offshore-development-center">
                                    Offshore Dev. Center
                                  </Link>
                                </p>
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/cloud_solutions.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/cloud-solutions">
                                    Cloud Solutions
                                  </Link>
                                </p>
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL + "/images/sass.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/saas-solutions">
                                    SaaS Solutions
                                  </Link>
                                </p>
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/data-analytics.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/data-analysis">
                                    Data Analytics
                                  </Link>
                                </p>
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/icon-seo.svg"
                                  }
                                  width="512"
                                  height="512"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="services/seo">SEO</Link>
                                </p>
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-12">
                            <div className="header_menu_highlight">
                              <p className="header_menu-title">
                                <Link to="services/services-details">
                                  Need Customized Solution?
                                </Link>
                              </p>
                              <div className="header_menu-desc mb-3">
                                <p>
                                  Lorem Ipsum is simply dumm text of the
                                  printing and types etc ting industry
                                </p>
                              </div>
                              <div className="header_menu-cta">
                                <Link
                                  to="/contact"
                                  className="btn btn_white-stroke btn_sm"
                                >
                                  Let’s connect
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dropdown>

                  <Dropdown
                    id="navbarScrollingDropdown2"
                    as={NavItem}
                    className="header_technologies_dropdown"
                    onClick={(e) => e.target.classList.toggle("active")}
                  >
                    <Dropdown.Toggle
                      className={`nav-link ${({ isActive }) =>
                        isActive ? "active" : ""}`}
                      as={NavLink}
                      to="/technologies"
                    >
                      Technologies
                    </Dropdown.Toggle>
                    <div className="dropdown-menu">
                      <div className="header_technologies_dropdown_menu header_dropdown_menu">
                        <div className="row">
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/mobile-app.svg"
                                  }
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="/technologies">Mobile</Link>
                                </p>
                                <ul>
                                  <li>
                                    <Link to="/technologies">iOS</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Android</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Flutter</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">React Native</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Swift</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Kotlin</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/backend.svg"
                                  }
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="/technologies">Backend</Link>
                                </p>
                                <ul>
                                  <li>
                                    <Link to="/technologies">PHP</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Node js</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Python</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Gatsby</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Express js</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Next js</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/front-end.svg"
                                  }
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="/technologies/front-end-technology">
                                    Front End
                                  </Link>
                                </p>
                                <ul>
                                  <li>
                                    <Link to="/technologies/front-end-technology">
                                      HTML5
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies/front-end-technology">
                                      React
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies/front-end-technology">
                                      Vue
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies/front-end-technology">
                                      Typescript
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies/front-end-technology">
                                      Angular
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL + "/images/cms.svg"
                                  }
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="/technologies">CMS</Link>
                                </p>
                                <ul>
                                  <li>
                                    <Link to="/technologies">Wordpress</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Magento</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Shopify</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Drupal</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Joomla</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Laravel</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Sharepoint</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Umberco</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/database.svg"
                                  }
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="/technologies">Database</Link>
                                </p>
                                <ul>
                                  <li>
                                    <Link to="/technologies">MySQL</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Mongo DB</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">postgreSQL</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Redis</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Firebase</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Couchbase</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-12">
                            <div className="service_block_details">
                              <div className="service_icon">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/devops.svg"
                                  }
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="service_details">
                                <p className="service_title_text">
                                  <Link to="/technologies">DevOps</Link>
                                </p>
                                <ul>
                                  <li>
                                    <Link to="/technologies">AWS</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">
                                      Digital Ocean
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Linode</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Kubernetes</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">Jenkins</Link>
                                  </li>
                                  <li>
                                    <Link to="/technologies">
                                      Github Actions
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dropdown> */}

                  <a
                    className="nav-link"
                    href={BASE_URL + "about"}
                    onClick={() =>
                      width <= 991
                        ? setExpanded(expanded ? "" : "expanded")
                        : false
                    }
                  >
                    About us
                  </a>

                  <a
                    className="nav-link"
                    href={BASE_URL + "blog"}
                    onClick={() =>
                      width <= 991
                        ? setExpanded(expanded ? "" : "expanded")
                        : false
                    }
                  >
                    Blog
                  </a>

                  <a
                    rel="noreferrer"
                    href="https://forms.gle/vZ2sduLBcvTeZ61L9"
                    className="nav-link"
                    target="_blank"
                  >
                    Careers
                  </a>

                  {/* Uncomment below code to show Blog tab in navbar */}
                  {/* <NavLink
                    className="nav-link"
                    to="/blog"
                    onClick={() =>
                      width <= 991
                        ? setExpanded(expanded ? "" : "expanded")
                        : false
                    }
                  >
                    Blog
                  </NavLink> */}
                  <a href={BASE_URL + "contact"}>
                    <button
                      className="header_btn_link"
                      onClick={() =>
                        width <= 991
                          ? setExpanded(expanded ? "" : "expanded")
                          : false
                      }
                    >
                      Contact Us
                    </button>
                  </a>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      )}
    </>
  );
};

export default Header;
