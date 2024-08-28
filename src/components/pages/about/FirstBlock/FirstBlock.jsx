"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const FirstBlock = ({ data, imageurl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    about_first_section_title = "Providing the best service In digital marketing",
    about_first_section_description = "Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfa-solidt. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.",
    about_first_section_image_path
  } = data || {};


  const imagePath = !data || Object.keys(data).length === 0 || !about_first_section_image_path
    ? "/img/axil-custom/1.svg"  
    : `${imageurl}${about_first_section_image_path}`;

    alert(imagePath);

  return (
    <>
      <div className="about-style-two-area global-padding default-padding-bottom">
        <div className="">
          <div className="row">
            <div className="col-lg-6 about-style-two pe-lg-6">
              {/* <div className=""> */}
              <Image
                src={imagePath}
                alt="Image Not Found"
                height={500}
                width={500}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
              {/* </div> */}
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40 ps-lg-5 d-flex flex-column justify-content-center align-items-start">
              <div className="about-two-info ">
                <h4 className="sub-title">About our company</h4>
                <h2 className="title">
                  {about_first_section_title}
                </h2>

                <p dangerouslySetInnerHTML={{ __html: about_first_section_description }} />

                <div className="about-grid-info">
                  <Link
                    href="/services#"
                    className="btn-round-animation"
                    style={{
                      color: isHovered ? "white" : "black",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Discover More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <ul className="list-info-item">
                    <li>
                      <h4>
                        <Link href="#">
                          Design <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link href="#">
                          Digital Solution{" "}
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link href="#">
                          Strategy <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link href="#">
                          Branding <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstBlock;
