"use client";
import SolutionDetails from '@/components/pages/solutions/FirstBlock/solutionDetails';
import Preloader from '@/components/shared/Loader/Preloader';
import SubHeader from '@/components/shared/sub-header/subHeader';
import { useEngageDataQuery } from '@/features/engegementdetails';
import React from 'react';



const Solutions = () => {


    const { data, isLoading, isFetching } = useEngageDataQuery();

    const engagelist = data?.data?.engagement_list || [];

    const engagepagelist = data?.data?.page_data || [];


    return (
        <div className=' ' >
            {isLoading || isFetching ? (
                <Preloader isLoading={isLoading || isFetching} />
            ) : (<>
                <SubHeader title1={engagepagelist.engagement_first_title} breadCrumb={"Solutions"} bottomSpace="pb-0" />
                <SolutionDetails engagelist={engagelist} />
            </>)}


        </div>
    );
};

export default Solutions;