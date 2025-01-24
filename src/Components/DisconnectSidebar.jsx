import React, { useState } from 'react';
import { useDisconnect, useActiveWallet } from "thirdweb/react";

import profileImage from '../assets/profile-icon.png';
import disconnectIcon from '../assets/disconnect-icon.png';
import buyIcon from '../assets/buy-icon.png';
import downloadIcon from '../assets/sidebar-download-icon.png';
import backArrow from '../assets/setting-sidebar-icon.png';
import { ReceiveCryptoModal } from './ReceiveCryptoModal';

const DisconnectSidebar = () => {
  const wallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const [showSidebar, setShowSidebar] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showSidebar && (
          <div className="disconnect-sidebar">
           <div className="setting-sidebar-top"> 
                      <img
                        src={backArrow}
                        alt="Back Arrow"
                        onClick={() => {
                          setShowSidebar(false); 
                        }}
                        style={{ cursor: 'pointer' }} 
                      /> 
                    </div>
            <div className="top">
              <div className="left" onClick={() => setShowModal(true)}>
                <img src={profileImage} alt="Profile" />
                <p>0x8c45...0698</p>
              </div>
              <ReceiveCryptoModal showModal={showModal} setShowModal={setShowModal} />
              <div className="disconnect-right" onClick={() => disconnect(wallet)}>
                <img src={disconnectIcon} alt="Disconnect Icon" />
                <p>Disconnect</p>
              </div>
            </div>
            <div className="sidebar-balance">
              <h1>$ --</h1>
            </div>
            <div className="sidebar-center">
              <div className="sidebar-center-left">
                <img src={buyIcon} alt="Buy Icon" />
                <p>Buy</p>
              </div>
              <div className="sidebar-center-right">
                <img src={downloadIcon} alt="Receive Icon" />
                <p>Receive</p>
              </div>
            </div>
            <div className="disconnect-sidebar-bottom">
              <h6>Welcome to your wallet</h6>
              <p>Looks like you have a new wallet. Let’s get it <br/> funded before you make your first swap.</p>
            </div>
            <div className="buy-crypto">
              <img src={buyIcon} />
              <h6>Buy crypto</h6>
              <p>Purchase with a debit card or bank account.</p>
            </div>
            <div className="receive-crypto-disconnect">
              <img src={downloadIcon}/>
              <h6>Receive Crypto</h6>
              <p>Fund your wallet by transferring crypto from another wallet or account </p>
            </div>
          </div>
      )}
    </>
  );
};

export default DisconnectSidebar;
