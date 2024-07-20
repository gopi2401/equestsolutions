import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.scss";

import countryList from "../../utils/Country";
import serviceList from "../../utils/Service";

import contactImg from "../../assets/media/contact-left-img.svg";
import errorIcon from "../../assets/media/attention.svg";
import successIcon from "../../assets/media/check.svg";

const recaptchaRef = React.createRef();

const ContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [organization, setOrganization] = useState("");
  const [country, setCountry] = useState("Country");
  const [service, setService] = useState("Select Service");
  const [query, setQuery] = useState("");
  const [is_success, setSuccess] = useState(false);
  const [is_err, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        phone: `${contact}`,
        organization: `${organization}`,
        country: `${country}`,
        services: `${service}`,
        msg: `${query}`,
      }),
    };
    fetch(
      "https://linode25.eqserver.net/eq-2022-contact-email/send_mail.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.is_success === "true") {
          setSuccess(true);
        }
      })
      .catch((error) => {
        setError(true);
        console.error("There was an error!", error);
      });
  };

  const onHandleSubmit = (value) => {
    // console.log("Recaptcha value",value)
  };
  return (
    <div className="page_content page_padding">
      <section className="contact">
        <div className="container">
          <div className="row contact-form-row">
            <div className="col-lg-6">
              <div className="heading-wrapper">
                <h1 className="sec_heading sec_heading-medium">Write to Us</h1>
              </div>
              <div className="contact__img">
                <img src={contactImg.src} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <form className="contact-form form" onSubmit={handleSubmit}>
                <div className="row form-row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-input"
                      name="c_name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-input"
                      name="c_email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row form-row">
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-input"
                      name="c_number"
                      placeholder="Contact Number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-input"
                      name="c_org"
                      placeholder="Organization"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row form-row">
                  <div className="col-md-6">
                    <select
                      className="form-select"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    >
                      <option value="Country" disabled>
                        Country
                      </option>
                      {countryList.map((val) => (
                        <option value={val.name} key={val.name}>
                          {val.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select
                      className="form-select"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      <option value="Select Service" disabled>
                        Select Service
                      </option>
                      {serviceList.map((val) =>
                        val.subTitle.length > 0 ? (
                          <optgroup label={val.name} key={val.name}>
                            {val.subTitle.map((val1) => (
                              <option key={val1.name}>{val1.name}</option>
                            ))}
                          </optgroup>
                        ) : (
                          <option key={val.name}>{val.name}</option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <div className="row form-row">
                  <div className="col-md-12">
                    <textarea
                      rows={4}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="form-textarea"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                </div>
                <div className="row form-row">
                  <div className="recaptch-box">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6Lf6CRkUAAAAAHS8UAkmFJ7H-CWtJiTMQ1Jo_Vqi"
                      onChange={onHandleSubmit}
                    />
                  </div>
                </div>
                <div className="row form-row">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn_secondary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <div
                className="infobar success"
                style={{ display: is_success ? "block" : "none" }}
              >
                <div className="msg">
                  <div className="icon">
                    <img src={successIcon.src} className="icon-img" alt="" />
                  </div>
                  <span>Form Submitted Successfully, Thank You!</span>
                </div>
              </div>
              <div
                className="infobar error"
                style={{ display: is_err ? "block" : "none" }}
              >
                <div className="msg">
                  <div className="icon">
                    <img src={errorIcon.src} className="icon-img" alt="" />
                  </div>
                  <span>Please Fill all Details Correctly</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row contact-map-row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4384266661236!2d72.52765271455551!3d23.04438278494206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84eedbb60aa9%3A0xe306ad8ffeb2407c!2seQuest%20Solutions!5e0!3m2!1sen!2sin!4v1662550020857!5m2!1sen!2sin"
                title="eQuest map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
