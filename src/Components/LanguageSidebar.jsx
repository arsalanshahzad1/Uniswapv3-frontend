import React, { useState } from "react";
import backArrow from "../assets/setting-sidebar-icon.png";
import arrowRight from "../assets/arrow-right-side.png";
import { countries } from "../constants";
const languages = [
  "Afrikaans",
  "Chinese, Simplified",
  "Arabic",
  "Chinese",
  "Arabic",
  "Chinese, Simplified",
  "Catalan",
];

const LanguageSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);


  return (
    <>
      {showSidebar && (
        <div className="language-sidebar">
          <div className="setting-sidebar-top">
            <img
              src={backArrow}
              alt="Back Arrow"
              onClick={() => {
                setShowSidebar(false);
              }}
              style={{ cursor: "pointer" }}
            />
            <p>Language</p>
            <p></p>
          </div>
          <div className="language-data-languages">
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        </div>

      )}
    </>
  );
};

export default LanguageSidebar;
