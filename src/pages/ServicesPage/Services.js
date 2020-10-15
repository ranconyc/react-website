import React from "react";
import { homeObjThree } from "./Data";
import { InfoSection, Pricing } from "../../components";

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Services;
