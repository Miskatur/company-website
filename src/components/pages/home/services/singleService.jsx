import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleService = ({ service, imageurl }) => {
  const { title, description, file_two_path, id, serviceLink, icon1, uid } =
    service;

  return (
    <div className="singleService position-relative">
      {/* <Image src={`${imageurl}${file_two_path}`} width={80} height={80} alt="Icon" loading="lazy"/> */}
      <LazyLoadImage
        effect="blur"
        className="img-fluid"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
        alt="Service Icon"
        src={`${imageurl}${file_two_path}`}
      />
      <h4>{title}</h4>
      <p
        className="limited-para"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {/* {description} */}

      <div className="absolute-bottom">
        <hr style={{ width: "85%" }} />
        <Link
          href={`/service/${uid}`}
          className="d-flex align-align-items-center justify-content-between pt-2"
          style={{ width: "85%" }}
        >
          <span className="learn-more">Learn more</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
