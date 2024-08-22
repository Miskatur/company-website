import Link from "next/link";
import React from "react";

const SingleProject = ({ project }) => {
  const { id, thumb, projectLink, subTitle, title, shape } = project;

  return (
    <>
      {/* <div className="swiper-slide">
        <div className="project-style-one">
          <img src={`/img/portfolio/${thumb}`} alt="Thumb" />
          <div className="overlay">
            <span>{subTitle}</span>
            <h4>
              <Link href={`/${projectLink}/${id}#`}>{title}</Link>
            </h4>
          </div>
          <div className="shape">
            <img src={`/img/shape/${shape}`} alt="shape" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SingleProject;
