import React, { useState } from "react";
import Header from "./Header";
import positionImage from "../assets/position-image.png";
import poolImage from "../assets/pool-image.png";
import exploreUs from "../assets/explore-us-pool.png";
import ethereumLogo from "../assets/ethereum-logo.png";
import dropdownLogo from "../assets/dropdown-logo.svg";
import menuIcon from "../assets/explore-menu-icon.png";
import filterIcon from "../assets/filter-icon.png";
import { Link } from "react-router-dom";
import FilterOverlay from "./FilterOverlay";

const data = [
  { pool: "WBTC/ETH", tvl: "$25.2M", apr: "1.06%" },
  { pool: "WBTC/ETH", tvl: "$25.2M", apr: "1.06%" },
  { pool: "WBTC/ETH", tvl: "$25.2M", apr: "1.06%" },
  { pool: "WBTC/ETH", tvl: "$25.2M", apr: "1.06%" },
  { pool: "WBTC/ETH", tvl: "$25.2M", apr: "1.06%" },
  { pool: "WBTC/ETH", tvl: "$25.2M", apr: "1.06%" },
  { pool: "WBTC/ETH", tvl: "$25.2M", apr: "1.06%" },
  { pool: "WBTC/ETH", tvl: "$25.2M", apr: "1.06%" },
];

const PoolNew = () => {
   const [showModal, setShowModal] = useState(false);

 
  return (
    <>
      <div className="main-landing-page">
        <Header />
        <div className="main-pool-page">
          <div className="left">
            <div className="top">
              <h1>Your Positions</h1>
            </div>
            <div className="pool-new-page-filters">
              <div className="filter-new-button">
               <Link to='/new-positions'>
               + New
               </Link> 
              </div>
              <div className="pool-filter-section">
                <img src={menuIcon} />
                <img src={dropdownLogo} />
              </div>
              <div className="filter-icon" onClick={() => setShowModal(true)}>
                <img src={filterIcon} />
              </div>
              <FilterOverlay showModal={showModal} setShowModal={setShowModal} />
            </div>
            <div className="center">
              <img src={positionImage} />
              <h6>
                Welcome to your Positions{" "}
                <span>Connect your wallet to view your current positions.</span>
              </h6>
            </div>
            <div className="bottom">
              <p>Top pools by TVL</p>
              <div className="table-container-pool">
                <table className="custom-table-pool">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Pool</th>
                      <th>TVL</th>
                      <th>APR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <div className="pool-info">
                            <img src={ethereumLogo} className="pool-icon" />
                            <span>{row.pool}</span>
                            <span className="badge">V3</span>
                            <span className="fee">0.03%</span>
                          </div>
                        </td>
                        <td>{row.tvl}</td>
                        <td>{row.apr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pool-bottom-button">
              <button>Explore more pools </button>
              <img src={exploreUs} />
            </div>
          </div>
          <div className="right">
            <div className="top">
              <p>Learn about liquidity provision</p>
            </div>
            <div className="center">
              <img src={poolImage} />
              <p>Providing liquidity on different Protocols</p>
            </div>
            <div className="bottom">
              <button>Learn more</button>
              <img src={exploreUs} />
            </div>
            {/* <ExploreBarChart/> */}
            {/* <ExploreLineChart/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PoolNew;