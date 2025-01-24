import React, { useEffect, useState } from "react";
import ethLogo from "../assets/ethereum-logo.png";
import editLogo from "../assets/edit-logo.png";
import DepositAmountGraph from "./DepositAmountGraph";
import { useActiveAccount } from "thirdweb/react";
import { readBalance } from "../utils/ethersScripts";
import { ethers } from "ethers";

const DepositAmounts = ({ poolPayload, setPoolPayload, setCurrentTab, onCreatePool }) => {
  const { address } = useActiveAccount();
  const [balance0, setBalance0] = useState({});
  const [balance1, setBalance1] = useState({});
  const [balance0Error, setBalance0Error] = useState(false);
  const [balance1Error, setBalance1Error] = useState(false);

  useEffect(() => {
    getBalance();
  }, [address]);

  const getBalance = async () => {
    const [tokenBalance0, tokenBalance1] = await Promise.all([
      readBalance(poolPayload.token0.address, address),
      readBalance(poolPayload.token1.address, address),
    ]);

    setBalance0(tokenBalance0);
    setBalance1(tokenBalance1);
  };

  const handleChangeBalance = (inputBalance, tokenNumber) => {
    if (tokenNumber === 0) {
      const formattedInputBalance = ethers.parseUnits(
        inputBalance.toString(),
        balance0.decimals
      );
      setPoolPayload((prev) => ({
        ...prev,
        amount0Desired: formattedInputBalance,
      }));
      if (formattedInputBalance > balance0.formattedBalance) {
        setBalance0Error(true);
      } else {
        setBalance0Error(false);
      }
    } else if (tokenNumber === 1) {
      const formattedInputBalance = ethers.parseUnits(
        inputBalance.toString(),
        balance1.decimals
      );
      setPoolPayload((prev) => ({
        ...prev,
        amount1Desired: formattedInputBalance,
      }));
      if (formattedInputBalance > balance1.formattedBalance) {
        setBalance1Error(true);
      } else {
        setBalance1Error(false);
      }
    }
  };

  return (
    <div className="deposit-amount">
      <div className="top">
        <div className="left">
          <img src={ethLogo} />
          <p>WBTC / ETH</p>
          <p>v3</p>
          <p>0.03%</p>
        </div>
        <div className="right">
          <p>Edit</p>
          <img src={editLogo} />
        </div>
      </div>
      <div className="center">
        <div className="left" style={{ width: "300px", height: "110px" }}>
          <DepositAmountGraph />
        </div>
        <div className="right">
          <div className="left-min">
            <p>
              {" "}
              <span>Min </span> 123.23 ZRX/ETH{" "}
            </p>
            <p>
              {" "}
              <span>Min </span> 123.23 ZRX/ETH{" "}
            </p>
          </div>
          <div className="edit-button">
            <p>Edit</p>
            <img src={editLogo} />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="heading">
          <h1>Deposit tokens</h1>
          <p>Specify the token amounts for your liquidity contributions.</p>
        </div>
        <div className="deposit-tokens">
          <div className="left">
            <input
              className={balance0Error && "error"}
              type="number"
              placeholder="0"
              onChange={(e) => handleChangeBalance(e.target.value, 0)}
            />
            <p>$0.00</p>
          </div>
          <div className="deposit-amount-container">
            <div className="right">
              <div className="top-right">
                <img src={ethLogo} />
                <h1>ETH</h1>
              </div>
              <div className="bottom-right">
                {/* <p>0 ETH </p>
              <p> Max</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="deposit-tokens">
          <div className="left">
            <input
              className={balance1Error && "error"}
              type="number"
              placeholder="0"
              onChange={(e) => handleChangeBalance(e.target.value, 1)}
            />
            <p>$0.00</p>
          </div>
          <div className="deposit-amount-container">
            <div className="right">
              <div className="top-right">
                <img src={ethLogo} />
                <h1>ETH</h1>
              </div>
              <div className="bottom-right">
                {/* <p>0 ETH </p>
              <p> Max</p> */}
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={balance0Error || balance1Error || !poolPayload.amount0Desired || !poolPayload.amount1Desired}
          className="select-pair-button"
          onClick={onCreatePool}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DepositAmounts;
