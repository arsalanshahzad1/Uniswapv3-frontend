import React, { useEffect, useState } from "react";

import dropdownLogo from "../assets/dropdown-logo.svg";
import { Modal } from "./Modal";
import infoLogo from "../assets/info-logo.png";
import protocolImg from "../assets/protocol-token-img.png";

const feeTiers = [
  {
    fee: 100,
    Description: "Best for very stable pairs.",
    Balance: "0 TVL",
  },
  {
    fee: 500,
    Description: "Best for stable pairs.",
    Balance: "0 TVL",
  },
  {
    fee: 3000,
    Description: "Best for most pairs.",
    Balance: "0 TVL",
  },
  {
    fee: 10000,
    Description: "Best for exotic pairs.",
    Balance: "0 TVL",
  },
];

const token0 = [
  {
    ProtocolImg: protocolImg,
    name: "My Token 1",
    symbol: "ZRX",
    address: "0xDd5Aaff4fBBa7d2F9Ba85a0e73EA4EAaB9C5c0D1",
  },
];

const token1 = [
  {
    ProtocolImg: protocolImg,
    name: "My Token 2",
    symbol: "ZRX",
    address: "0xc79fC1c343BfF0Bb6b401613e3211F0F26FbD5E4",
  },
];

const SelectPair = ({ poolPayload, setPoolPayload, setCurrentTab }) => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedToken1, setSelectedToken1] = useState(null);
  const [selectedToken2, setSelectedToken2] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTokenSelection1 = (token) => {
    setPoolPayload((prev) => ({
      ...prev,
      token0: token,
    }));
  };

  const handleTokenSelection2 = (token) => {
    setPoolPayload((prev) => ({
      ...prev,
      token1: token,
    }));
  };

  const handleSelectFeeTier = (feeTier) => {
    setPoolPayload((prev) => ({
      ...prev,
      feeTier: feeTier,
    }));
  };

  useEffect(() => {
    setSelectedToken1(poolPayload.token0)
    setSelectedToken2(poolPayload.token1)
  }, [poolPayload.token0, poolPayload.token1])

  console.log(selectedToken1, selectedToken2)

  return (
    <>
      <div className="select-pair">
        <div className="heading">
          <h1>Select Pair</h1>
          <p>
            Choose the tokens you want to provide liquidity for. You can select
            tokens on all supported networks.
          </p>
        </div>
        <div className="select-pair-tokens">
          <div className="left" onClick={() => setShowModal1(true)}>
            <p>{selectedToken1 ? selectedToken1.name : "Select Token"}</p>
            <img src={dropdownLogo} />
          </div>
          <div className="right" onClick={() => setShowModal2(true)}>
            <p>{selectedToken2 ? selectedToken2.name : "Select Token"}</p>
            <img src={dropdownLogo} />
          </div>
        </div>
        <div className="free-tier">
          <h1>free tier</h1>
          <p>
            The amount earned providing liquidity. Choose an amount that suits
            your risk tolerance and strategy.
          </p>
        </div>
        <div className="fees-earn">
          <div className="left">
            <p>{poolPayload.feeTier / 10000}% fee tier</p>
            <p>The % you will earn in fees.</p>
          </div>
          <div className="right" onClick={toggleDropdown}>
            <p>{isDropdownOpen ? "Less" : "More"}</p>
            <img src={dropdownLogo} />
          </div>
        </div>

        {isDropdownVisible && (
          <div className="fees-earn-dropdown-content">
            {feeTiers.map((item) => (
              <div
                className={`fees-earn-dropdown ${
                  poolPayload.feeTier === item.fee && "selected"
                }`}
                key={item.id}
                onClick={() => handleSelectFeeTier(item.fee)}
              >
                {poolPayload.feeTier === item.fee && (
                  <div className={"check-mark"}>✓</div>
                )}
                <p>{item.fee / 10000}%</p>
                <p>{item.Description}</p>
                {/* <p>{item.Balance}</p> */}
              </div>
            ))}
          </div>
        )}
        <button disabled={!poolPayload.token0 || !poolPayload.token1 || !poolPayload.feeTier} className="select-pair-button" onClick={() => setCurrentTab("two step")}>
          Continue
        </button>
      </div>
      {selectedToken1 && selectedToken2 && (
        <div className="select-pair-bootom-onclick">
          <div className="left">
            <img src={infoLogo} />
          </div>
          <div className="right">
            <h6>Creating new pool</h6>
            <p>
              Your selections will create a new liquidity pool which may result
              in lower initial liquidity and increased volatility. Consider
              adding to an existing pool to minimize these risks.
            </p>
          </div>
        </div>
      )}
      <Modal
        tokens={token0}
        showModal={showModal1}
        setShowModal={setShowModal1}
        selectedToken={selectedToken1}
        setSelectedToken={handleTokenSelection1}
      />

      <Modal
        tokens={token1}
        showModal={showModal2}
        setShowModal={setShowModal2}
        selectedToken={selectedToken2}
        setSelectedToken={handleTokenSelection2}
      />
    </>
  );
};

export default SelectPair;
