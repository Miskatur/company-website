import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubHeader = ({
  title1,
  title2,
  breadCrumb,
  breadCrumb1,
  bottomSpace,
  offsetClass,
}) => {
  return (
    <div className="breadcrumb-area bg-white bg-cover global-padding">
      <div className="">
        <div
          className={`breadcrumb-item ${bottomSpace ? bottomSpace : "pb-120"}`}
        >
          <div className="breadcrum-shape">
            <Image
              className="lock-image"
              src="/img/shape/lock.svg"
              alt="Image Not Found"
              width={352}
              height={373}
            />
          </div>
          <div className="row">
            <div className={`col-lg-8 ${offsetClass ? offsetClass : ""}`}>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li>
                    <Link href="/#">
                      <Image
                        src="/img/axil-custom/home.svg"
                        alt="logo Not Found"
                        style={{ marginTop: "-5px" }}
                        height={24}
                        width={24}
                      />{" "}
                      Home
                    </Link>
                  </li>
                  <li className={breadCrumb1 ? "" : "active"}>
                    {breadCrumb ? breadCrumb : "error"}
                  </li>
                  {breadCrumb1 && (
                    <li className="active">
                      {breadCrumb1 ? breadCrumb1 : "error"}
                    </li>
                  )}
                </ol>
              </nav>
              <h1>
                {title1 ? title1 : breadCrumb} <br />{" "}
                {title2 ? title2 : ""}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
