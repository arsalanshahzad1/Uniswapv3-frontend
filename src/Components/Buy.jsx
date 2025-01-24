import React, { useState } from "react";
import ethereumLogo from "../assets/ethereum-logo.png";
import { Modal } from "./Modal";
import dropdownLogo from "../assets/dropdown-logo.svg";
import countries from 'world-countries';
import { SelectCountryModal } from "./SelectCountryModal";
import { CheckOutModal } from "./CheckOutModal";



const Buy = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleSelect = (event) => {
      const countryCode = event.target.value;
      const country = countries.find((c) => c.cca3 === countryCode);
      setSelectedCountry(country);
    };


    
  const [showModal, setShowModal] = useState({});
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleShowModal = (modalType, show) => {
    setShowModal((prev) => ({
      ...prev,
      [modalType]: show,
    }));
  };

  return (
    <>
      <div className="buy-trade">
        <div className="top">
          <div className="up">
            <p>you're Buying</p>
            <SelectCountryModal/>


          </div>
          <div className="down">
            <h1>$100</h1>
            <p>
              <span>
                <img src={ethereumLogo} />
              </span>{" "}
              26347 ETH{" "}
              <span>
                <img src={dropdownLogo} />
              </span>
            </p>
            <p className="insufficient">Insufficient funds</p>
            <div className="market">
                    <p>Market</p>
                    <p>+1%</p>
                    <p>+5%</p>
                    <p>+10%</p>
                </div>
          </div>
        </div>
        <div className="buy-trade-button">
          <button onClick={() => setShowCheckoutModal(true)} >Continue</button> 
          <CheckOutModal showCheckoutModal={showCheckoutModal} setShowCheckoutModal={setShowCheckoutModal} />
        </div>
      </div>
      <Modal showModal={showModal.ethModal} setShowModal={handleShowModal} />
    </>
  );
};

export default Buy;
