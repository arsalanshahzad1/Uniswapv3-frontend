import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import searchIcon from "../assets/search-icon.png";
import starIcon from "../assets/star-icon.png";
import protocolImg from "../assets/protocol-token-img.png";
import searchErrorIcon from "../assets/search-error-icon.png";
import ethereumlogo from "../assets/ethereum-logo.png";
import arrowIcon from "../assets/arrow-icon-eth.png";
import dropdownIcon from '../assets/dropdown-logo.svg'
import warningImage from "../assets/warning-popup.png";
import { WarningModal } from "./WarningModal";

const protocolTokens = [
  { ProtocolImg: protocolImg, name: "OX Protocol Token 1", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 1", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 2", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 1", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 3", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 4", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 1", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 4", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 1", symbol: "ZRX"},
  { ProtocolImg: protocolImg, name: "OX Protocol Token 1", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 2", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 1", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 3", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 4", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 1", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token 4", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
  { ProtocolImg: protocolImg, name: "OX Protocol Token", symbol: "ZRX" },
];

const ethereumArray = [
  { logo: ethereumlogo, name: "ETH"},
  { logo: ethereumlogo, name: "ETH" },
  { logo: ethereumlogo, name: "ETH" },
  { logo: ethereumlogo, name: "ETH" },
  { logo: ethereumlogo, name: "ETH" },
];

export function SelectTokenModal() {
  const [protocolTokensFiltered, setProtocolTokensFiltered] = useState(protocolTokens);
  const [showModal, setShowModal] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [selectedToken, setSelectedToken] = useState(null);
  const [searchedTokens, setSearchedTokens] = useState([]);

  const filterData = (value) => {
    const filtered = protocolTokens.filter((val) =>
      val.name.toLowerCase().includes(value?.toLowerCase())
    );
    setProtocolTokensFiltered(filtered);
  };

  const handleSelectToken = (token) => {
    setShowModal(false);
    setSelectedToken(token); 

    const existingTokens = JSON.parse(localStorage.getItem("searchedTokens")) || [];

    localStorage.setItem("searchedTokens", JSON.stringify([...existingTokens, token]));

    setSearchedTokens([...existingTokens, token]);
  };
      const [showWarn, setShowWarn] = useState(false);

      const handleSelectedToken = (token) => {
        if(!token.warningimage) {
          setSelectedToken(token); 
          localStorage.setItem("searchedTokens", JSON.stringify([token])); 
          setShowModal(false); 
        }
        else {
          setShowWarn(true)
        }
      };

  useEffect(() => {
    const existingTokens = JSON.parse(localStorage.getItem("searchedTokens")) || [];
    setSearchedTokens(existingTokens);
  }, []);

  useEffect(() => {
    filterData(searchVal); 
  }, [searchVal]);

  return (
    <>
      <button className='content-center-button' onClick={() => setShowModal(true)}>
        {selectedToken ? selectedToken.name : "Select Token"}
        <span><img src={dropdownIcon}/> </span>
      </button>

      {showModal && (
        <div className="select-token-modal-container">
          <div className="select-token-modal">
            <div className="cross-icon-modal">
              <img
                src={crossIcon}
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </div>
            <div className="main-modal-content">
              <h1>Select a token</h1>
              <div className="search-input">
                <img src={searchIcon} />
                <input
                  value={searchVal}
                  type="text"
                  placeholder="Search Tokens"
                  onChange={(e) => setSearchVal(e.target.value)}
                />
              </div>

              <div className="ethereum-array-container">
                {ethereumArray?.map((item, index) => (
                  <div className="ethereum-arr" key={index}>
                    <img src={item.logo} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>

              <div className="swap-network">
                <img src={arrowIcon} />
                <p>Swap across networks</p>
                <button>New</button>
              </div>

              <div className="ethereum-array-container">
                {ethereumArray.map((item, index) => (
                  <div className="ethereum-arr" key={index}>
                    <img src={item.logo} alt={item.name} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>

              <div className="star-token">
                <img src={starIcon} />
                <p>Tokens</p>
              </div>
              <div className="select-token-scroll">
                {protocolTokensFiltered?.length ? (
                  protocolTokensFiltered.map((item, index) => (
                    <div
                      className="select-token"
                      key={index}
                      onClick={() => handleSelectedToken(item)}
                    >
                      <div className="select-token-scroll-left">
                      <div className="left">
                        <img src={item.ProtocolImg} />
                      </div>
                      <div className="right-scroll">
                        <h2>{item.name}</h2>
                        <p>{item.symbol}</p>
                      </div>
                      </div>
                      <div className="select-token-scroll-right">
                        <img src={item.warningimage} />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="search-error">
                    <img src={searchErrorIcon} />
                    <p>No Results For {searchVal}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
       <WarningModal showModal={showWarn} setShowModal={setShowWarn} />
    </>
  );
}