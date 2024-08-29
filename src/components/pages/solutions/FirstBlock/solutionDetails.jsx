"use client";
import React, { useState, useEffect } from "react";
import ExpandableList from "./ExpandableList";

const SolutionDetails = ({ slug, engagelist }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (slug) {
      const matchedIndex = engagelist?.findIndex(
        (engage) => engage?.uid === slug
      );
      setExpandedIndex(matchedIndex !== -1 ? matchedIndex : null);
    } else {
      setExpandedIndex(engagelist?.length > 0 ? 0 : null);
    }
  }, [engagelist, slug]);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  // Get the currently expanded item details
  const currentItem = expandedIndex !== null ? engagelist[expandedIndex] : null;
  console.log("engagelist", engagelist);
  return (
    <div className="experience-area overflow-hidden default-padding-top default-padding-bottom">
      <div className="global-padding ">
        <div className="experience-area-row row ">
          <div className="col-xl-5">
            <div className="experience-style-one">
              <h3 className="title">
                {currentItem ? currentItem?.title : "Default Title"}
              </h3>
              <p className="engagement-text">
                {currentItem ? currentItem?.description : "Default Description"}
              </p>
            </div>
          </div>

          <div className="col-xl-6 offset-xl-1">
            <div className="faq-style-one ">
              <div className="accordion pb-4" id="faqAccordion">
                {engagelist?.map((faq, index) => {
                  const parsedDetails = JSON.parse(faq?.details);
                  return (
                    <ExpandableList
                      key={faq?.uid}
                      faq={faq}
                      isExpanded={expandedIndex === index}
                      onExpand={() => handleExpand(index)}
                      nestedlist={parsedDetails}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetails;
