import React, { useState } from "react";
import ethereumLogo from "../assets/ethereum-logo.png";
import downloadicon from "../assets/download-icon.png";
import { Modal } from "./Modal";
import { SelectTokenModal } from "./SelectTokenModal";
import warningError from '../assets/warning-small.png'
import dropdownIcon from '../assets/dropdown-logo.svg'
import upDownArrow from '../assets/upDownArrow.png'


const Limit = () => {
  const [showModal, setShowModal] = useState({
    ethModal: false,
    tokenModal: false,
  });

  const [currentTab, setCurrentTab] = useState("1 Day");

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleShowModal = (modalType, show) => {
    setShowModal((prev) => ({
      ...prev,
      [modalType]: show,
    }));
  };
  const handleWarningModal = (modalType, show) => {
    setShowModal((prev) => ({
      ...prev,
      [modalType]: show,
    }));
  };

    const [selectedToken, setSelectedToken] = useState(null);
  
    const handleTokenSelection = (token) => {
      setSelectedToken(token);
      // localStorage.setItem("searchedTokens", JSON.stringify([token])); 
    };

    return (
        <>
          <div className="limit-trade">
          <div className="top">
              <div className="left">
                <p>when 1 <span><img src={ethereumLogo}/></span> ETH is worth</p>
                <h1>734</h1>
                <div className="market">
                    <p>Market</p>
                    <p>+1%</p>
                    <p>+5%</p>
                    <p>+10%</p>
                </div>
              </div>
                <div className="limit-trade-top-right">
                  <img src={upDownArrow} />
              <div className="right" onClick={() => handleShowModal("ethModal", true)}>
                <img src={ethereumLogo} />
                <button >
                {selectedToken ? selectedToken.name : "USD"}
                
                </button>
              </div>
              </div>
            </div>
            <div className="center">
              <div className="left">
                <p>Sell</p>
                <h1>734</h1>
              </div>
              <div className="center-right">
              <div className="right" onClick={() => handleShowModal("ethModal", true)}>
                <img src={ethereumLogo} />
                <button >
                {selectedToken ? selectedToken.name : "USD"}
                 <span> <img src={dropdownIcon}/> </span>
                </button>
              </div>
              <p>Balance:0</p>
              </div>
            </div>
            <div className="download-icon">
              <img src={downloadicon} />
            </div>
            <div className="center">
              <div className="left">
                <p>Buy</p>
                <h1>132</h1>
                <p>$13,432.42</p>
              </div>
              <div className="center-right">
              <div className="right">
                <SelectTokenModal />
              </div>
              <p>Balance:0</p>
              </div>
            </div>
            <div className="expiry">
                <div className="expiry">Expiry</div>
                <div className="expiry-right">
                <p onClick={() => setCurrentTab("1 Day")} className={currentTab === "1 Day" ? "limit-active": ""}>1 Day</p>
                <p onClick={() => setCurrentTab("limit")} className={currentTab === "limit" ? "limit-active": ""}>1 Week</p>
                <p onClick={() => setCurrentTab("send")} className={currentTab === "send" ? "limit-active": ""}>1 Month</p>
                <p onClick={() => setCurrentTab("buy")} className={currentTab === "buy" ? "limit-active": ""}>1 Year</p>
                </div>
            </div>
            <div className="bottom">
              <button> Insufficient ETH </button>
            </div>
            <div className="warning-error">
                <div className="warning-left">
                <img src={warningError} />
                </div>
                <div className="right">
                    <p>Limits may not execute exactly when tokens reach the specified price.</p>
                    <button onClick={() => handleWarningModal(true)}>Learn more</button>
                </div>
            </div>
            
          </div>
          <Modal
                       showModal={showModal.ethModal}
                       setShowModal={(value) => handleShowModal("ethModal", value)}
                       setSelectedToken={handleTokenSelection} 
                       />
          {/* <WarningModal showModal={showModal} setShowModal={handleWarningModal}  /> */}
        </>
      );
    };

export default Limit