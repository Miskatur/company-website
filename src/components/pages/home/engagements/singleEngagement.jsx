import { MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowIcon from "../../../../../public/img/icon/arrow-up-right.svg";
const SingleEngagement = ({ engagement, imageurl }) => {
  const {
    id,
    uid,
    serviceLink,
    icon1,
    icon2,
    description,
    title,
    banner_path,
  } = engagement;
  const imagePath =
    !engagement || Object.keys(engagement).length === 0 || !banner_path
      ? `/img/icon/${icon1}`
      : `${imageurl}${banner_path}`;

  return (
    <>
      <div className="services-style-one position-relative">
        <div className="d-flex justify-content-between align-content-center">
          <Image src={imagePath} alt="Icon" width={120} height={140} />
          <Link href={`/service/${uid}`} className="d-none d-xl-flex">
            {/* <i className={"fas fa-long-arrow-right"}></i> */}
            <Image src={arrowIcon} width={80} height={80} />
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
          <Link href={`/service/${uid}`} className="read-more-btn">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleEngagement;
