import React from "react";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Ideas = ({ data = {}, ideaPic, ideaText, ideaHeading, imageUrl }) => {
  const { file_path } = data;

  return (
    <div
      className="pt-60 pb-60 pt-xl-140 pb-xl-150 ps-140 ps-140 pe-140"
      style={{ backgroundColor: "rgba(248, 246, 246, 1)" }}
    >
      <div className="global-padding">
        <div className="idea row">
          <div className="idea-pic-portion col-lg-6 pe-lg-5">
            {/* <Image
              className="idea-image"
              src={`${imageUrl}${file_path}`}
              alt="Idea Illustration"
              width={500}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />  */}
            <LazyLoadImage
              effect="blur"
              className="idea-image img-fluid"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
              alt="Idea file path"
              src={`${imageUrl}${file_path}`}
            />
          </div>
          <div className="idea-text-portion col-lg-6  d-flex flex-column align-items-start justify-content-center mt-4 mt-xl-0 ps-lg-5">
            <h2 className="main-heading ">{ideaHeading}</h2>
            <p
              className="idea-content"
              dangerouslySetInnerHTML={{ __html: ideaText }}
            />

            <button
              className="contact-now"
              style={{
                fontSize: "1rem",
              }}
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
