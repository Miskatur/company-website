import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleEngagement = ({ engagement, imageurl }) => {
  const { id, serviceLink, icon1, icon2, description, title, banner_path } =  engagement;


    const imagePath = !engagement || Object.keys(engagement).length === 0 || !banner_path
    ? `/img/icon/${icon1}`
    : `${imageurl}${banner_path}`; 



  return (
    <>
      <div className="services-style-one position-relative">
        <Image src={imagePath} alt="Icon" width={157} height={161}/>
        <Link href={`/${serviceLink}/${id}#`} className="btn-arrow">
          <i className={icon2}></i>
        </Link>
        <h4>{title}</h4>
        <p className="limited-para-engage py-4">{description}</p>
        <div className="read-more-btn-div">
          <Link href={`/#`} className="read-more-btn">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleEngagement;
