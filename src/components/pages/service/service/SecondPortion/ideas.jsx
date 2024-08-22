import React from "react";
import Pic from "../../../../../../public/img/axil-custom/1.png";
import Image from "next/image";

const Ideas = ({ data = {}, ideaPic = Pic, ideaText, ideaHeading, imageUrl }) => {
  const { file_path } = data;

  const imagePath = !data || Object.keys(data).length === 0 || !file_path
    ? ideaPic
    : `${imageUrl}${file_path}`;

  return (
    <div
      className="pt-60 pb-60 pt-xl-140 pb-xl-150 ps-140 ps-140 pe-140"
      style={{ backgroundColor: "rgba(248, 246, 246, 1)" }}
    >
      <div className="global-padding">
        <div className="idea row">
          <div className="idea-pic-portion col-lg-6 pe-lg-5">
            <Image
              className="idea-image"
              src={imagePath}
              alt="Idea Illustration"
              width={500}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="idea-text-portion col-lg-6  d-flex flex-column align-items-start justify-content-center mt-4 mt-xl-0 ps-lg-5">
            <h2 className="main-heading ">{ideaHeading}</h2>
            <p className="idea-content" dangerouslySetInnerHTML={{ __html: ideaText }} />

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
