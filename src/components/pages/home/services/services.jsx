import React from "react";
import ServiceHeader from "./serviceHeader";
import ServicesData from "../../../jsonData/Services.json";
import SingleService from "./singleService";
import { useHomepageDataQuery } from "@/features/homepage";

const Services = () => {
  const { data, isLoading, isFetching } = useHomepageDataQuery();
  const pageData = data?.data?.page_data;
  const serviceList = data?.data?.service_list || [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const servicesToRender = serviceList.length > 0 ? serviceList : ServicesData;

  return (
    <div className="global-padding">
      <ServiceHeader data={pageData} />
      <div className="box-layout overflow-hidden bottom-less service-padding">
        <div className="row px-3 px-lg-5 px-xl-4">
          {servicesToRender.map((service, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <SingleService service={service} imageurl={baseUrl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
