import React, { useEffect, useState } from "react";
import ethereumLogo from "../assets/ethereum-logo.png";
import downloadicon from "../assets/download-icon.png";
import { Modal } from "./Modal";
import { WarningModal } from "./WarningModal";
import { SelectTokenModal } from "./SelectTokenModal";
import infoLogo from "../assets/info-logo.png";
import dropdownLogo from "../assets/dropdown-logo.svg";
import { erc20Approve, quoteFunction, swapFunction } from "../utils/ethersScripts";
import { qouterAddress, routerAddress } from "../client";
import protocolImg from "../assets/protocol-token-img.png";
import { useActiveAccount } from "thirdweb/react";
import { ethers } from "ethers";

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

const Swap = () => {
  const account = useActiveAccount();
  const address = account?.address;
  const [showModal, setShowModal] = useState({
    ethModal: false,
    tokenModal: false,
  });
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedToken1, setSelectedToken1] = useState(null);
  const [selectedToken2, setSelectedToken2] = useState(null);
  const [amountIn, setAmountIn] = useState(null);
  const [amountOut, setAmountOut] = useState(null);
  const [quotePayload, setQuotePayload] = useState({});
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedToken, setSelectedToken] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleShowModal = (modalType, show) => {
    setShowModal((prev) => ({
      ...prev,
      [modalType]: show,
    }));
  };

  const handleTokenSelection = (token) => {
    setSelectedToken(token);
    // localStorage.setItem("searchedTokens", JSON.stringify([token]));
  };

  const handleTokenSelection1 = (token) => {
    setQuotePayload((prev) => ({
      ...prev,
      token0: token,
    }));
  };

  const handleTokenSelection2 = (token) => {
    setQuotePayload((prev) => ({
      ...prev,
      token1: token,
    }));
  };

  useEffect(() => {
    setSelectedToken1(quotePayload.token0);
    setSelectedToken2(quotePayload.token1);
  }, [quotePayload.token0, quotePayload.token1]);

  console.log("quotePayload ", quotePayload);

  const handleGetQuote = (amountIn) => {
    setTimeout(async () => {
      setAmountIn(amountIn);
      try {
        const returnAmount = await quoteFunction(
          qouterAddress,
          quotePayload.token0.address,
          quotePayload.token1.address,
          3000,
          amountIn
        );
        setAmountOut(returnAmount);
        console.log(`amount out from quote function: ${returnAmount}`);
      } catch (error) {
        console.log(error);
      }
    }, 1500);
  };

  const handleSwap = async () => {
    try {
      await erc20Approve(
        quotePayload.token0.address,
        routerAddress,
        ethers.parseUnits(amountIn.toString(), 18)
      ),
        await new Promise((resolve) => setTimeout(resolve, 5000));

      await swapFunction(
        quotePayload.token0.address,
        3000,
        quotePayload.token1.address,
        address,
        amountIn,
        0
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log("amountOut ", amountOut);
  return (
    <>
      <div className="content-trade">
        <div className="top">
          <div className="left">
            <p>Sell</p>
            <input
              type="number"
              onChange={(e) => handleGetQuote(e.target.value)}
            />
            <p>$0</p>
          </div>
          <div className="content-trade-right">
            <div className="select-pair-tokens">
              <div className="right" onClick={() => setShowModal1(true)}>
                <p>{selectedToken1 ? selectedToken1.name : "Select Token"}</p>
                <img src={dropdownLogo} />
              </div>
            </div>
            <div className="content-trade-max">
              <div className="content-trade-left">
                <p>0 ETH</p>
              </div>
              <div className="content-trade-max-right">
                <p>MAX</p>
              </div>
            </div>
          </div>
        </div>
        <div className="download-icon">
          <img src={downloadicon} />
        </div>
        <div className="center">
          <div className="left">
            <p>Buy</p>
            <input type="number" value={Number(amountOut)} disabled />
            <p>$13,432.42</p>
          </div>
          <div className="select-pair-tokens">
            <div className="right" onClick={() => setShowModal2(true)}>
              <p>{selectedToken2 ? selectedToken2.name : "Select Token"}</p>
              <img src={dropdownLogo} />
            </div>
          </div>
        </div>
        <button className="bottom" onClick={handleSwap}>
          {" "}
          Select a Token
        </button>
        <div className="dropdown-container">
          <div className="dropdown-header" onClick={toggleDropdown}>
            <p>1 ETH = 8723647863 ZRX ($127)</p>
            <div className="left-side">
              <p>$18.01 </p>
              <img
                src={dropdownLogo}
                alt="Toggle Dropdown"
                className="dropdown-icon"
              />
            </div>
          </div>

          {isDropdownVisible && (
            <div className="dropdown-content">
              {data.map((item) => (
                <div className="dropdown-item" key={item.id}>
                  <p>
                    {item.label} <img src={item.infologo} />
                  </p>
                  <span className="value">{item.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <Modal
        showModal={showModal.ethModal}
        setShowModal={(value) => handleShowModal("ethModal", value)}
        setSelectedToken={handleTokenSelection}
      /> */}
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

export default Swap;
