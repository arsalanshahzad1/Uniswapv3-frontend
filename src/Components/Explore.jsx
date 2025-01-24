import React, { useState } from "react";
import Header from "./Header";
import ExploreLineChart from "./ExploreLineChart";
import ExploreBarChart from "./ExploreBarChart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ExploreTokens from "./ExploreTokens";
import ExplorePools from "./explorePools";
import ExploreTransactions from "./ExploreTransactions"; 
import menuIcon from '../assets/explore-menu-icon.png'
import dropdownLogo from '../assets/dropdown-logo.svg'
import searchIcon from "../assets/search-icon.png";
import { SupportedNetworkModal } from "./SupportedNetworksModal";


const Explore = () => {
  const [currentTab, setCurrentTab] = useState("tokens"); 
   const [showNetworkModal, setShowNetworkModal] = useState(false);

  return (
    <>
      <div className="main-landing-page">
        <Header />
        
        <div className="explore-graph-section">
          <div className="left" style={{ width: "100%", height: "400px" }}>
            <ExploreLineChart />
          </div>
          <div className="right" style={{ width: "100%", height: "600px" }}>
            <ExploreBarChart />
          </div>
        </div>
        <div className="explore-bottom-table-detail">
          <div className="left">
            <ul className="explore-table-ul">
              <li
                onClick={() => setCurrentTab("tokens")}
                className={currentTab === "tokens" ? "explore-table-ul-active" : ""}
              >
                Tokens
              </li>
              <li
                onClick={() => setCurrentTab("pools")}
                className={currentTab === "pools" ? "explore-table-ul-active" : ""}
              >
                Pools
              </li>
              <li
                onClick={() => setCurrentTab("transactions")}
                className={
                  currentTab === "transactions" ? "explore-table-ul-active" : ""
                }
              >
                Transactions
              </li>
            </ul>
          </div>
          <div className="right">
            <div style={{display: 'flex', gap: "10px"}}>
           <div className="explore-menu-bottom" onClick={() => setShowNetworkModal(true)} >
            <img src={menuIcon} />
            <img src={dropdownLogo} />
           </div>
           <SupportedNetworkModal
                             showNetworkModal={showNetworkModal}
                             setShowNetworkModal={setShowNetworkModal}
                           />
           <div className="explore-volume-bottom">
            <h6>1D Volume</h6>
            <img src={dropdownLogo} />
           </div>
           </div>
           <div className="explore-bottom-search">
              <img src={searchIcon} />
              <input placeholder="Search Token" type="text"/>
           </div>
          </div>
        </div>
        {currentTab === "tokens" ? (
          <ExploreTokens />
        ) : currentTab === "pools" ? (
          <div>
            <ExplorePools />
          </div>
        ) : currentTab === "transactions" ? (
          <div>
            <ExploreTransactions />
          </div>
        ) :  null}
      </div>
    </>
  );
};

export default Explore;
