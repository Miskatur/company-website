"use client";
import SolutionDetails from '@/components/pages/solutions/FirstBlock/solutionDetails';
import Preloader from '@/components/shared/Loader/Preloader';
import SubHeader from '@/components/shared/sub-header/subHeader';
import { useEngageDataQuery } from '@/features/engegementdetails';
import React from 'react';


const Solutions = ({ params }) => {
    const { slug } = params;


    const imageurl = process.env.NEXT_PUBLIC_BASE_URL;



    const { data, isLoading, isFetching, error } = useEngageDataQuery();

    const engagelist = data?.data?.engagement_list || [];

    const engagepagelist = data?.data?.page_data || [];

    const matchedSolution = engagelist?.find(engage => engage.uid === slug);


    return (
        <div className=' ' >

            {isLoading || isFetching ? (
                <Preloader isLoading={isLoading || isFetching} />
            ) : (<>
                <SubHeader title1={engagepagelist?.engagement_first_title} breadCrumb="Solutions" breadCrumb1={matchedSolution?.title} bottomSpace="pb-0" />
                <SolutionDetails slug={slug} engagepagelist={engagepagelist} engagelist={engagelist} />

            </>)}

        </div>
    );
};

export default Solutions;