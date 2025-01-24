import React, { useState } from "react";
import ethereumLogo from "../assets/ethereum-logo.png";
import downloadicon from "../assets/download-icon.png";
import { Modal } from "./Modal";
import { WarningModal } from "./WarningModal";
import { SelectTokenModal } from "./SelectTokenModal";
import infoLogo from "../assets/info-logo.png";
import dropdownLogo from "../assets/dropdown-logo.svg";
import warningicon from "../assets/token-detail-page-warning.png";
import containerIcon from '../assets/container-icon.png'
import copyIcon from '../assets/copy-icon-swap.png'


const data = [
  { id: 1, label: "Fee (0.25%)", value: "$912", infologo: infoLogo },
  {
    id: 2,
    label: "Network cost",
    value: "$3.01",
    infologo: infoLogo,
    oldPrice: "$912",
  },
  { id: 3, label: "Order routing", value: "Donatuz", infologo: infoLogo },
  { id: 4, label: "Price impact", value: "0%", infologo: infoLogo },
  { id: 5, label: "Max slippage", value: "0.50%", infologo: infoLogo },
];

const SwapTokenDetailPage = () => {
  const [showModal, setShowModal] = useState({
    ethModal: false,
    tokenModal: false,
  });

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

  const [selectedToken, setSelectedToken] = useState(
    JSON.parse(localStorage.getItem("searchedTokens")) || null
  );

  const handleTokenSelection = (token) => {
    setSelectedToken(token);
    localStorage.setItem("searchedTokens", JSON.stringify([token]));
  };

  return (
    <>
      <div className="content-trade">
        <div className="top">
          <div className="left">
            <p>Sell</p>
            <h1>734</h1>
            <p>$0</p>
          </div>
          <div
            className="right"
            onClick={() => handleShowModal("ethModal", true)}
          >
            <Modal
              showModal={showModal.ethModal}
              setShowModal={(value) => handleShowModal("ethModal", value)}
              setSelectedToken={handleTokenSelection}
            />
            <img src={ethereumLogo} />
            <button>
              ETH{" "}
              <span>
                {" "}
                <img src={dropdownLogo} />{" "}
              </span>
              {selectedToken ? selectedToken.name : "ETH"}
            </button>
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
          <div className="right">
            <SelectTokenModal />
          </div>
        </div>
        <div className="bottom">
          <button> Select a Token</button>
        </div>
        <div className="token-detail-page-warning">
          <div className="top-warning">
            <img src={warningicon} />
            <h6>Warning</h6>
          </div>
          <p>
            This token isn’t traded on leading U.S. centralized exchanges or
            frequently swapped on Donatuz. Always do your own research before
            proceeding.{" "}
          </p>
          <button>Learn more</button>
        </div>
        <div className="swap-info-details">
            <div className="swap-info-top">
                <p>Info</p>
            </div>
            <div className="swap-info-center">
                <div className="swap-info-center-left">
                    <img src={copyIcon}/>
                    <p>0x065C...0945</p>
                </div>
                <div className="swap-info-center-right">
                    <img src={containerIcon}/>
                    <p>Etherscan</p>
                </div>
                </div>
                <div className="swap-info-bottom">
                    <p>No token information available</p>
                </div>
            
        </div>
      </div>
      <Modal
        showModal={showModal.ethModal}
        setShowModal={(value) => handleShowModal("ethModal", value)}
        setSelectedToken={handleTokenSelection}
      />
    </>
  );
};

export default SwapTokenDetailPage;
