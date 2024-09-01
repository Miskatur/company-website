import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleTeam = ({ team, imageurl }) => {
  const { name, designation, image_path } = team;

  return (
    <>
      <div className="team-style-two">
        <div className="thumb">
          {/* <Image
            src={`${imageurl}${image_path}`}
            alt="Image Not Found"
            width={300}
            height={370}
            style={{ color: "transparent" }}
          /> */}
          <LazyLoadImage
            effect="blur"
            className="idea-image img-fluid"
            width={300}
            height={370}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
            alt="Team member image"
            src={`${imageurl}${image_path}`}
          />
          <div className="team-info">
            <div className="content">
              <h5>
                <Link href="#">
                  {name?.length > 17 ? `${name?.slice(0, 14)}...` : name}
                </Link>
              </h5>
              <span style={{ fontSize: "14px" }}>{designation}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTeam;
