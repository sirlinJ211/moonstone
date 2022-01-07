import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { MdRoom } from "react-icons/md";
import "./contact.css";
import GoogleMapReact from "google-map-react";
import ContactForm from "../contact_form/contact_form";

const Contact = (props) => {
  const AnyReactComponent = () => (
    <div style={{ marginTop: "-1rem", marginLeft: "-1rem" }}>
      <div style={{ color: "red", fontSize: "1.5rem" }}>
        <MdRoom />
      </div>
    </div>
  );
  const defaultProps = {
    center: {
      lat: 34.07192,
      lng: -118.25969,
    },
    zoom: 17,
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div className="touch">
              <h2>GET IN TOUCH</h2>
            </div>
            <div className="address">
              <p>
                <a
                  href="https://www.google.com/maps/place/Moonstone+Studio+LA/@34.0718911,-118.2598065,21z/data=!4m5!3m4!1s0x80c2c74558420bbf:0xf6fc937bfa839eeb!8m2!3d34.0719298!4d-118.2597401"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Move to Google Map"
                >
                  718 Echo Park Ave
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/place/Moonstone+Studio+LA/@34.0718911,-118.2598065,21z/data=!4m5!3m4!1s0x80c2c74558420bbf:0xf6fc937bfa839eeb!8m2!3d34.0719298!4d-118.2597401"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Move to Google Map"
                >
                  Los Angeles, CA 90026
                </a>
              </p>
              <div className="googleMap">
                <div style={{ height: "30vh", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyDqh21zL_qoZBS_GhjHcw6RPswwpaOm7fY",
                      language: "en",
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={19}
                  >
                    <AnyReactComponent lat={34.07192} lng={-118.25969} />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
            <div className="numberEmail">
              <div className="icons">
                <FaPhone style={{ marginRight: "1rem" }} />
                <p>+1 (555) 223-2938</p>
              </div>
              <div className="icons">
                <FaEnvelope style={{ marginRight: "1rem" }} />
                <p>moonstonestudio@moonstonestudio.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
