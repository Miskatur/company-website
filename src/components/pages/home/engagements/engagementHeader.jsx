import React from "react";

const EngagementHeader = ({ data }) => {

  const {
    third_section_title = "Our Engagement Models",
    third_section_description = "Discover our various engagement models for software development services and select the one that best fits your company and tech project. As Your partners, we strive to make everything as seamless as possible for you"
  } = data || {};

  return (
    <div
      className="box-layout container engagement"
      style={{
        paddingBottom: "120px",
      }}
    >
      <h1 className="engagement_title ">{third_section_title}</h1>
      <h4 className="engagement_subText ">{third_section_description}</h4>
    </div>
  );
};
export default EngagementHeader;
