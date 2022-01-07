import GoogleMapReact from "google-map-react";

const Map = (props) => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 39.25028,
      lng: -119.95552,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDqh21zL_qoZBS_GhjHcw6RPswwpaOm7fY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={18}
      >
        <AnyReactComponent
          lat={39.25028}
          lng={-119.95552}
          text="Moonstone Studio"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
