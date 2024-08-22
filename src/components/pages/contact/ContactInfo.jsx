"use client";
import React from 'react';
import SocialShare from './socialShare';
import { useBusinesssettingsDataQuery } from '@/features/businesssettings';
import Preloader from '@/components/shared/Loader/Preloader';


const ContactInfo = () => {

    const imageurl = process.env.NEXT_PUBLIC_BASE_URL;

    const { data, isLoading, isFetching, error } = useBusinesssettingsDataQuery();


    const businessSettings = data?.data?.business_settings || {};
    const contactPhone = businessSettings.company_primary_phone || "+880123456789";
    const contactPhonesecondary = businessSettings.company_secondary_phone || "+880123456789";
    const contactEmail = businessSettings.company_email || "companyemail.com";
    const contactAddress = businessSettings.company_address || "4517 Washington Ave, Manchester, Kentucky 39495";
    const socialMediaLinks = {
        telegram: businessSettings.social_media_telegram,
        facebook: businessSettings.social_media_facebook,
        linkedin: businessSettings.social_media_linkedin,
        whatsapp: businessSettings.social_media_whatsapp,
    };


    return (
        <>
            {isLoading || isFetching ? (
                <Preloader isLoading={isLoading || isFetching} />
            ) : (<>
                <div className="contact-style-one-info">
                    <div className="">
                        <h2>Contact Information</h2>
                        <p>
                            Plan upon yet way get cold spot its week. <br /> Almost do am or limits hearts. Resolve parties.
                        </p>
                    </div>
                    <ul className="contact-address px-0">
                        <li className="">
                            <div className="content">
                                <h4 className="title">Phone</h4>
                                <a href={contactPhone}>{contactPhone}</a>
                                <br />
                                <a href={contactPhonesecondary}>{contactPhonesecondary}</a>
                            </div>
                        </li>
                        <li className="">
                            <div className="info">
                                <h4 className="title">Location</h4>
                                <p>
                                    {contactAddress}
                                </p>
                            </div>
                        </li>
                        <li className="" >
                            <div className="info">
                                <h4 className="title">Official Email</h4>
                                <a href={contactEmail}>{contactEmail}</a>
                            </div>
                        </li>
                        <li className="">
                            <div className="info">
                                <h4 className="title">Follow Us</h4>
                                <ul className="social-link px-0">
                                    <SocialShare socialMediaLinks={socialMediaLinks} />
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </>)}

        </>
    );
};

export default ContactInfo;