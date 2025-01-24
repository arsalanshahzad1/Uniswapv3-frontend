import React, { useState } from "react";
import ethereumLogo from "../assets/ethereum-logo.png";
import arrowIconSend from "../assets/upDownArrow.png";
import { Modal } from "./Modal";
import { SelectTokenModal } from "./SelectTokenModal";
import warningError from '../assets/warning-small.png'
import dropdownLogo from '../assets/dropdown-logo.svg'
import clientPicture from '../assets/client-picture.png'
import crossIconSend from '../assets/cross-icon-send.png'


const Send = () => {
  const [showModal, setShowModal] = useState({
    ethModal: false,
    tokenModal: false,
  });

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleShowModal = (modalType, show) => {
    setShowModal((prev) => ({
      ...prev,
      [modalType]: show,
    }));
  };

    return (
        <>
          <div className="send-trade">
          <div className="top">
              <div className="up">
                <p>you're sending</p>
              </div>
              <div className="down">
                <h1>$1</h1>
                <p>2 ETH  <span><img src={arrowIconSend}/></span></p>
                <p>Insufficient funds</p>
              </div>
            </div>
            <div className="center">
              <div className="send-trade-center-left">
                <div className="left">
                <img src={ethereumLogo} />
                </div>
                <div className="right">
                    <p>ETH</p>
                    <p>Balance: 0</p>
                </div>
              </div>
              <div className="right">
                <img src={dropdownLogo} />
              </div>
            </div>
            <div className="bottom">
              <div className="left">
              <h6>To</h6>
                <p>Wallet address and ENS Name</p>
              </div>
            </div>
            <div className="send-trade-button">
            <button >Input Amount</button>
            </div>

            
            
          </div>
          <Modal showModal={showModal.ethModal} setShowModal={handleShowModal} />
        </>
      );
    };

export default Send