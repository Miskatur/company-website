import React from "react";
import Pic from "../../../../../public/img/axil-custom/3.svg";
import ourStory from "../../../../../public/img/axil-custom/our-story.svg";
import Image from "next/image";

const ThirdBlock = ({ data, imageurl, pic = Pic }) => {
  const {
    about_third_section_title = "Dreamers to create an Impact",
    about_third_section_description = "Everybody dreams of being a part of something big but falls short in investing the time and passion required to build it. We have taken this ideology to heart - and it is reflected in our work. The harmony flows through us, fuels our ambitions, and our very way of life. It lets us break barriers set by others and achieve something that is far greater. We work tirelessly not because we want to make a name for ourselves but rather to leave a positive impact on mankind. This is who we are. We are #TeamAxilweb.",
    about_third_section_image_path,
  } = data || {};

  const imagePath =
    !data || Object.keys(data).length === 0 || !about_third_section_image_path
      ? pic
      : `${imageurl}${about_third_section_image_path}`;

  return (
    <div
      className="pt-40 pb-40 ps-140 ps-140 pe-140 global-padding"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      <div className="">
        <div className="idea row">
          <div className="why-choose-text-portion col-lg-6 order-2 order-lg-2 order-xl-2 ps-lg-5">
            <div style={{ display: "inline-block", width: "100%" }}>
              <div
                style={{
                  display: "inline-block",
                  width: "44px",
                  marginLeft: "10px",
                  verticalAlign: "middle",
                  backgroundColor: "rgba(44, 102, 250, 1)",
                  height: "2px",
                }}
              />{" "}
              &nbsp;
              <span
                className="sub-title"
                style={{
                  verticalAlign: "middle",
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "48px",
                }}
              >
                OUR STORY
              </span>
            </div>

            <h2 className="why-choose-main-heading">
              {about_third_section_title}
            </h2>

            <p
              className="why-choose-content"
              dangerouslySetInnerHTML={{
                __html: about_third_section_description,
              }}
            />

            <div
              style={{ display: "flex", alignItems: "center", width: "100%" }}
            >
              <button className="contact-now" style={{ width: "fit-content" }}>
                Contact Now
              </button>
              <hr
                style={{
                  flex: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  height: "2px",
                  border: "none",
                  verticalAlign: "middle",
                  marginTop: "35px",
                }}
              />
            </div>
          </div>

          <div className="why-choose-pic-portion col-lg-6 order-1 order-lg-1 order-xl-1 position-relative pe-lg-5">
            <div>
              <Image
                className="passion-signature"
                src={"/img/axil-custom/our-story.svg"}
                alt="Our Story Signature"
                height={700}
                width={800}
                style={{
                  position: "absolute",
                  height: "120%",
                  width: "100%",
                  zIndex: 0,
                  left: "-43%",
                  bottom: "0%",
                  objectFit: "-moz-initial",
                }}
              />

              <Image
                className="idea-image"
                src={imagePath}
                alt="Our Story Image"
                height={600}
                width={900}
                style={{ zIndex: 1, height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
