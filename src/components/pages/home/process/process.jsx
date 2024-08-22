import React from "react";
import SingleProcess from "./singleProcess";
import ProcessV1Data from "../../../jsonData/ProcessV1Data.json";

const Process = ({ processClass }) => {
  return (
    <>
      <div
        className={`process-style-one-area text-center default-padding-bottom ${processClass}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">How we work</h5>
                <h2 className="title">
                  Brighter future when <br /> strategically more prepared
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {ProcessV1Data.map((process) => (
              <div
                className="col-xl-3 col-lg-6 process-style-one"
                key={process.id}
              >
                <SingleProcess process={process} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
