import React from "react";
import ethLogo from "../assets/ethereum-logo.png";
import editLogo from "../assets/edit-logo.png";
import PriceRangeGraph from "./PriceRangeGraph";
import zoomInIcon from "../assets/zoom-in-icon.png";
import reloadIcon from "../assets/reload-icon.png";
import ExploreBarChart from "./ExploreBarChart";

const PriceRange = ({ poolPayload, setPoolPayload, setCurrentTab }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const numberTypeValue = Number(value);

    setPoolPayload((prev) => ({
      ...prev,
      [name]: numberTypeValue,
    }));

    if (name === "price") {
      setPoolPayload((prev) => ({
        ...prev,
        priceLower: numberTypeValue - (numberTypeValue * 50) / 100,
      }));

      setPoolPayload((prev) => ({
        ...prev,
        priceUpper: numberTypeValue + (numberTypeValue * 50) / 100,
      }));
    }
  };

  return (
    <div className="price-range">
      <div className="top">
        <div className="left">
          <img src={ethLogo} />
          <p>WBTC / ETH</p>
          <p>v3</p>
          <p>0.03%</p>
        </div>
        <div className="right" onClick={() => setCurrentTab("one step")}>
          <p>Edit</p>
          <img src={editLogo} />
        </div>
      </div>
      <div className="bottom">
        <div className="heading">
          <h1>Set price range</h1>
        </div>
        <div className="full-range">
          <div className="left"> Full Range</div>
          <div className="right">Custom Range</div>
        </div>
        <div className="description">
          <p>
            Providing full range liquidity ensures continuous market
            participation across all possible prices, offering simplicity but
            with potential for higher impermanent loss.
          </p>
        </div>
        <div className="graph-bottom">
          <div className="graph-bottom-top">
            <div className="left">
              <p>
                <span>Current Price</span> : 1 WETH = 7236.34 ZRX{" "}
                <span>($2834)</span>
              </p>
            </div>
            <div className="right">
              <img src={reloadIcon} />
              <img src={zoomInIcon} />
              <img src={zoomInIcon} />
            </div>
          </div>
          <div
            className="graph-bottom-bottom"
            style={{ width: "auto", height: "400px" }}
          >
            <PriceRangeGraph />
          </div>
          <input
            type="number"
            placeholder="Min"
            name="price"
            value={poolPayload.price}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Max"
            name="priceUpper"
            value={poolPayload.priceUpper}
            onChange={handleInputChange}
          />

          <button
            disabled={!poolPayload.price || !poolPayload.priceUpper}
            className="select-pair-button"
            onClick={() => setCurrentTab("three step")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
