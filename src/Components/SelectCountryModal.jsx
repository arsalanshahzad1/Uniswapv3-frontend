import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import searchIcon from "../assets/search-icon.png";
import searchErrorIcon from "../assets/search-error-icon.png";
import indianFlag from "../assets/indian-flag.png";
import dropdownLogo from "../assets/dropdown-logo.svg";
import { countries } from "../constants";


export function SelectCountryModal() {
  const [showModal, setShowModal] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [filteredRegions, setFilteredRegions] = useState(countries);

  const filterData = (value) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRegions(filtered);
  };

  const handleSelectToken = (region) => {
    setSelectedRegion(region);
    setShowModal(false);
  };

  useEffect(() => {
    filterData(searchVal);
  }, [searchVal]);

  return (
    <>
      <div onClick={() => setShowModal(true)} className="indian-flag-button">
        {selectedRegion ? (
          <div className="country-flag-map">
          <img src={selectedRegion.flag} />
          <img src={dropdownLogo} alt="Dropdown Icon" />

          </div>
        ) : (
          <div className="indian-flag">
            <img src={indianFlag} alt="Indian Flag" />
            <img src={dropdownLogo} alt="Dropdown Icon" />
          </div>
        )} 
      </div>
      {showModal && (
        <div className="select-country-modal-container">
          <div className="select-country-modal">
            <div className="cross-icon-modal">
              <img
                src={crossIcon}
                alt="Close Modal"
                onClick={() => setShowModal(false)}
              />
            </div>
            <div className="main-modal-content">
              <div className="for-country-absolute">
              <h1>Select a Country</h1>
              <div className="country-input">
                <img src={searchIcon} alt="Search Icon" />
                <input
                  value={searchVal}
                  type="text"
                  placeholder="Search Country"
                  onChange={(e) => setSearchVal(e.target.value)}
                />
              </div>
              </div>
              <div className="indian-flag-scroll">
                {filteredRegions.length > 0 ? (
                  filteredRegions.map((country, index) => (
                    <div
                      className="select-country"
                      key={index}
                      onClick={() => handleSelectToken(country)}
                    >
                      <div className="left">
                        {/* <img src={country.flag} alt={`${country.name} Flag`} /> */}
                        <div className="flag" style={{backgroundImage: `url(${country.flag})`}} />
                      </div>
                      <div className="right">
                        <h2>{country.name}</h2>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="search-error">
                    <img src={searchErrorIcon} alt="No Results" />
                    <p>No Results For "{searchVal}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SelectCountryModal;
