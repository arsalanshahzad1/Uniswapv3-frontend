import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Nov 4', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Nov 9', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Nov 14', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Nov 19', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Nov 24', uv: 2390, pv: 4000, amt: 2100 },
  { name: 'Nov 29', uv: 2390, pv: 4300, amt: 2100 },
  { name: 'Dec 2024', uv: 3890, pv: 3500, amt: 2100 },
];

function ExploreBarChart() {
  return (
    <div className='explorebarchart' style={{ width: '100%', height: '400px', }}>
      <div className="explore-bar-top">
                <div className="explore-page-top">
                    <p>D</p>
                    <p>W</p>
                    <p>M</p>
                  </div>
                  </div>
      <p style={{ marginLeft: '30px', fontSize: '18px'}}>Dontauz Volume</p>
      <h1 style={{ marginLeft: '30px', fontSize: '26px' }}>
        Our Last Month Profit
      </h1>
      <p style={{ marginLeft: '30px', fontSize: '18px'}}>Past Month</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 14 }} />
          <Bar dataKey="pv" stackId="a" fill="#0084F0" />
          <Bar dataKey="uv" stackId="a" fill="#BA343D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExploreBarChart;
