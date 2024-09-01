import React from "react";
import passion from "../../../../../public/img/axil-custom/passion.svg";
import Image from "next/image";

const SecondBlock = ({ data, imageurl }) => {
  const {
    about_second_section_title = "We are Passionate to make a change",
    about_second_section_description = "Only skill is not enough to excel; passion is essential. We are as skilled as we are passionate about what we do—software development. Creating custom software solutions is not just a task for us; it’s a way of life, nourishing our thirst for seeking out opportunities to develop ourselves. Our enthusiasm for IT and business extends into our leisure time as well. We actively discuss the latest technology with our peers and stay updated on all the latest business automation news.",
    about_second_section_image_path,
  } = data || {};

  return (
    <div
      className="pt-40 pb-40 ps-140 ps-140 pe-140 global-padding default-padding-top default-padding-bottom"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      <div className="">
        <div className="idea row">
          <div className="why-choose-text-portion col-lg-6 order-2 order-lg-1 order-xl-1 pe-lg-5">
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
                PASSION
              </span>
            </div>

            <h2 className="why-choose-main-heading">
              {about_second_section_title}
            </h2>

            <p
              className="why-choose-content"
              dangerouslySetInnerHTML={{
                __html: about_second_section_description,
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

          <div className="why-choose-pic-portion col-lg-6 order-1 order-lg-2 order-xl-2 ps-lg-5 ">
            <div>
              <Image
                className="passion-signature border-black position-absolute"
                src={"/img/axil-custom/passion.svg"}
                alt="Passion Signature"
                height={650}
                width={600}
                style={{
                  left: "5.5%",
                  zIndex: 0,
                  height: "82%",
                  width: "100%",
                }}
                quality={10}
              />

              <Image
                className=""
                src={`${imageurl}${about_second_section_image_path}`}
                alt="Idea Illustration"
                height={500}
                width={500}
                style={{ zIndex: 1, height: "100%", width: "100%" }}
                quality={80}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBlock;
