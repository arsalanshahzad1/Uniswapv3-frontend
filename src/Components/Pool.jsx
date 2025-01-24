import React, { useState } from "react";
import Header from "./Header";
import settingIcon from "../assets/setting-icon.png";
import warningImg from "../assets/warning-img.png";
import ethLogo from "../assets/ethereum-logo.png";
import inchLogo from "../assets/inch-img.png";
import dropdownlogo from "../assets/dropdown-logo.svg";

const Pool = () => {
  const [currentTab, setCurrentTab] = useState("0.01%");

  return (
    <>
      <div className="main-landing-page">
        <Header />
        <div className="l  ">
          <div className="top">
            <div className="left">
              <h6>Add Liquidity</h6>
            </div>
            <div className="right">
              <p>Clear all</p>
              <img src={settingIcon} />
            </div>
          </div>
          <div className="pool-prices-warning">
            <div className="left">
              <img src={warningImg} />
            </div>
            <div className="right">
              <h6>main-pool-page</h6>
              <p>
                Prices in this pool are out of sync with the current market.
                Adding liquidity may result in a loss of funds.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className="select-pair">
            <div className="top">
              <h6>Select pair</h6>
            </div>
            <div className="bottom">
              <div className="left">
                <div className="eth">
                  <img src={ethLogo} />
                  <p>ETH</p>
                </div>
                <img src={dropdownlogo} />
              </div>
              <div className="right">
                <img src={inchLogo} />
                <p>1 Inch</p>
              </div>
              <img src={dropdownlogo} />
            </div>
          </div>
          <div className="fee-tier">
            <div className="top">
              <p>0.01% fee tier</p>
              <p>Hide</p>
            </div>
            <div className="center">
              <p>Not created</p>
            </div>
            <div className="bottom">
              <div
                onClick={() => setCurrentTab("0.01%")}
                className={
                  currentTab === "fee-tier-unactive" ? "fee-tier-active" : ""
                }
              >
                <div className="left">
                  <p>0.01%</p>
                  <p>Not created</p>
                </div>
                <div className="right">
                  <input type="radio" />
                </div>
              </div>
              <div
                onClick={() => setCurrentTab("0.05%")}
                className={
                  currentTab === "fee-tier-unactive" ? "fee-tier-active" : ""
                }
              >
                <div className="left">
                  <p>0.05%</p>
                  <p>Not created</p>
                </div>
                <div className="right">
                  <input type="radio" />
                </div>
              </div>
              <div
                onClick={() => setCurrentTab("0.30%")}
                className={
                  currentTab === "fee-tier-unactive" ? "fee-tier-active" : ""
                }
              >
                <div className="left">
                  <p>0.30%</p>
                  <p>Not created</p>
                </div>
                <div className="right">
                  <input type="radio" />
                </div>
              </div>
              <div
                onClick={() => setCurrentTab("1.00%")}
                className={
                  currentTab === "fee-tier-unactive" ? "fee-tier-active" : ""
                }
              >
                <div className="left">
                  <p>1.00%</p>
                  <p>Not created</p>
                </div>
                <div className="right">
                  <input type="radio" />
                </div>
              </div>
            </div>
          </div>
          <div className="price-range">
            <div className="left">
              <p>Set price range</p>
            </div>
            <div className="right">
              <div className="full-range">
                <p>Full Range</p>
              </div>
            </div>
          </div>
          <div className="low-price">
            <div className="left">
              <p>Low Price</p>
              <p>1</p>
              <p>ZRX per ETH</p>
            </div>
            <div className="right">
              <p>+</p>
              <p>-</p>
            </div>
          </div>
          <div className="high-price">
            <div className="left">
              <p>High Price</p>
              <p>1</p>
              <p>ZRX per ETH</p>
            </div>
            <div className="right">
              <p>+</p>
              <p>-</p>
            </div>
          </div>
          <div className="invalid-range">
            <img src={warningImg} />
            <p>
              Invalid range selected. The min price must be lower than the max
              price.
            </p>
          </div>
          <div className="invalid-range-bottom">
            <p>
              This pool must be initialized before you can add liquidity. To
              initialize, select a starting price for the pool. Then, enter your
              liquidity price range and deposit amount. Gas fees will be higher
              than usual due to the initialization transaction.
            </p>
          </div>
          <div className="invalid-range-input">
            <input type="text" />
          </div>
          <div className="deposit-amount">
          <div className="top">
            <p>Deposit amounts</p>
          </div>
          <div className="center">
            <div className="left">
                <p>0</p>
                <p>-</p>
            </div>
            <div className="right">
                <div className="deposit-amount-eth">
                    <img src={ethLogo} />
                    <p>ETH</p>
                </div>
                <p>Balance: 0</p>
            </div>
            </div>            
          <div className="bottom">
          <div className="left">
                <p>0</p>
                <p>-</p>
            </div>
            <div className="right">
                <div className="deposit-amount-inch">
                    <img src={inchLogo} />
                    <p>1Inch</p>
                </div>
                <p>Balance: 0</p>
            </div>
          </div>
          <div className="pool-bottom-button">Enter an amount</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pool;
