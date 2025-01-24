import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import testnetIcon from "../assets/testnode-icon.png";

export function TestnetModeModal({
  showNetworkModal,
  setShowNetworkModal,
}) {
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
          <img src={testnetIcon} />
          <h1>Testnet Mode </h1>
          <div className="network-container">
            {/* <div className="network-item"> */}
              <p>
                This turns on testnets for developers to try out features and
                transactions without using real assets. Tokens on testnets do
                not hold any real value.
              </p>
            {/* </div> */}
          </div>
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
