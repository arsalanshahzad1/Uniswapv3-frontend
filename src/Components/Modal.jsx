import React, { useEffect, useState } from "react";
import crossIcon from "../assets/crossIcon.png";
import searchIcon from "../assets/search-icon.png";
import starIcon from "../assets/star-icon.png";
import protocolImg from "../assets/protocol-token-img.png";
import searchErrorIcon from "../assets/search-error-icon.png";
import warningImage from "../assets/warning-popup.png";
import { WarningModal } from "./WarningModal";
import axios from "axios";

const protocolTokens = [
  {
    ProtocolImg: protocolImg,
    name: "OX Protocol Token 1",
    symbol: "ZRX",
    warningimage: warningImage,
  },
  {
    ProtocolImg: protocolImg,
    name: "OX Protocol Token 2",
    symbol: "ZRX",
  },
  {
    ProtocolImg: protocolImg,
    name: "OX Protocol Token 3",
    symbol: "ZRX",
  },
  {
    ProtocolImg: protocolImg,
    name: "OX Protocol Token 4",
    symbol: "ZRX",
  },
  // {
  //   ProtocolImg: protocolImg,
  //   name: "OX Protocol Token 5",
  //   symbol: "ZRX",
  // },
  // {
  //   ProtocolImg: protocolImg,
  //   name: "OX Protocol Token 6",
  //   symbol: "ZRX",
  // },
  // {
  //   ProtocolImg: protocolImg,
  //   name: "OX Protocol Token 7",
  //   symbol: "ZRX",
  // },
  // {
  //   ProtocolImg: protocolImg,
  //   name: "OX Protocol Token 8",
  //   symbol: "ZRX",
  // },
  // {
  //   ProtocolImg: protocolImg,
  //   name: "OX Protocol Token 9",
  //   symbol: "ZRX",
  // },
  // {
  //   ProtocolImg: protocolImg,
  //   name: "OX Protocol Token 5",
  //   symbol: "ZRX",
  // },
  // {
  //   ProtocolImg: protocolImg,
  //   name: "OX Protocol Token 5",
  //   symbol: "ZRX",
  // },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 5",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 1",
  //     symbol: "ZRX",
  //     warningimage: warningImage
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 2",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 3",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 4",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 5",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 6",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 7",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 8",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 9",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 5",
  //     symbol: "ZRX",
  //   },
  //   {
  //     ProtocolImg: protocolImg,
  //     name: "OX Protocol Token 5",
  //     symbol: "ZRX",
  //   },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 5",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 5",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 1",
  //       symbol: "ZRX",
  //       warningimage: warningImage
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 2",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 3",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 4",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 5",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 6",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 7",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 8",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 9",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 5",
  //       symbol: "ZRX",
  //     },
  //     {
  //       ProtocolImg: protocolImg,
  //       name: "OX Protocol Token 5",
  //       symbol: "ZRX",
  //     },
  //       {
  //         ProtocolImg: protocolImg,
  //         name: "OX Protocol Token 5",
  //         symbol: "ZRX",
  //       },
];

export function Modal({ tokens, showModal, setShowModal, selectedToken, setSelectedToken }) {
  const [protocolTokensFiltered, setProtocolTokensFiltered] =
    useState(tokens);
  const [searchVal, setSearchVal] = useState("");
  const [showWarn, setShowWarn] = useState(false);
  const [loading, setLoading] = useState(false);

  // const hanldeSearchToken = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get(
  //       "https://eth.blockscout.com/api/v2/tokens?type=ERC-20&apikey=bd9b40ae-1a73-4a36-8912-9c2aadd92511"
  //     );
  //     console.log("token from donatuz ", res);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   hanldeSearchToken()
  // }, [])

  const filterData = (value) => {
    const filtered = tokens?.filter((val) =>
      val.name.toLowerCase().includes(value.toLowerCase())
    );
    setProtocolTokensFiltered(filtered);
  };

  useEffect(() => {
    filterData(searchVal);
  }, [searchVal]);

  const handleSelectToken = (token) => {
    if (!token.warningimage) {
      setSelectedToken(token);
      setShowModal(false);
    } else {
      setShowWarn(true);
    }
  };

  return (
    <>
      {showModal && (
        <div className="protocol-token-modal-container">
          <div className="protocol-token-modal">
            <div className="cross-icon-modal">
              <img
                src={crossIcon}
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </div>
            <div className="main-modal-content">
              <h1>Select a token</h1>
              <div className="search-input">
                <img src={searchIcon} />
                <input
                  value={searchVal}
                  type="text"
                  placeholder="Search Tokens"
                  onChange={(e) => setSearchVal(e.target.value)}
                />
              </div>
              <div className="star-token">
                <img src={starIcon} />
                <p>Tokens</p>
              </div>
              <div className="protocol-scroll">
                {protocolTokensFiltered?.length ? (
                  protocolTokensFiltered?.map((item, index) => (
                    <div
                      className="protocol-token"
                      key={index}
                      onClick={() => handleSelectToken(item)}
                    >
                      <div className="left">
                        <div className="left">
                          <img src={item.ProtocolImg} />
                        </div>
                        <div className="right">
                          <h2>{item.name}</h2>
                          <p>{item.symbol}</p>
                        </div>
                      </div>
                      <div className="right">
                        <img src={item.warningimage} />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="search-error">
                    <img src={searchErrorIcon} />
                    <p>No Results For {searchVal}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <WarningModal showModal={showWarn} setShowModal={setShowWarn} />
    </>
  );
}
