"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const About = ({ data, imageurl }) => {
  const [isOpen, setOpen] = useState(false);

  const {
    fifth_section_first_title = "Axilsoft in a minute",
    fifth_section_second_title = "Enthusiastic IT professionals",
    fifth_section_second_description = "We are a team of enthusiastic young IT professionals dedicated to delivering WOW experiences.",
    fifth_section_third_title = "Making a difference",
    fifth_section_third_description = "We are driven to make a difference in the world, one step at a time.",
    fifth_section_video_path
  } = data || {};

  const imagePath = !data || Object.keys(data).length === 0 || !fifth_section_video_path
  ? "img/banner/video.svg"  
  : `${imageurl}${fifth_section_video_path}`; 


  return (
    <div className="about-style-one-area ">
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
                  <p>
                   {fifth_section_second_description}
                  </p>
                </li>
                <li>
                  <h5>{fifth_section_third_title}</h5>
                  <p>
                    {fifth_section_third_description}
                  </p>
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
                className="thumb bg-cover "
                style={{
                  backgroundImage: `url(${imagePath})`,
                  borderRadius: "24px",
                }}
              >
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="tT2puL7IZOE"
                  onClose={() => setOpen(false)}
                />
                <div
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
