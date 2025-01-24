import React, { useState } from "react";
import Header from "./Header";
import arrowIcon from "../assets/arrow-right-side.png";
import ethLogo from "../assets/ethereum-logo.png";
import returnIcon from "../assets/return-icon.png";
import containerIcon from "../assets/container-icon.png";
import arrowIconSwap from "../assets/arrow-icon-eth.png";
import PoolDetailPageGraph from "./PoolDetailPageGraph";
import dropdownLogo from "../assets/dropdown-logo.svg";
import swapIcon from "../assets/pool-detail-swap-icon.png";
import redDropdown from "../assets/red-dropdown.png";
import copyIcon from '../assets/copy-icon.png'
import ExploreTransactions from "./ExploreTransactions";
import GraphDataNotAvailabale from "./graphDataNotAvailabale";

const PoolDetailPage = () => {
  const [currentTab, setCurrentTab] = useState("1H");

  return (
    <div className="main-landing-page">
      <Header />
      <div className="pool-detail-page">
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
            style={{ width: "100%", height: "400px" }}
          >
            {/* <PoolDetailPageGraph /> */}
            {true ?
             <PoolDetailPageGraph/> 
            :
            <GraphDataNotAvailabale/>
            }
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
            <div className="token-detail-volume">
              <p>
                Volume{" "}
                <span>
                  <img src={dropdownLogo} />{" "}
                </span>
              </p>
            </div>
          </div>
          <div className="explore-transaction-table-heading">
            <h1>Transaction</h1>
          </div>
          <ExploreTransactions/>
        </div>
        <div className="right-pool">
          <div className="top-buttons">
            <div className="left">
              <button>
                <span>
                  <img src={swapIcon} />
                </span>{" "}
                Swap
              </button>
            </div>
            <div className="right">
              <button>+ Add liquidity</button>
            </div>
          </div>
          <div className="pool-detail-page-stats">
            <h1> Stats</h1>
            <p>Pool balances</p>
            <div className="pool-balance-bottom">
              <p>240.04 WBTC</p>
              <p>39.1 ETH </p>
            </div>
            <div className="pool-detail-progressbar">
              <div className="pool-detail-main-progressbar"></div>
            </div>
            <div className="pool-detail-tvl">
              <div className="top">
                <p>TVL</p>
              </div>
              <div className="bottom">
                <p>
                  $167.1M <img src={redDropdown} /> <span>1.21%</span>
                </p>
              </div>
            </div>
            <div className="pool-detail-volume">
              <div className="top">
                <p>24H Volume</p>
              </div>
              <div className="bottom">
                <p>
                  $2.23M <img src={redDropdown} /> <span>73.37%</span>
                </p>
              </div>
            </div>
            <div className="pool-detail-fees">
              <div className="top">
                <p>24H Fees</p>
              </div>
              <div className="bottom">
                <p>$7.1k </p>
              </div>
            </div>
            
          </div>
          <div className="links">
                <h1>Links</h1>
                <div className="link-row">
                    <div className="left">
                        <p>ABC</p>
                        <p>WBTC / ETH</p>
                    </div>
                    <div className="right">
                        <p>024..SCSD <img src={copyIcon} /></p>
                        <img src={containerIcon} />
                    </div>
                </div>
                <div className="link-row">
                    <div className="left">
                        <p>ABC</p>
                        <p>WBTC / ETH</p>
                    </div>
                    <div className="right">
                        <p>024..SCSD <img src={copyIcon} /></p>
                        <img src={containerIcon} />
                    </div>
                </div>
                <div className="link-row">
                    <div className="left">
                        <p>ABC</p>
                        <p>WBTC / ETH</p>
                    </div>
                    <div className="right">
                        <p>024..SCSD <img src={copyIcon} /></p>
                        <img src={containerIcon} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PoolDetailPage;
