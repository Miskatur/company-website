import SubHeader from "@/components/shared/sub-header/subHeader";
import React from "react";
import WhyChoseUs from "./Third-portion/whyChoseUs";
import AboutOurCompany from "./FourthPortion/aboutOurCompany";
import Ideas from "./SecondPortion/ideas";
import IdeaText from "@/components/jsonData/axil-custom/IdeaText.json";
import IdeaHeading from "@/components/jsonData/axil-custom/IdeaHeading.json";
const ServiceDetails = () => {
  return (
    <div style={{ backgroundColor: "rgba(248, 246, 246, 1)" }}>
      <SubHeader
        breadCrumb="Services"
        breadCrumb1="Design"
        title1="Innovative Design, Exceptional Results"
        bottomSpace="pb-0"
      />
      <Ideas
        ideaHeading={IdeaHeading.description}
        ideaText={IdeaText[0].description}
        ideaText1={IdeaText[1].description1}
      />
      <WhyChoseUs
        ideaHeading={IdeaHeading.description}
        ideaText={IdeaText[0].description}
        ideaText1={IdeaText[1].description1}
      />
      <AboutOurCompany />{" "}
    </div>
  );
};

export default ServiceDetails;
