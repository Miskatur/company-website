"use client";
import SubHeader from "@/components/shared/sub-header/subHeader";
import React from "react";
import FirstBlock from "./FirstBlock/FirstBlock";
import SecondBlock from "./SecondBlock/SecondBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";
import Team from "../home/team/team";
import { useAboutDataQuery } from "@/features/aboutpage";
import Preloader from "@/components/shared/Loader/Preloader";

const About = () => {
  const { data, isLoading, isFetching } = useAboutDataQuery();
  const pageData = data?.data?.page_data;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log("baseUrl", baseUrl);
  return (
    <div style={{ backgroundColor: "rgba(248, 246, 246, 1)" }}>
      {isLoading || isFetching ? (
        <Preloader isLoading={isLoading || isFetching} />
      ) : (
        <>
          <SubHeader breadCrumb="About-Us" bottomSpace="pb-0" />
          <FirstBlock data={pageData} imageurl={baseUrl} />
          <SecondBlock data={pageData} imageurl={baseUrl} />
          <ThirdBlock data={pageData} imageurl={baseUrl} />
          <Team />
        </>
      )}
    </div>
  );
};

export default About;
