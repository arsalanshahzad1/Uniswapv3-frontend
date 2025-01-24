import React, { useState } from "react";
import backArrow from "../assets/setting-sidebar-icon.png";
import arrowRight from "../assets/arrow-right-side.png";
import { countries } from "../constants";

const languages = [
  "India",
  "Canada",
  "America",
];

const CurrencySidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      {showSidebar && (
        <div className="currency-sidebar">
          <div className="setting-sidebar-top">
            <img
              src={backArrow}
              alt="Back Arrow"
              onClick={() => {
                setShowSidebar(false);
              }}
              style={{ cursor: "pointer" }}
            />
            <p>Currency</p>
            <p></p>
          </div>
          <div className="currency-data-currencies">
            <ul className="country-list">
              {countries?.map((country, index) => (
                <li key={index} className="list-item">
                  <div className="flag" style={{backgroundImage: `url(${country.flag})`}} />
                  <p>{country.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrencySidebar;