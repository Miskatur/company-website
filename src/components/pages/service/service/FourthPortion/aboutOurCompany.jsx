import React from "react";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutOurCompany = ({
  data = {},
  title,
  description,
  list = [],
  imageUrl,
  pic,
}) => {
  const { about_company_image_path } = data;

  return (
    <div
      className=" pt-40 pb-40 ps-140 ps-140 pe-140"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)", marginTop: "100px" }}
    >
      <div className="global-padding">
        <div className="idea row">
          <div className="why-choose-pic-portion col-lg-6 order-1 order-lg-2 order-xl-1 pe-lg-5">
            {/* <img
              className="idea-image"
              src={`${imageUrl + about_company_image_path}`}
              alt="Idea Illustration"
              width={500}
              height={500}
              style={{
                height: "100%",
                width: "100%",
              }}
            /> */}
            <LazyLoadImage
              effect="blur"
              className="idea-image"
              src={`${imageUrl}${about_company_image_path}`}
              alt="Idea Illustration"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>

          <div className="about-text-portion col-lg-6 order-2 order-lg-2 order-xl-1 ps-lg-5">
            <p className="why-choose-heading">ABOUT OUR COMPANY</p>
            <h2 className="main-heading">{title}</h2>
            <p className="idea-content" style={{ width: "100%" }}>
              {description}
            </p>

            <div
              className="check-list"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "5px",
              }}
            >
              {list.length > 0 ? (
                list.map((item, index) => (
                  <p
                    className="about-content1"
                    style={{
                      color: "black",
                      marginBottom: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    key={index}
                  >
                    <Image
                      src={"/img/axil-custom/check-blue.png"}
                      alt="checked"
                      height={19}
                      width={19}
                    />{" "}
                    &nbsp; {item}
                  </p>
                ))
              ) : (
                <p>No benefits listed</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurCompany;
