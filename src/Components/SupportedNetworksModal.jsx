import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import NetworkImage from "../assets/ball-icon.png";
import ethLogo from "../assets/ethereum-logo.png";

const blockchainList = [
    "Ethereum",
    "Polvaon",
    "Arbitrum",
    "Optimism",
    "Base",
    "BNB Chain",
    "Blast",
    "Avalanche",
    "Celo",
    "World Chain",
    "Zora Network",
    "ZKsync",
  ];

export function SupportedNetworkModal({showNetworkModal, setShowNetworkModal}) {
  // const [ ] = useState(false)
  return (
    showNetworkModal && (
      <div className="network-modal-container">
        <div className="network-modal">
          <div className="cross-icon-modal">
            <img
              src={crossIcon}
              onClick={() => {
                setShowNetworkModal(false);
              }}
            />
          </div>
          <img src={NetworkImage} />
          <h1>Supported Networks</h1>

          <div className="network-container">
            {blockchainList.map((item, index) => (
              <div key={index} className="network-item">
                <img
                  src={ethLogo}
                  alt="Logo"
                  className="icon"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="network-support-button">Learn More</button>
          <div className="understand">
            <button onClick={() => {
                setShowNetworkModal(false);
              }}>Close</button>
          </div>
        </div>
      </div>
    )
  );
}
