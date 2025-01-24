import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";

export function FilterOverlay({showModal, setShowModal}) {
//   const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      {showModal && (
        <div className="filter-overlay-modal-container">
          <div className="filter-overlay-modal">
          <div className="cross-icon-modal">
            <img
              src={crossIcon}
              onClick={() => {
                setShowModal(false);
              }}
            />
          </div>
            <div className="filter-overlay-top">
            <h5>Status</h5>
            </div>
            <div className="filter-overlay-bottom">
                <div className="filter-top">
                    <p>In Range</p>
                    <input type="checkbox" />
                </div>
                <div className="filter-center">
                <p>Out of Range</p>
                <input type="checkbox" />
                </div>
                <div className="filter-bottom">
                <p>Closed</p>
                <input type="checkbox" />
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterOverlay;
