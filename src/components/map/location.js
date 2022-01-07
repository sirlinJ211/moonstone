import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import googleMap from "../../service/googleMap";

const Location = () => {
  // const render = (status) => {
  //   return (
  //     <h1>
  //       <Status />
  //     </h1>
  //   );
  // };
  return (
    <div>
      <Wrapper apiKey="AIzaSyDqh21zL_qoZBS_GhjHcw6RPswwpaOm7fY">
        <Map />
      </Wrapper>
    </div>
  );
};

export default Location;
