"use client";
import AboutOurCompany from '@/components/pages/service/service/FourthPortion/aboutOurCompany';
import Ideas from '@/components/pages/service/service/SecondPortion/ideas';
import WhyChoseUs from '@/components/pages/service/service/Third-portion/whyChoseUs';
import SubHeader from '@/components/shared/sub-header/subHeader';
import React from 'react';
import IdeaText from "@/components/jsonData/axil-custom/IdeaText.json";
import IdeaHeading from "@/components/jsonData/axil-custom/IdeaHeading.json";
import { useServiceDetailsQuery } from '@/features/servicedetails';
import Preloader from '@/components/shared/Loader/Preloader';


const SingleService = ({ params }) => {
    const { slug } = params;

    console.log('id please', slug);

    const { data, error, isLoading, isFetching } = useServiceDetailsQuery(slug);


    //// Ideas

    const pageData = data?.data?.service_details;

    const ideaHeading = pageData?.title || IdeaHeading.description;
    const ideaText = pageData?.description || IdeaText[0].description;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


    ///////// why choose us 
    const why_choose_us = data?.data?.why_choose_us;

    const choose_us_title = why_choose_us?.choose_us_title || 'Get benefits and advantages market goal';
    const choose_us_description = why_choose_us?.choose_us_description || 'Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.';

    const choose_us_list = why_choose_us?.choose_us_list ? JSON.parse(why_choose_us.choose_us_list) : [];


    //// About us
    const about_our_company = data?.data?.about_our_company;

    const about_company_title = about_our_company?.about_company_title || 'Working together to deliver value';
    const about_company_description = about_our_company?.about_company_description || 'Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.';

    const about_company_list = about_our_company?.about_company_list ? JSON.parse(about_our_company.about_company_list) : [];




    return (
        <div className='' style={{ backgroundColor: "rgba(248, 246, 246, 1)" }}>
            {isLoading || isFetching ? (
                <Preloader isLoading={isLoading || isFetching} />
            ) : (<>
                <SubHeader
                    breadCrumb="Services"
                    breadCrumb1={ideaHeading}
                    title1={ideaHeading}
                    bottomSpace="pb-0"
                />
                <Ideas
                    data={pageData}
                    ideaHeading={ideaHeading}
                    ideaText={ideaText}
                    ideaText1={ideaText}
                    imageUrl={baseUrl}
                />
                <WhyChoseUs
                    data={why_choose_us}
                    title={choose_us_title}
                    description={choose_us_description}
                    list={choose_us_list}
                    imageUrl={baseUrl}
                />
                <AboutOurCompany

                    data={about_our_company}
                    title={about_company_title}
                    description={about_company_description}
                    list={about_company_list}
                    imageUrl={baseUrl}

                />
            </>)}

        </div>
    );
};

export default SingleService;
