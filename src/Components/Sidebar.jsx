import React, { useState } from "react";
import testnetModeIcon from "../assets/test-mode-icon.png";
import profileIcon from "../assets/profile-icon.png";
import settingIcon from "../assets/setting-icon.png";
import disconnectIcon from "../assets/disconnect-icon.png";
import buyIcon from "../assets/buy-icon.png";
import downloadIcon from "../assets/sidebar-download-icon.png";
import SidebarTokens from "./SidebarTokens";
import SidebarNft from "./SidebarNft";
import SidebarPool from "./SidebarPool";
import SidebarActivity from "./SidebarActivity";
import SettingSidebar from "./SettingSidebar";
import { ReceiveCryptoModal } from "./ReceiveCryptoModal";
import DisconnectSidebar from "./DisconnectSidebar";
import crossIcon from "../assets/crossIcon.png";
import { useActiveAccount } from "thirdweb/react";
import { truncateString } from "../utils";

const Sidebar = ({handleSidebarToggle}) => {
  const account = useActiveAccount();
  const [currentTab, setCurrentTab] = useState("tokens");
  const [isTestnetMode, setIsTestnetMode] = useState(false);

  const [showDisconnectSidebar, setShowDisconnectSidebar] = useState(false);

  const handleDisconnectToggle = () => {
    setShowDisconnectSidebar(!showDisconnectSidebar);
  };
  const [showSettingSidebar, setShowSettingSidebar] = useState(false);
  const handleSettingToggle = () => {
    setShowSettingSidebar(!showSettingSidebar);
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="main-sidebar">
      {isTestnetMode && (
        <div className="sidebar-testnet-mode">
          <img src={testnetModeIcon} />
          <p>You are in testnet mode</p>
        </div>
      )}
      <div className="sidebar-container">
        <div className="sidebar-top">
          <div className="left" onClick={() => setShowModal(true)}>
            <img src={profileIcon} />
            <p>{truncateString(account?.address)}</p>
          </div>
          <ReceiveCryptoModal
            showModal={showModal}
            setShowModal={setShowModal}
            account={account}
          />
          <div className="cross-icon-modal-header">
            <img
              src={crossIcon}
              onClick={() => {
                handleSidebarToggle(false);
              }}
            />
          </div>
          <div className="right">
            <img src={settingIcon} onClick={handleSettingToggle} />
            <img src={disconnectIcon} onClick={handleDisconnectToggle} />
          </div>
          {showDisconnectSidebar && <DisconnectSidebar />}
          {showSettingSidebar && (
            <SettingSidebar
              isTestnetMode={isTestnetMode}
              setIsTestnetMode={setIsTestnetMode}
            />
          )}
        </div>
        <div className="sidebar-balance">
          <h1>$ --</h1>
        </div>
        <div className="sidebar-center">
          <div className="sidebar-center-left">
            <img src={buyIcon} />
            <p>Buy</p>
          </div>
          <div className="sidebar-center-right">
            <img src={downloadIcon} />
            <p>Receive</p>
          </div>
        </div>
        <div className="sidebar-bottom">
          <ul className="sidebar-ul">
            <li
              onClick={() => setCurrentTab("tokens")}
              className={currentTab === "tokens" ? "sidebar-ul-active" : ""}
            >
              Tokens
            </li>
            <li
              onClick={() => setCurrentTab("nfts")}
              className={currentTab === "nfts" ? "sidebar-ul-active" : ""}
            >
              NFTs
            </li>
            <li
              onClick={() => setCurrentTab("pools")}
              className={currentTab === "pools" ? "sidebar-ul-active" : ""}
            >
              Pools
            </li>
            <li
              onClick={() => setCurrentTab("activity")}
              className={currentTab === "activity" ? "sidebar-ul-active" : ""}
            >
              Activity
            </li>
          </ul>
        </div>
        {currentTab === "tokens" ? (
          <SidebarTokens />
        ) : currentTab === "nfts" ? (
          <div>
            <SidebarNft />
          </div>
        ) : currentTab === "pools" ? (
          <div>
            <SidebarPool />
          </div>
        ) : currentTab === "activity" ? (
          <div>
            <SidebarActivity />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
