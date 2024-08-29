import React from "react";
import Pic from "../../../../../../public/img/axil-custom/3.png";
import Image from "next/image";

const AboutOurCompany = ({
  data = {},
  title,
  description,
  list = [],
  imageUrl,
  pic = Pic,
}) => {
  const { about_company_image_path } = data;

  const imagePath =
    !data || Object.keys(data).length === 0 || !about_company_image_path
      ? pic
      : `${imageUrl + about_company_image_path}`;
  console.log("imagePath about company", imagePath);
  console.log(
    "imagePath about company122",
    imageUrl + about_company_image_path
  );
  return (
    <div
      className=" pt-40 pb-40 ps-140 ps-140 pe-140"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)", marginTop: "100px" }}
    >
      <div className="global-padding">
        <div className="idea row">
          <div className="why-choose-pic-portion col-lg-6 order-1 order-lg-2 order-xl-1 pe-lg-5">
            <Image
              className="idea-image"
              src={imagePath}
              alt="Idea Illustration"
              width={500}
              height={500}
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
