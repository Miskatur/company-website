import React from "react";

const ServiceHeader = ({ data }) => {

  const {
    second_section_title = "Offshore Software Development: Tailored for your need",
    second_section_description = `Committed to delivering the best tailored software solutions and driving
        success through digital transformation consultancy. Axilsoft development
        teams are adaptable, flexible, and agile, ensuring top-quality software
        solutions through effective collaboration and adherence to requirements.`,
  } = data || {};


  return (
    <div className=" container engagement">
      <h1 className="engagement_title ">
        {second_section_title}
      </h1>
      <h4 className="engagement_subText ">
        {second_section_description}
      </h4>
    </div>
  );
};

export default ServiceHeader;
