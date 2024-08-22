import React from "react";
import TechnologyTabs from "./technologyTabs";
import TechnologiesHeader from "./technologiesHeader";
import { useHomepageDataQuery } from "@/features/homepage";


const transformTechnologyData = (technologyList, baseUrl) => {
  const result = {};

  technologyList.forEach(tech => {
    const category = tech.name; // Assuming `name` is the category
    if (!result[category]) {
      result[category] = [];
    }
    
    tech.technology_components.forEach(component => {
      result[category].push({
        name: component.name,
        img: `${baseUrl}${component.file_path}`, // Use baseUrl for the correct image path
      });
    });
  });

  return result;
};

const Technologies = () => {
  const { data, isLoading, isFetching } = useHomepageDataQuery();
  const pageData = data?.data?.page_data;
  const technologyList = data?.data?.technology_list || [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  
  // Transform the technology data
  const transformedTechnologyData = transformTechnologyData(technologyList, baseUrl);

  return (
    <div
      style={{
        paddingBottom: "140px",
        paddingTop: "140px",
      }}
    >
      <TechnologiesHeader data={pageData} />
      <TechnologyTabs techlist={transformedTechnologyData} />
    </div>
  );
};

export default Technologies;

