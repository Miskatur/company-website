import React from "react";
import EngagementData from "../../../jsonData/EngagementData.json";
import SingleEngagement from "./singleEngagement";
import EngagementHeader from "./engagementHeader";
import Link from "next/link";
import { useHomepageDataQuery } from "@/features/homepage";



const Engagements = () => {

  const { data, isLoading, isFetching } = useHomepageDataQuery();
  const pageData = data?.data?.page_data;

  const engagementlist = data?.data?.engagement_list || [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const engagementsToRender = engagementlist.length > 0 ? engagementlist : EngagementData;


  return (
    <div className="custom-engagement-padding">
      <EngagementHeader data={pageData}/>
      <div
        className=" overflow-hidden  bg-gray bg-cover mx-1 mx-lg-0"
        style={{
          backgroundImage: "url(/img/shape/banner-2.svg)",
          borderRadius: "32px",
        }}
      >
        <div className="engagement-padding ">
          <div className="row mx-lg-4 my-lg-2 mx-xl-1 my-xl-1 mx-1 my-4 gap-5 gap-md-0">
            {engagementsToRender?.slice(0, 3)?.map((engagement) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 "
                key={engagement?.id}
              >
                <SingleEngagement engagement={engagement} imageurl={baseUrl}/>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <div className="view-all-div mb-4 mb-lg-0 mt-lg-4 mt-xl-5">
              <Link href={`/solutions`} className="view-all-btn">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagements;
