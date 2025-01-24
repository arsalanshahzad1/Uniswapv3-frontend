import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '2021', uv: 4000, pv: 2400, amt: 2400 },
  { name: '2022', uv: 3000, pv: 1398, amt: 2210 },
  { name: '2023', uv: 2000, pv: 9800, amt: 2290 },
  { name: '2024', uv: 2780, pv: 3908, amt: 2000 },
  { name: '2025', uv: 1890, pv: 4800, amt: 2181 },
  { name: '2026', uv: 2390, pv: 3800, amt: 2500 },
  { name: '2027', uv: 3490, pv: 4300, amt: 2100 },
];

const ExploreLineChart = () => {
  return (
    <div className='explorelinechart'>
      <p  style={{fontSize: '18px', marginLeft: '30px' }}>Donatuz TVL</p>
      <h1 style={{ marginLeft: '30px', fontSize: '32px', marginBottom: '30px' }}>
        $4.42B
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 14 }} />
          <Line type="monotone" dataKey="pv" stroke=" #0E9CFF" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#DA364C" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExploreLineChart;
