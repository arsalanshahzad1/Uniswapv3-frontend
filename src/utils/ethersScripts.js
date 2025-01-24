import { ethers } from "ethers";
import { contractABI, ERC20ABI, managerABI, quoterAbi, routerAbi } from "../constants";
import { tickCalculation } from "./ticksScript";
import { TickMath } from "@uniswap/v3-sdk";
import { routerAddress } from "../client";

export const readBalance = async (tokenAddress, walletAddress) => {
  try {
    const provider = new ethers.JsonRpcProvider(
      "https://42019.rpc.thirdweb.com"
    );

    const contract = new ethers.Contract(tokenAddress, ERC20ABI, provider);

    const decimals = await contract.decimals();

    const formattedBalance = await contract.balanceOf(walletAddress);

    // const formattedBalance = ethers.formatUnits(rawBalance, decimals);

    console.log(`Balance of ${walletAddress}: ${formattedBalance} tokens`);

    return { formattedBalance, decimals };
  } catch (error) {
    console.log(error);
    return 0;
  }
};

export const erc20Approve = async (address, spender, amount) => {
  // address => token address
  // spender => positionManager address
  // amount => depost amount
  try {
    let decimals;
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum); // Using MetaMask
      await provider.send("eth_requestAccounts", []); // Request account access if needed
      const signer = await provider.getSigner();

      // Create a contract instance
      const contract = new ethers.Contract(address, ERC20ABI, signer);

      // Call the read function
      const gas = await contract.approve.estimateGas(spender, amount);
      decimals = await contract.decimals();
      // scaledAmont = ethers.parseUnits(amount.toString(), decimals);
      console.log(`the gas value returned is ${gas}`);
      const result = await contract.approve(spender, amount, {
        gasLimit: gas,
      }); // Replace with your contract function name
      console.log("Read Function Result:", result);
    }
    return decimals;
  } catch (error) {
    throw new Error(error);
  }
};

export const createPool = async (
  contractAddress,
  poolPayload,
  decimalsToken0,
  decimalsToken1
) => {
  const { token0, token1, feeTier, price, priceLower, priceUpper } =
    poolPayload;

  const token0Address = token0.address;
  const token1Address = token1.address;

  const tickSpacing =
    feeTier === 100
      ? 1
      : feeTier === 500
      ? 10
      : feeTier === 3000
      ? 60
      : feeTier === 10000
      ? 200
      : 0;

  // Connect to an Ethereum provider
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum); // Using MetaMask
    await provider.send("eth_requestAccounts", []); // Request account access if needed
    const signer = await provider.getSigner();

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const { tickLower, tickUpper } = tickCalculation(
      price,
      priceLower,
      priceUpper,
      decimalsToken0,
      decimalsToken1,
      tickSpacing
    );

    const sqrt = TickMath.getSqrtRatioAtTick(tickSpacing);
    const sqrtPriceX96 = sqrt.toString();

    // Call the read function
    console.log(
      "before gas estimation ",
      token0Address,
      token1Address,
      feeTier
    );
    const gas = await contract.createAndInitializePoolIfNecessary.estimateGas(
      token1Address,
      token0Address,
      feeTier,
      sqrtPriceX96,
      { value: 0 }
    );

    console.log(`the gas value returned is ${gas}`);
    const result = await contract.createAndInitializePoolIfNecessary(
      token1Address,
      token0Address,
      feeTier,
      sqrtPriceX96,
      { value: 0, gasLimit: gas }
    ); // Replace with your contract function name
    console.log("Read Function Result:", result);

    return { tickLower, tickUpper };
  }
};

