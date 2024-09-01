import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SingleEngagement = ({ engagement }) => {
  const { id, uid, description, title, banner_path } = engagement;
  console.log("🚀 ~ SingleEngagement ~ banner_path:", banner_path);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  console.log("🚀 ~ SingleEngagement ~ baseUrl:", baseUrl);

  return (
    <>
      <div className="services-style-one position-relative">
        <div className="d-flex justify-content-between align-content-center">
          {/* <Image
            src={`${baseUrl}${banner_path}`}
            alt="Icon"
            width={120}
            height={140}
            style={{ width: "auto" }}
          /> */}
          <LazyLoadImage
            effect="blur"
            className="img-fluid"
            style={{
              maxHeight: "7.5rem",
              maxWidth: "8.75rem",
            }}
            alt="Icon"
            src={`${baseUrl}${banner_path}`}
          />
          <Link href={`/solution/${uid}`} className="d-none d-xl-flex">
            {/* <i className={"fas fa-long-arrow-right"}></i> */}
            <Image
              src={"/img/icon/arrow-up-right.svg"}
              width={80}
              height={80}
              className="img-fluid"
              alt="arrow up right"
              loading="lazy"
            />
          </Link>
        </div>
        <h4> {title?.length > 30 ? title?.slice(0, 30) + "..." : title}</h4>
        <p className="limited-para-engage py-4">
          {description?.length > 150
            ? description?.slice(0, 150) + "..."
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
