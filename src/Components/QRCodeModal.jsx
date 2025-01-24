import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import receiveCryptoIcon from "../assets/receive-crypto-icon.png";
import QrCode from "./QrCode";
import exploreNetworkIcon from "../assets/explore-menu-icon.png";
import { SupportedNetworkModal } from "./SupportedNetworksModal";
import { truncateString } from "../utils";

export function QrCodeModal({ setShowQrCode, showQrCode, account }) {
  const [showNetworkModal, setShowNetworkModal] = useState(false);
  const handleToggleQRCode = () => {
    setShowNetworkModal(!showNetworkModal);
  };

  return (
    showQrCode && (
      <div className="qrcode-modal-container">
        <div className="qrcode-modal">
          <div className="cross-icon-modal">
            <img
              src={crossIcon}
              onClick={() => {
                setShowQrCode(false);
              }}
            />
          </div>
          <div className="receive-crypto">
            <img src={receiveCryptoIcon} />
            <p>Get help</p>
          </div>
          <div className="qrcode-contain">
            <h1>{truncateString(account?.address)}</h1>
            <div>
              <QrCode value="hey" size={56} />
            </div>
            <p>
              You can send and receive and NFTs on all of our <br /> 12
              supported networks.
            </p>
          </div>
          <div className="qrcode-network-bg">
            <div className="qrcode-network" onClick={handleToggleQRCode}>
              <img src={exploreNetworkIcon} />
              <p>Networks</p>
            </div>
            <SupportedNetworkModal
              showNetworkModal={showNetworkModal}
              setShowNetworkModal={setShowNetworkModal}
            />
          </div>
        </div>
      </div>
    )
  );
}
