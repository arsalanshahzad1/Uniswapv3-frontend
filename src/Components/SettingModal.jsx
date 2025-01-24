import React, { useState } from "react";
import infoIcon from "../assets/setting-modal-info.png";

export default function SwapSettings({ currentModal, setCurrentModal }) {
  const handleNavigation = (modalName) => {
    setCurrentModal(modalName);
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {(currentModal === "swapSettings" || currentModal === "oneStep") && (
        <div className="setting-modal-container">
          <div className="modal">
            <h2>Swap Settings</h2>
            <div className="modal-content">
              <div className="setting-auto">
                <p>Max Slippage</p>
                <div className="right">
                  <p>Auto</p>
                  <p>%</p>
                </div>
              </div>
              <div className="setting">
                <p>Transaction Deadline</p>
                <p>
                  <input type="text" placeholder="30 Minutes" />
                </p>
              </div>
              <div className="setting-default">
                <p>Trade Options</p>
                <p onClick={() => handleNavigation("tradeOptions")}>
                  {" "}
                  Default &gt;{" "}
                </p>
              </div>
            </div>
            <button
              className="close-button"
              onClick={() => setCurrentModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {currentModal === "tradeOptions" && (
        <div className="setting-modal-container">
          <div className="modal">
            <div className="setting-modal-top">
              <button
                className="back-button"
                onClick={() => handleNavigation("swapSettings")}
              >
                <button onClick={() => handleNavigation("oneStep")}></button>
                &lt;
              </button>
              <h2>Trade Options</h2>
            </div>
            <div className="modal-content">
              <div className="setting">
                <p>Default</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <p className="description">
                The Donutuz client selects the cheapest trade option factoring
                price and network costs.
              </p>
              <p className="includes">
                Includes <span className="lightning">⚡ Donatuz</span>
                <div
                  className="setting-info"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={infoIcon} />
                  {isHovered && (
                    <div className="setting-modal-info">
                      <p>
                        Fees are applied to ensure the best experience with
                        Donatuz, and have already been factored into this quote.
                      </p>
                    </div>
                  )}
                </div>
              </p>
            </div>

            <button
              className="close-button"
              onClick={() => setCurrentModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
