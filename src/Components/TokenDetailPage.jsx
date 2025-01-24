import React, { useState } from "react";
import Header from "./Header";
import arrowIcon from "../assets/arrow-right-side.png";
import ethLogo from "../assets/ethereum-logo.png";
import returnIcon from "../assets/return-icon.png";
import containerIcon from "../assets/container-icon.png";
import arrowIconSwap from "../assets/arrow-icon-eth.png";
import PoolDetailPageGraph from "./PoolDetailPageGraph";
import dropdownLogo from "../assets/price-dropdown.png";
import ExploreTransactions from "./ExploreTransactions";
import TokenDetailPageGraph from "./TokenDetailPageGraph";
import ExplorePools from "./explorePools";
import Trade from "./Trade";
import settingIcon from "../assets/setting-icon.png";
import Swap from "./Swap";
import Limit from "./Limit";
import Send from "./Send";
import Buy from "./Buy";
import SettingModal from "./SettingModal";
import ExploreTokens from "./ExploreTokens";
import GraphDataNotAvailabale from "./graphDataNotAvailabale";
import graphIcon from "../assets/graph-icon.png";
import SwapTokenDetailPage from "./SwapTokenDetailPage";
import menuIcon from '../assets/explore-menu-icon.png'
import searchIcon from "../assets/search-icon.png";

const TokenDetailPage = () => {
  const [currentTab, setCurrentTab] = useState("1H");
  const [currentSwap, setCurrentSwap] = useState("swap");
  const [currentModal, setCurrentModal] = useState("");
  const [currentTable, setCurrentTable] = useState("transactions");


  return (
    <div className="main-landing-page">
      <Header />
      <div className="token-detail-page">
        <div className="left">
          <div className="top">
            <p>
              Explore <img src={arrowIcon} /> Pools <img src={arrowIcon} />{" "}
              <span>ABCDEM</span> 0x065C...0945
            </p>
          </div>
          <div className="alice-bob">
            <div className="left">
              <div className="logo-img">ABC</div>
              <div className="logo-img-name">
                <h1>
                  Alice, Bob, Charlie, David, Eve, Mallory..{" "}
                  <span>
                    ABCDEM <img src={arrowIconSwap} />
                  </span>
                </h1>
              </div>
            </div>
            <div className="right">
              <img src={returnIcon} />
              <img src={containerIcon} />
            </div>
          </div>
          <div
            className="pool-detail-graph"
            style={{ width: "100%", height: "300px" }}
          >
            {true ? <TokenDetailPageGraph /> : <GraphDataNotAvailabale />}
          </div>
          <div className="pool-detail-expire">
            <div className="pool-detail-expire-left">
              <p
                onClick={() => setCurrentTab("1H")}
                className={currentTab === "1H" ? "limit-active" : ""}
              >
                1H
              </p>
              <p
                onClick={() => setCurrentTab("1D")}
                className={currentTab === "1D" ? "limit-active" : ""}
              >
                1D
              </p>
              <p
                onClick={() => setCurrentTab("1W")}
                className={currentTab === "1W" ? "limit-active" : ""}
              >
                1W
              </p>
              <p
                onClick={() => setCurrentTab("1M")}
                className={currentTab === "1M" ? "limit-active" : ""}
              >
                1M
              </p>
              <p
                onClick={() => setCurrentTab("1Y")}
                className={currentTab === "1Y" ? "limit-active" : ""}
              >
                1Y
              </p>
            </div>
            <div className="token-detail-price">
              <div className="graph-icon">
                <img src={graphIcon} />
                <img src={dropdownLogo} />
              </div>
              <p>
                Price{" "}
                <span>
                  <img src={dropdownLogo} />{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="token-detail-heading">
            <h2>Stats</h2>
          </div>
          <div className="token-detail-table">
            <table>
              <tr>
                <th>TVL</th>
                <th>Market Cap</th>
                <th>FDV</th>
                <th>1 day volume</th>
              </tr>
              <tr>
                <td>&lt;$0.01</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </table>
          </div>
          {/* <ExploreTokens /> */}




          <div className="explore-bottom-table">
          <div className="left">
            <ul className="explore-table-ul">
            <li
                onClick={() => setCurrentTable("transactions")}
                className={
                  currentTable === "transactions" ? "explore-table-ul-active" : ""
                }
              >
                Transactions
              </li>
              <li
                onClick={() => setCurrentTable("pools")}
                className={currentTable === "pools" ? "explore-table-ul-active" : ""}
              >
                Pools
              </li>
            </ul>
          </div>
        </div>
        {currentTable === "transactions" ? (
          <div>
          <ExploreTransactions />
        </div>
        ) : currentTable === "pools" ? (
          <div>
            <ExplorePools />
          </div>
        ) :  null}

        </div>
        <div className="right-detail">
          <div className="content-trade-top-token-detail">
            <div className="token-detail-left">
              <ul className="trade-ul">
                <li
                  onClick={() => setCurrentSwap("swap")}
                  className={currentSwap === "swap" ? "trade-ul-active" : ""}
                >
                  Swap
                </li>
                <li
                  onClick={() => setCurrentSwap("limit")}
                  className={currentSwap === "limit" ? "trade-ul-active" : ""}
                >
                  Limit
                </li>
                <li
                  onClick={() => setCurrentSwap("send")}
                  className={currentSwap === "send" ? "trade-ul-active" : ""}
                >
                  Send
                </li>
                <li
                  onClick={() => setCurrentSwap("buy")}
                  className={currentSwap === "buy" ? "trade-ul-active" : ""}
                >
                  Buy
                </li>
              </ul>
            </div>
            <div className="token-detail-right">
              <img
                src={settingIcon}
                alt="setting-icon"
                onClick={() => setCurrentModal("swapSettings")}
              />
            </div>
          </div>
          {currentSwap === "swap" ? (
            <SwapTokenDetailPage />
          ) : currentSwap === "limit" ? (
            <div>
              <Limit />
            </div>
          ) : currentSwap === "send" ? (
            <div>
              <Send />
            </div>
          ) : currentSwap === "buy" ? (
            <div>
              <Buy />
            </div>
          ) : null}
        </div>
      </div>

      <SettingModal
        currentModal={currentModal}
        setCurrentModal={setCurrentModal}
      />
    </div>
  );
};

export default TokenDetailPage;
