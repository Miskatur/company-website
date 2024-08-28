import React from "react";

const TechnologiesHeader = ({data}) => {

  const {
    fourth_section_title = "Technologies We Work With",
    fourth_section_description = `Axilsoft uses the most dependable and cutting-edge technologies to
        develop and perform the whole operation.`,
  } = data || {};

  return (
    <div
      className="box-layout container engagement"
      style={{
        paddingBottom: "40px",
      }}
    >
      <h1 className="engagement_title ">{fourth_section_title}</h1>
      <h4 className="engagement_subText ">{fourth_section_description}</h4>
    </div>
  );
};

export default TechnologiesHeader;
