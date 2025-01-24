import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import warningImage from "../assets/warning-img.png";

export function WarningModal({ setShowModal, showModal }) {
  return (
    showModal && (
      <div className="warning-modal-container">
        <div className="warning-modal">
          <div className="cross-icon-modal">
            <img
              src={crossIcon}
              onClick={() => {
                setShowModal(false);
              }}
            />
          </div>
          <img src={warningImage} />
          <h1>WARNING</h1>
          <p>
            This token isn’t traded on leading U.S. centralized exchanges or
            frequently swapped on Uniswap. Always do your own research before
            proceeding.
          </p>
          <button>Learn More</button>
          <div className="understand">
            <button onClick={() => {
                setShowModal(false);
              }}>Back</button>
            <button onClick={() => {
                setShowModal(false);
              }}>I Understand</button>
          </div>
        </div>
      </div>
    )
  );
}
