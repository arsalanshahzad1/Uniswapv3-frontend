import React, { useState, } from 'react';
import Header from './Header';
import ethereumLogo from '../assets/ethereum-logo.png';
import downloadicon from '../assets/download-icon.png';
import { Modal } from './Modal';
import { SelectTokenModal } from './SelectTokenModal';
import { Link } from 'react-router-dom';
import dropdownIcon from '../assets/dropdown-logo.svg'

function LandingPage() {
  const [showModal, setShowModal] = useState({
    ethModal: false,
    tokenModal: false,
  });

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
      <div className="main-landing-page">
        <Header />
        <div className="landing-page-content">
          <div className="heading">
            <h1>
              Swap anytime,
              <br /> anywhere.
            </h1>
          </div>
          <div className="content-center">
            <div className="top">
              <div className="left">
                <p>Sell</p>
                <h1>0</h1>
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
                <button className='content-center-button'>{selectedToken ? selectedToken.name : "ETH"}<span><img src={dropdownIcon}/></span></button>
              </div>
            </div>
            <div className="download-icon">
              <img src={downloadicon} />
            </div>
            <div className="center">
              <div className="left">
                <p>Buy</p>
                <h1>0</h1>
              </div> 
              <div className="right">
                <SelectTokenModal />
              </div>
            </div>
            <div className="bottom">
              <Link to="/trade">
                <button> Get Started </button>
              </Link>
            </div>
          </div>
          <div className="description">
            <p>
              The largest onchain marketplace. Buy and sell crypto on Ethereum
              and 11+ other chains.
            </p>
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
}

export default LandingPage;
