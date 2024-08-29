"use client";
import React, { Suspense } from 'react';
import Banner from "@/components/pages/home/banner/banner";
import Engagements from '@/components/pages/home/engagements/engagements';
import Services from '@/components/pages/home/services/services';
import Technologies from '@/components/pages/home/technologies/technologies';
import About from '@/components/pages/home/about/about';
import { useHomepageDataQuery } from '@/features/homepage';
import Preloader from '@/components/shared/Loader/Preloader';

const Home = () => {
  const { data, isLoading, isFetching } = useHomepageDataQuery();
  const pageData = data?.data?.page_data;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className=''>
      {isLoading || isFetching ? (
        <Preloader isLoading={isLoading || isFetching} />
      ) : (
        <>
          <Banner data={pageData} imageurl={baseUrl} />
          <Services />
          <Engagements />
          <Technologies />
          <About data={pageData} imageurl={baseUrl} />
          {/* <Process /> */}
          {/* <Project /> */}
          {/* <WhyChooseUsV1 chooseClass="bg-gray" /> */}
          {/* <Team /> */}
        </>
      )}
    </div>
  );
}

export default Home;
