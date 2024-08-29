import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function TechnologyTabs({ techlist }) {
  // Set the initial tab to the first key in techlist
  const initialTab = Object.keys(techlist)[0] || "Mobile";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    // This ensures that the active tab is set correctly when techlist changes
    setActiveTab(initialTab);
  }, [techlist, initialTab]);

  return (
    <div className="tabs-container global-padding">
      <ul className="nav nav-underlined justify-content-center custom-tabs">
        {Object.keys(techlist).map((category) => (
          <li className="nav-item" key={category}>
            <a
              className={`nav-link ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
      <div className="technologies row justify-content-center">
        {techlist[activeTab]?.map((tech, index) => (
          <div
            className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 mb-2"
            key={`${tech.name}-${index}`}
          >
            <div className="tech-item p-0">
              <Image src={tech.img} alt={tech.name} height={160} width={160} />
            </div>
            <p className="text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
