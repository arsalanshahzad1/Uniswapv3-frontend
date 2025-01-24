import React, { useState } from "react";
import Header from "./Header";
import settingIcon from "../assets/setting-icon.png";
import Swap from "./Swap";
import SettingModal from "./SettingModal";
import Limit from "./Limit";
import Send from "./Send";
import Buy from "./Buy";

function Trade() {
  const [currentTab, setCurrentTab] = useState("swap");
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState('');

  return (
    <>
      <div className="main-landing-page">
        <Header />
        <div className="landing-page-content">
          <div className="heading">
            <h1>Swap anytime, <br/> anywhere.</h1>
          </div>
          <div className="content-trade-top">
            <div className="left">
              <ul className="trade-ul">
                <li onClick={() => setCurrentTab("swap")} className={currentTab === "swap" ? "trade-ul-active": ""}>Swap</li>
                <li onClick={() => setCurrentTab("limit")} className={currentTab === "limit" ? "trade-ul-active": ""}>Limit</li>
                <li onClick={() => setCurrentTab("send")} className={currentTab === "send" ? "trade-ul-active": ""}>Send</li>
                <li onClick={() => setCurrentTab("buy")} className={currentTab === "buy" ? "trade-ul-active": ""}>Buy</li>
              </ul>
            </div>
            <div className="right">
              <img src={settingIcon} alt="setting-icon" onClick={() => setCurrentModal("swapSettings")} />
            </div>
          </div>
          {currentTab === "swap" ? (
            <Swap/>
          ) : currentTab === "limit" ? (
            <div>
              <Limit/>
            </div>
          ) : currentTab === "send" ? (
            <div>
              <Send/>
            </div>
          ) : currentTab === "buy" ? (
            <div>
              <Buy/>
            </div>
          ) : currentTab === "limit" ? (
            <div>{/* <Limit/> */}</div>
          ) : null}
        </div>
      </div>
      <SettingModal currentModal={currentModal} setCurrentModal={setCurrentModal}/>
    </>
  );
}

export default Trade;
