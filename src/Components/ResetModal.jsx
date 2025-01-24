import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import warningImage from "../assets/warning-modal-icon.png";

export function ResetModal({ setShowModal, showModal }) {
  return (
    showModal && (
      <div className="reset-modal-container">
        <div className="reset-modal">
          <div className="cross-icon-modal">
            <img
              src={crossIcon}
              onClick={() => {
                setShowModal(false);
              }}
            />
          </div>
          <img src={warningImage} />
          <h1 >Are you sure?</h1>
          <p>
          Your tokens, price, and range selections will be reset.
          </p>
          <div className="understand">
            <button onClick={() => {
                setShowModal(false);
              }}>Cancel</button>
            <button onClick={() => {
                setShowModal(false);
              }}>Reset</button>
          </div>
        </div>
      </div>
    )
  );
}
