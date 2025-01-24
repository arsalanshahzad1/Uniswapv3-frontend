import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png"; 
import moonpayImg from "../assets/checkout-modal.png";
import receiveCryptoIcon from "../assets/receive-crypto-icon.png";

export function CheckOutModal( {showCheckoutModal, setShowCheckoutModal}) {

  return (
    showCheckoutModal && (
      <div className="receive-crypto-modal-container">
        <div className="receive-crypto-modal">
          <div className="cross-icon-checkout-modal">
            <img
              src={crossIcon}
              onClick={() => {
                setShowCheckoutModal(false);
              }}
            />
          </div>
          <div className="checkout-top">
          <h1 >Checkout with</h1>
          <div className="checkout-modal">
            <img src={receiveCryptoIcon} />
            <p>Get help</p>
          </div>
          </div>
          <div className="receive-crypto-profile">
            <div className="left">
            <img src={moonpayImg} />
            </div>
            <div className="right">
              <h1>MoonPay</h1>
              <p>Debit Card, Apple Pay, Google Pay</p>
            </div>
          </div>
          <p>
          Fund your wallet by transferring crypto from another wallet or account
          </p>
        </div>
      </div>
    )
  );
}