import React, { useState } from "react";
import Logo from "../assets/donatuz-logo.png";
import hamburgerIcon from "../assets/hambur.png";
import crossIcon from "../assets/crossIcon.png";
import searchIcon from "../assets/search-icon.png";
import ballIcon from "../assets/ball-icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { SupportedNetworkModal } from "./SupportedNetworksModal";
import { useActiveAccount } from "thirdweb/react";
import ConnectWalletDefault from "./ConnectWalletDefault";

function Header() {
  const account = useActiveAccount();
  console.log(account)
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleViewPositionsClick = () => {
    navigate("/new-positions");
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const [showNetworkModal, setShowNetworkModal] = useState(false);

  return (
    <div>
      <section>
        <div className="main-div">
          <div className="main-header">
            <div className="header-left">
              <Link to="/">
                <img src={Logo} />
              </Link>
              <ul className="nav-list active">
                <NavLink to="/trade">
                  <li>Trade</li>{" "}
                </NavLink>
                <NavLink to="/explore">
                  <li>Explore</li>{" "}
                </NavLink>
                <NavLink to="/pool" className="pool-positions">
                  <li>Pool</li>
                </NavLink>
              </ul>
              <img
                src={hamburgerIcon}
                alt="Menu"
                className="hamburger"
                onClick={toggleMenu}
              />
              <div className="input-display">
                <div className="right">
                  <img src={searchIcon} />
                  <input type="search" placeholder="Search Tokens" />
                </div>
                <div className="left">/</div>
              </div>
            </div>
            <div className="hamburger-main">
              <div className="right">
                <div className="right">
                  <img src={searchIcon} />
                  <input type="search" placeholder="Search Tokens" />
                </div>
                <div className="left">/</div>
              </div>
            </div>

            {account ? (
              <div className={`lt `}>
                <p onClick={handleSidebarToggle} className="toggle-button">
                  &lt;&lt;
                </p>
                {showSidebar && (
                  <Sidebar handleSidebarToggle={handleSidebarToggle} />
                )}
              </div>
            ) : (
              <div className="right-right">
                <img src={ballIcon} onClick={() => setShowNetworkModal(true)} />
                <SupportedNetworkModal
                  showNetworkModal={showNetworkModal}
                  setShowNetworkModal={setShowNetworkModal}
                />
                <ConnectWalletDefault />
              </div>
            )}
          </div>
          {menuOpen && (
            <div className="mobile-nav active">
              <div className="cross-icon">
                <img onClick={toggleMenu} src={crossIcon} alt="Close Menu" />
              </div>
              <div className="right">
                <ul className="donatuz-header-ul active">
                  <li>
                    <NavLink to="/trade" onClick={toggleMenu}>
                      trade
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/explore" onClick={toggleMenu}>
                      Explore
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pool" onClick={toggleMenu}>
                      Pool
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/new-positions" onClick={toggleMenu}>
                      View Positions
                    </NavLink>
                  </li>
                </ul>
                {/* <div className="right">
                <div className="right-mobile-nav-search-bar">
                  <img src={searchIcon} />
                  <input type="search" placeholder="Search Tokens" />
                </div>
                <div className="left">/</div>
              </div> */}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Header;