// call below after 3 seconds wait of createPool
export const mintFunction = async (
  address, //positionManager address
  token0, // one of the tokens
  token1, // one of the tokens `
  fee, // fee
  tickLower, //ticks lower calculated from the script
  tickUpper, // tick upper calculated from the script
  amount0Desired, // deposit amount
  amount1Desired, //deposit amount
  amount0Min, // can be 0 as well same as deposit amount
  amount1Min, // can be 0 as well same as deposit amount
  recipient, // address of the connected account
  deadline // current time + 2 to 3 minutes in unix format
) => {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum); // Using MetaMask
    await provider.send("eth_requestAccounts", []); // Request account access if needed
    const signer = await provider.getSigner();

    // Create a contract instance
    const contract = new ethers.Contract(address, managerABI, signer);

    //expected params
    //   "function mint((address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint256 amount0Desired, uint256 amount1Desired, uint256 amount0Min, uint256 amount1Min, address recipient, uint256 deadline) params) payable returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)",

    // Call the read function
    const date = Date.now();
    const gas = await contract.mint.estimateGas({
      token0,
      token1,
      fee,
      tickLower,
      tickUpper,
      amount0Desired,
      amount1Desired,
      amount0Min,
      amount1Min,
      recipient,
      deadline,
    });

    console.log(`the gas value returned is ${gas}`);
    const result = await contract.mint(
      {
        token0,
        token1,
        fee,
        tickLower,
        tickUpper,
        amount0Desired,
        amount1Desired,
        amount0Min,
        amount1Min,
        recipient,
        deadline,
      },
      { value: 0, gasLimit: gas }
    );
    console.log("mint Function Result:", result);
  }
};

export const quoteFunction = async (
  contractAddress,//quoter Address
  token0,//input Token
  token1,// outPut token
  fee, //pool fee tier
  amountIn

) => {
  const path = ethers.solidityPacked(
    ["address", "uint24", "address"],
    [token1,fee,token0] // WETH -> DAI with a fee of 500 (0.05%)
  );
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum); // Using MetaMask
    await provider.send("eth_requestAccounts", []); // Request account access if needed
    const signer = await provider.getSigner();

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, quoterAbi, signer);

  
    const gas = await contract.quoteExactInput.estimateGas(
     path,
     ethers.parseUnits(amountIn.toString(),18)
    );

    const statics = await contract.quoteExactInput.staticCall(
      path,
      amountIn,{gasLimit:gas}
     );
     const { amountOut, sqrtPriceX96AfterList, initializedTicksCrossedList, gasEstimate } = statics;


     console.log(`the result of static call is ${statics} and the return value will be ${amountOut}`)

    console.log(`the gas value returned is ${gas}`);
    return amountOut;
    

  }
};

export const swapFunction = async (token0, fee,token1,recipient, amountIn,amountOut) => {

  
  console.log(`before all token0: ${token0}
    token1: ${token1}
    fee: ${fee}
    recipient: ${recipient}
    scaledAmountIn: ${amountIn}
    scaledAmountOut: ${amountOut}
    `)

  const currentTime = Date.now();
  const twoToThreeMinutesLater = currentTime + 2 * 60 * 1000; // For 2 minutes
  // Convert to Unix timestamp (seconds)
  const unixTimestamp = Math.floor(twoToThreeMinutesLater / 1000);

  const path = ethers.solidityPacked(
    ["address", "uint24", "address"],
    [token0,fee,token1] // WETH -> DAI with a fee of 500 (0.05%)
  );
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum); // Using MetaMask
    await provider.send("eth_requestAccounts", []); // Request account access if needed
    const signer = await provider.getSigner();

    // Create a contract instance
    const contract = new ethers.Contract(routerAddress, routerAbi, signer);

    
    const scaledAmountIn = ethers.parseUnits(amountIn.toString(),18)
    const scaledAmountOut = ethers.parseUnits(amountOut.toString(),18)
  
    const params = {
      path,
      recipient,
      deadline: unixTimestamp,
      amountIn: scaledAmountIn,
      amountOutMinimum: scaledAmountOut,
    };
    const gas = await contract.exactInput.estimateGas(
      params,{value:0}
    );

    console.log(`after gas token0: ${token0}
      token1: ${token1}
      fee: ${fee}
      recipient: ${recipient}
      scaledAmountIn: ${scaledAmountIn}
      scaledAmountOut: ${scaledAmountOut}
      `)

    const statics = await contract.exactInput(
      params,{value:0,gasLimit:gas}
     );



    console.log(`the gas value returned is ${gas} and the statics are ${statics}`);
    

  }
};
