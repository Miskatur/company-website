import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleService = ({ service, imageurl }) => {

  const { title, description, file_path, id, serviceLink, icon1, uid } = service;

 const imagePath = !service || Object.keys(service).length === 0 || !file_path
    ? `/img/icon/${icon1}  `
    : `${imageurl}${file_path}`; 




  
  return (
    <div className="singleService position-relative">
      <Image src={imagePath} width={80} height={80} alt="Icon" />
      <h4>{title}</h4>
      <p className="limited-para" dangerouslySetInnerHTML={{ __html: description }} />
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
