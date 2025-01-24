import React, { useState } from "react";
import Header from "./Header";
import ArrowRightSide from "../assets/arrow-right-side.png";
import resetIcon from "../assets/reset-icon.png";
import settingIcon from "../assets/setting-icon.png";
import SelectPair from "./SelectPair";
import PriceRange from "./PriceRange";
import DepositAmounts from "./DepositAmounts";
import SettingModal from "./SettingModal";
import { ResetModal } from "./ResetModal";
import { contractABI } from "../constants";
import { ethers } from "ethers";
import { positionManagerAddress, positionManagerContract } from "../client";
import { TickMath } from "@uniswap/v3-sdk";
import { createPool, erc20Approve, mintFunction } from "../utils/ethersScripts";
import { useActiveAccount } from "thirdweb/react";
import LoadingComponent from "./LoadingComponent";

const NewPosition = () => {
  const account = useActiveAccount();
  const address = account?.address;
  const [currentTab, setCurrentTab] = useState("one step");
  const [currentModal, setCurrentModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState(false)
  const [poolPayload, setPoolPayload] = useState({
    token0: null,
    token1: null,
    feeTier: 3000,
    price: null,
    priceLower: null,
    priceUpper: null,
    amount0Desired: null,
    amount1Desired: null,
  });

  console.log("poolPayload => ", poolPayload);

  const handleCreatePool = async () => {
    console.log("create pool");
    setLoading(true)
    try {
      // // Approve transaction
      setLoadingText("Approving the tokens")
      const [decimalsToken0, decimalsToken1] = await Promise.all([
        erc20Approve(
          poolPayload.token0.address,
          positionManagerAddress,
          poolPayload.amount0Desired
        ),
        erc20Approve(
          poolPayload.token1.address,
          positionManagerAddress,
          poolPayload.amount1Desired
        ),
      ]);

      const decimalsToken0Number = 18;
      const decimalsToken1Number = 18;

      console.log("Approved");

      setLoadingText("Your Tokens are Approved, Preparing for the pool creation")

      await new Promise((resolve) => setTimeout(resolve, 5000));

      console.log("Pool execution start");
      setLoadingText("Pool creation start")

      //create pool
      const { tickLower, tickUpper } = await createPool(
        positionManagerAddress,
        poolPayload,
        decimalsToken0Number,
        decimalsToken1Number
      );

      console.log("ticks ", tickLower, tickUpper);

      setLoadingText("Pool Created Successfuly, Preparing to adding lquidity")

      await new Promise((resolve) => setTimeout(resolve, 5000));

      setLoadingText("Adding Lquidity")

      // mint
      const currentTime = Date.now();
      const twoToThreeMinutesLater = currentTime + 2 * 60 * 1000; // For 2 minutes
      // Convert to Unix timestamp (seconds)
      const unixTimestamp = Math.floor(twoToThreeMinutesLater / 1000);

      console.log("Unix timestamp (current time + 2 minutes):", unixTimestamp);

      await mintFunction(
        positionManagerAddress,
        poolPayload.token1.address,
        poolPayload.token0.address,
        poolPayload.feeTier,
        tickLower,
        tickUpper,
        poolPayload.amount0Desired,
        poolPayload.amount1Desired,
        0,
        0,
        address,
        unixTimestamp
      );

      setLoading(false)
      setLoadingText("")

      return;
      const sqrt = TickMath.getSqrtRatioAtTick(tickSpacing);
      const sqrtPriceX96 = sqrt.toString();

      console.log("poolPayload ", token0, token1);
      console.log(sqrt, sqrtPriceX96);
      console.log("Script start");
      console.log("positionManagerContract: ", positionManagerContract);
      console.log("client: ", client);

      // const transaction =  prepareContractCall({
      //   contract: positionManagerContract,
      //   method:
      //     "function createAndInitializePoolIfNecessary(address token0, address token1, uint24 fee, uint160 sqrtPriceX96) payable returns (address pool)",
      //   params: [token0, token1, feeTier, sqrtPriceX96],
      //   value: 0,
      // });

      // console.log("transaction => " ,transaction)
      // const transactionWithValue = {
      //   transaction,
      //   value: "0", // 1 ETH in wei
      // };

      // const response =   sendTransaction(transaction);
      // const response = sendTx(transaction)
      // console.log("send log ", response)

      // custom ethers =============

      // Connect to an Ethereum provider\
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum); // Using MetaMask
        await provider.send("eth_requestAccounts", []); // Request account access if needed
        const signer = await provider.getSigner();

        // Create a contract instance
        const contract = new ethers.Contract(
          "0x87CA0bF49Eeb1e25B2EC7d420aEa085699C19323",
          contractABI,
          signer
        );

        // Call the read function
        const gas =
          await contract.createAndInitializePoolIfNecessary.estimateGas(
            token1,
            token0,
            feeTier,
            sqrtPriceX96,
            { value: 0 }
          );
        console.log(`the gas value returned is ${gas}`);
        const result = await contract.createAndInitializePoolIfNecessary(
          token1,
          token0,
          feeTier,
          sqrtPriceX96,
          { value: 0, gasLimit: gas }
        ); // Replace with your contract function name
        console.log("Read Function Result:", result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
      setLoadingText("")
    }

    ///=========================
  };

  return (
    <>
      <div className="main-landing-page">
        <Header />
        <div className="main-new-position">
          <div className="top">
            <p>
              Your Positions <img src={ArrowRightSide} />{" "}
              <span>New positions</span>
            </p>
          </div>
          <div className="new-position-reset">
            <div className="left">
              <h1>New Positions</h1>
            </div>
            <div className="right">
              <div className="reset-icon">
                <img src={resetIcon} />
                <button onClick={() => setShowModal(true)}>Reset</button>
                <ResetModal showModal={showModal} setShowModal={setShowModal} />
              </div>
              <img
                src={settingIcon}
                onClick={() => setCurrentModal("oneStep")}
              />
            </div>
          </div>
        </div>
        <div className="select-token-pairs">
          <div className="left-side">
            <div className="step-one">
              <div className="left">
                <p
                  onClick={() => {
                    currentTab === "two step" ||
                      (currentTab === "three step" &&
                        setCurrentTab("one step"));
                  }}
                  className={currentTab === "one step" ? "step-active" : ""}
                >
                  1
                </p>
              </div>
              <div className="right">
                <p
                  onClick={() => {
                    (currentTab === "two step" ||
                      currentTab === "three step") &&
                      setCurrentTab("one step");
                  }}
                  className={
                    currentTab === "one step" ? "active-description" : ""
                  }
                >
                  Step 1 <span> Select token pair and fees</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="step-two">
              <div className="left">
                <p
                  onClick={() => {
                    currentTab === "three step" && setCurrentTab("one step");
                  }}
                  className={currentTab === "two step" ? "step-active" : ""}
                >
                  2
                </p>
              </div>
              <div className="right">
                <p
                  onClick={() => {
                    currentTab === "three step" && setCurrentTab("one step");
                  }}
                  className={
                    currentTab === "two step" ? "active-description" : ""
                  }
                >
                  Step 2 <span> Set price range</span>
                </p>
              </div>
            </div>
            <hr />
            <div className="step-three">
              <div className="left">
                <p className={currentTab === "three step" ? "step-active" : ""}>
                  3
                </p>
              </div>
              <div className="right">
                {" "}
                <p
                  className={
                    currentTab === "three step" ? "active-description" : ""
                  }
                >
                  Step 3 <span> Enter deposit amounts</span>
                </p>
              </div>
            </div>
          </div>
          <div className="right-side">
            {currentTab === "one step" ? (
              <SelectPair
                poolPayload={poolPayload}
                setPoolPayload={setPoolPayload}
                setCurrentTab={setCurrentTab}
              />
            ) : currentTab === "two step" ? (
              <div>
                <PriceRange
                  poolPayload={poolPayload}
                  setPoolPayload={setPoolPayload}
                  setCurrentTab={setCurrentTab}
                />
              </div>
            ) : currentTab === "three step" ? (
              <div>
                <DepositAmounts
                  poolPayload={poolPayload}
                  setPoolPayload={setPoolPayload}
                  setCurrentTab={setCurrentTab}
                  onCreatePool={handleCreatePool}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <SettingModal
        currentModal={currentModal}
        setCurrentModal={setCurrentModal}
      />
      {loading && <LoadingComponent message={loadingText} />}
    </>
  );
};

export default NewPosition;
