import React from 'react';
import ExploreTinyLineChart from './ExploreTinyLineChart';
import ethLogo from '../assets/ethereum-logo.png'
import { Link } from 'react-router-dom';
import volumeIcon from '../assets/volume-icon.png'

const ExploreTokens = () => {
  const tableData = [
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
    {
      id: 1,
      tokenName: "Ethereum ETH",
      price: "$2536.23",
      oneHour: "+4.06%",
      oneDay: "+4.06%",
      fdv: "$123B",
      volume: <ExploreTinyLineChart/>,
      oneHourChange: "positive", 
      oneDayChange: "positive", 
    },
  ];

  return (
    <div className="tokens">
      {/* <h1>Tokens</h1> */}
      <Link to='/token-detail'>
      <table className="explore-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Token Name</th>
            <th>Price</th>
            <th>1 Hour</th>
            <th>1 Day</th>
            <th>FDV</th>
            <th className='table-volume-icon'><span><img src={volumeIcon}/></span>Volume</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td className="token-name">
                <div className="token-info">
                  <span className="token-icon"><img src={ethLogo}/></span> {row.tokenName}
                </div>
              </td>
              <td>{row.price}</td>
              <td
                className={row.oneHourChange === "positive" ? "green" : "red"}
              >
                {row.oneHour}
              </td>
              <td
                className={row.oneDayChange === "positive" ? "green" : "red"}
              >
                {row.oneDay}
              </td>
              <td>{row.fdv}</td>
              <td className="volume">
                <span >{row.volume}</span>
                <div className='token-chart' style={{ width: "100px", height: "100px" }}>
                <ExploreTinyLineChart/>
                </div >
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </Link>
    </div>
  );
};

export default ExploreTokens;
