import React from "react";
import donatuzLogo from "../assets/donatuzLogo.png";
import ethLogo from "../assets/ethereum-logo.png";
import { Link } from "react-router-dom";

const ExploreTransactions = () => {
  const tableData = [
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
    {
      id: 300,
      time: "1m ago",
      swap: "Swap",
      ethereumLogo: ethLogo,
      Eth: "ETH For",
      donatuz_Logo: donatuzLogo,
      dsync: "Dsync",
      USD: "$23498598",
      idVol: "$1.7M",
      bdVol: "$123.4M",
      idVolTvl: "0.01",
      token: "2324",
      tokenImg: ethLogo,
      tokenEth: 'ETH',
      dsyncNumber: '23423.23',
      donatuz_Logo: donatuzLogo,
      dsyncText: 'Dsync',
      wallet: 'Oxg5w..13yg'
    },
  ];

  return (
    <div className="transactions">
      {/* <h1>Transactions</h1> */}
      <table className="explore-table">
        <thead>
          
          <tr >
            <th>#</th>
            <th className="pool-detail-page-time"><p>↓</p> Time</th>
            <th>Type</th>
            <th>USD</th>
            <th>Token Amount</th>
            <th>Token Amount</th>
            <th>Wallet</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.time}</td>
              <td className="transaction-type">
                {row.swap}
                <img src={row.ethereumLogo} />
                {row.Eth}
                <img src={row.donatuz_Logo} />
                {row.dsync}
              </td>
              <td>{row.USD}</td>
              <td className="transaction-token-amount">
                {row.token}
                <img src={row.tokenImg}/>
                {row.tokenEth}
                </td>
              <td className="transaction-dsync">
                {row.dsyncNumber}
                <img src={row.donatuz_Logo}/>
                {row.dsyncText}
                </td>
              <td>{row.wallet}</td>
            </tr>
           
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExploreTransactions;
