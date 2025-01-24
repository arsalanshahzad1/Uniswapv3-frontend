import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import testnodeImage from "../assets/testnode-icon.png";

export function TestNodeModal({ setShowModal, showModal }) {
  return (
    showModal && (
      <div className="testnode-modal-container">
        <div className="testnode-modal">
          <div className="cross-icon-modal">
            <img
              src={crossIcon}
              onClick={() => {
                setShowModal(false);
              }}
            />
          </div>
          <img src={testnodeImage} />
          <h1>Testnet Mode</h1>
          <p>
            This turns on testnets for developers to try out features and
            transactions without using real assets. Tokens on testnets do not
            hold any real value.
          </p>
          <div className="understand" onClick={() => {
                setShowModal(false);
              }}>
            <button >Close</button>
          </div>
        </div>
      </div>
    )
  );
}
