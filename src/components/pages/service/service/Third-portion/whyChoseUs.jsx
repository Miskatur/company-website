import React from "react";
import Pic from "../../../../../../public/img/axil-custom/2.png";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WhyChoseUs = ({
  data = {},
  title,
  description,
  list = [],
  imageUrl,
  pic = Pic,
}) => {
  // Destructure with a fallback to avoid undefined errors
  const { choose_us_image_path } = data;

  const imagePath =
    !data || Object.keys(data).length === 0 || !choose_us_image_path
      ? pic
      : `${imageUrl}${choose_us_image_path}`;
  console.log("imagePath", imagePath);

  return (
    <div
      className="pt-40 pb-40 ps-140 ps-140 pe-140"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      <div className="global-padding">
        <div className="idea row ">
          <div className="why-choose-text-portion col-lg-6 order-2 order-lg-1 order-xl-1 align-items-start justify-content-center pe-lg-5">
            <p className="why-choose-heading">WHY CHOOSE US</p>
            <h2 className="main-heading">{title}</h2>

            <p
              className="idea-content"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <ul className="list-check px-0">
              {list.length > 0 ? (
                list.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>No benefits listed</li>
              )}
            </ul>
          </div>

          <div className="why-choose-pic-portion col-lg-6 order-1 order-lg-2 order-xl-2 d-flex justify-content-xl-start ps-lg-5">
            <LazyLoadImage
              effect="blur"
              className="idea-image mr-5"
              style={{
                height: "100%",
                width: "100%",
              }}
              alt="Idea Illustration"
              src={imagePath}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
