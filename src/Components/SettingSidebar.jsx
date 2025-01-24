import React, { useState } from "react";
import backArrow from "../assets/setting-sidebar-icon.png";
import arrowRight from "../assets/arrow-right-side.png";
import LanguageSidebar from "./LanguageSidebar";
import CurrencySidebar from "./CurrencySidebar";
import { TestnetModeModal } from "./TestnetModeModal";

const SettingSidebar = ({ isTestnetMode, setIsTestnetMode }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const [languageSidebar, setLanguageSidebar] = useState(false);
  const handleLanguageSidebarToggle = () => {
    setLanguageSidebar(!languageSidebar);
  };

  const [currencySidebar, setCurrencySidebar] = useState(false);
  const handleCurrencySidebarToggle = () => {
    setCurrencySidebar(!currencySidebar);
  };

  const [showNetworkModal, setShowNetworkModal] = useState(false);

  return (
    <>
      {showSidebar && (
        <div className="setting-sidebar">
          <div className="setting-sidebar-top">
            <img
              src={backArrow}
              alt="Back Arrow"
              onClick={() => {
                setShowSidebar(false);
              }}
              style={{ cursor: "pointer" }}
            />
            <p>Settings</p>
            <p></p>
          </div>
          <div className="setting">
            <p>Hide small balances</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting">
            <p>Hide unknown tokens and NFTs</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting">
            <div className="setting-analytics">
              <p>Allow analytics</p>
              <span>
                We use anonymized data to enhance your experience with Uniswap
                Labs products.
              </span>
            </div>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting">
            <p>Testnet mode</p>
            {/* <label className="switch"  onClick={() => setShowNetworkModal(true)}>
              <input type="checkbox" checked={isTestnetMode} onChange={() => setIsTestnetMode(!isTestnetMode)} />
              <span className="slider"></span>
            </label> */}
            <label className="switch">
              <input
                type="checkbox"
                checked={isTestnetMode}
                onChange={() => {
                  const newMode = !isTestnetMode;
                  setIsTestnetMode(newMode); 
                  if (newMode) {
                    setShowNetworkModal(true); 
                  } else {
                    setShowNetworkModal(false); 
                  }
                }}
              />
              <span className="slider"></span>
            </label>
          </div>
          <TestnetModeModal
            showNetworkModal={showNetworkModal}
            setShowNetworkModal={setShowNetworkModal}
          />
          <div className="language-setting">
            <div className="left">
              <p>language</p>
            </div>
            <div className="right" onClick={handleLanguageSidebarToggle}>
              <p>English</p>
              <img src={arrowRight} />
            </div>
            {languageSidebar && <LanguageSidebar />}
          </div>
          <div className="currency-setting">
            <div className="left">
              <p>Currency</p>
            </div>
            <div className="right" onClick={handleCurrencySidebarToggle}>
              <p>USD</p>
              <img src={arrowRight} />
            </div>
            {currencySidebar && <CurrencySidebar />}
          </div>
          <div className="version">
            <p>
              Version <span>83472</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingSidebar;
