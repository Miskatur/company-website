import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTeam = ({ team, imageurl }) => {
  const { name, designation, image_path } = team;

  const imagePath = !team || Object.keys(team).length === 0 || !image_path
    ? `img/team/1.jpg`  
    : `${imageurl}${image_path}`;



  return (
    <>
      <div className="team-style-two">
        <div className="thumb">
          <Image src={imagePath} alt="Image Not Found" width={300} height={370} />
          <div className="team-info">
            <div className="content">
              <h5>
                <Link href="#">{name.length > 17 ? `${name.slice(0, 14)}...` : name}</Link>
              </h5>
              <span style={{fontSize:'14px'}}>{designation}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTeam;
