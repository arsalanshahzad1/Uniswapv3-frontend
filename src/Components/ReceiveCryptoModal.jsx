import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import receiveCryptoIcon from "../assets/receive-crypto-icon.png";
import profileIcon from "../assets/profile-icon.png";
import qrCodeIcon from "../assets/qr-icon.png";
import copyIcon from "../assets/copy-icon.png";
import QrCode from "./QrCode";
import { QrCodeModal } from "./QRCodeModal";
import { truncateString } from "../utils";

export function ReceiveCryptoModal({ setShowModal, showModal, account }) {

    const [showQrCode, setShowQrCode] = useState(false);  
    const handleToggleQRCode = () => {
      setShowQrCode(!showQrCode);
    };

  return (
    showModal && (
      <div className="receive-crypto-modal-container">
        <div className="receive-crypto-modal">
          <div className="cross-icon-modal" >
            <img 
              src={crossIcon}
              onClick={() => {
                setShowModal(false);
              }}
            />
          </div>
          <div className="receive-crypto">
            <img src={receiveCryptoIcon} />
            <p>Get help</p>
          </div>
          <h1 >Receive Crypto</h1>
          <p>
          Fund your wallet by transferring crypto from another wallet or account
          </p>
          <div className="receive-crypto-profile">
            <div className="left">
              <img src={profileIcon} />
              <p>{truncateString(account?.address)}</p>
            </div>
            <div className="right-crypto">
              <img src={qrCodeIcon} onClick={handleToggleQRCode} />
              <img src={copyIcon}  />
            </div>
            
          </div>
        </div>
        <QrCodeModal showQrCode={showQrCode} setShowQrCode={setShowQrCode} account={account} />
      </div>
    )
  );
}
