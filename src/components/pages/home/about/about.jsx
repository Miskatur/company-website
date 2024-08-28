"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import arrowRight from "../../../../../public/img/icon/arrow-right.svg";
import bannerGradient from "../../../../../public/img/about/Subtract.svg";
const About = ({ data, imageurl }) => {
  const [isOpen, setOpen] = useState(false);

  const {
    fifth_section_first_title = "Axilsoft in a minute",
    fifth_section_second_title = "Enthusiastic IT professionals",
    fifth_section_second_description = "We are a team of enthusiastic young IT professionals dedicated to delivering WOW experiences.",
    fifth_section_third_title = "Making a difference",
    fifth_section_third_description = "We are driven to make a difference in the world, one step at a time.",
    fifth_section_video_path,
  } = data || {};

  const imagePath =
    !data || Object.keys(data).length === 0 || !fifth_section_video_path
      ? "img/banner/video.svg"
      : `${imageurl}${fifth_section_video_path}`;

  return (
    <div
      className="about-style-one-area "
      style={{
        paddingBottom: "140px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-12">
            <div
              className="about-style-one bg-dark text-light"
              style={{
                backgroundImage: "url(img/shape/7.png)",
                borderRadius: "16px",
              }}
            >
              <ul className="check-list-item">
                <li>
                  <h5>{fifth_section_second_title}</h5>
                  <p>{fifth_section_second_description}</p>
                </li>
                <li>
                  <h5>{fifth_section_third_title}</h5>
                  <p>{fifth_section_third_description}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className="about-style-one">
              <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">
                {fifth_section_first_title}
              </h2>
              <div
                className="thumb bg-cover position-relative"
                style={{
                  backgroundImage: `url(${imagePath})`,
                  // borderRadius: "24px",
                }}
              >
                {/* <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="tT2puL7IZOE"
                  onClose={() => setOpen(false)}
                /> */}
                {/* <div
                  className="mfp-iframe popup-youtube video-play-button with-text mt-20"
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => setOpen(true)}
                >
                  <div className="effect"></div>
                  <span>
                    <i className="fa-solid fa-play"></i> OUR STORY
                  </span>
                </div> */}
                <Link
                  href={"/about-us"}
                  className="position-absolute "
                  style={{
                    bottom: "40px",
                    right: "40px",
                    fontSize: "24px",
                    color: "white",
                    border: "1px solid white",
                    padding: "10px",
                    borderRadius: "8px",
                    zIndex: "100"
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <h4 className=" m-0">Read more about us | </h4>
                    <Image src={arrowRight} height={40} width={40} />
                  </div>
                </Link>
                <Image
                  className="position-absolute"
                  src={bannerGradient}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  height={500}
                  width={1920}
                  style={{ objectFit: "-moz-initial" ,zIndex: "10"}}
                  alt="gradient"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
