import React from 'react';
import ethLogo from "../assets/ethereum-logo.png";
import { Link } from 'react-router-dom';


const ExplorePools = () => {
  const tableData = [
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
    { id: 1, ethereumLogo: ethLogo,  wbtc: 'WBTC/ETH', v3: 'v3', poolFour: '0.03%', tvl: '$25.2M', apr: '1.106%', idVol: '$1.7M', bdVol: '$123.4M', idVolTvl: '0.01' },
  ];

  return (
    <div className="pools">
      {/* <h1>Pools</h1> */}
      <Link to='/pools-detail'>
      <table  className='explore-table'>
        <thead >
          <tr>
            <th>#</th>
            <th>Pool</th>
            <th>↓ TVL</th>
            <th>APR</th>
            <th>ID vol</th>
            <th>BD vol</th>
            <th>ID vol/TVL</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td className='pool-pool'>
                <img src={row.ethereumLogo} />
                <p>{row.wbtc}</p>
                <p>{row.v3}</p>
                <p>{row.poolFour}</p>
                </td>
              <td>{row.tvl}</td>
              <td>{row.apr}</td>
              <td>{row.idVol}</td>
              <td>{row.bdVol}</td>
              <td>{row.idVolTvl}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Link>
    </div>
  );
};

export default ExplorePools;
