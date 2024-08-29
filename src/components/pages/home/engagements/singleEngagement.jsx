import Image from "next/image";
import Link from "next/link";
import React from "react";
const SingleEngagement = ({ engagement, imageurl }) => {
  const {
    id,
    uid,
    description,
    title,
    banner_path,
  } = engagement;
 
  return (
    <>
      <div className="services-style-one position-relative">
        <div className="d-flex justify-content-between align-content-center">
          <Image
            src={`${imageurl}${banner_path}`}
            alt="Icon"
            width={120}
            height={140}
          />
          <Link href={`/solution/${uid}`} className="d-none d-xl-flex">
            {/* <i className={"fas fa-long-arrow-right"}></i> */}
            <Image
              src={"/img/icon/arrow-up-right.svg"}
              width={80}
              height={80}
              alt="arrow up right"
            />
          </Link>
        </div>
        <h4> {title.length > 30 ? title.slice(0, 30) + "..." : title}</h4>
        <p className="limited-para-engage py-4">
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
        </p>
        <div
          className="read-more-btn-div position-absolute"
          style={{
            bottom: "30px",
          }}
        >
          <Link href={`/solution/${uid}`} className="read-more-btn">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleEngagement;
