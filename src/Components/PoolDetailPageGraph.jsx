// import React from 'react';
// import { BarChart, Bar, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const PoolDetailPageGraph = () => (
//   <ResponsiveContainer width="100%" height="100%">
//     <BarChart width={150} height={40} data={data}>
//       <Bar dataKey="uv" fill="#8884d8" />
//     </BarChart>
//   </ResponsiveContainer>
// );

// export default PoolDetailPageGraph;

import React from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const data = [
  {
    name: '5:32 PM',
    uv: 2,
  },
  {
    name: '11:32 PM',
    uv: 4,
  },
  {
    name: 'Nov 28',
    uv: 6,
  },
  {
    name: '11:32 AM',
    uv: 8,
  },
  {
    name: '3:32 PM',
    uv: 10,
  },
  {
    name: 'Nov 28',
    uv: 6,
  },
  {
    name: '11:32 AM',
    uv: 8,
  },
  {
    name: '3:32 PM',
    uv: 10,
  },
  {
    name: 'Nov 28',
    uv: 6,
  },
  {
    name: '11:32 AM',
    uv: 8,
  },
  {
    name: '3:32 PM',
    uv: 10,
  },
];

const PoolDetailPageGraph = () => (
  <div style={{ width: '100%', height: 450 }}>
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 20,
          bottom: 10,
        }}
      >
        {/* Subtle grid lines */}
        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#3E3E3E" />
        
        {/* X-Axis */}
        <XAxis
          dataKey="name"
          tick={{ fill: '#C0C0C0', fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />

        {/* Y-Axis */}
        <YAxis
          tick={{ fill: '#C0C0C0', fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          domain={[0, 10]}
          unit="M"
        />

        {/* Tooltip */}
        <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bars */}
        <Bar
          dataKey="uv"
          fill="#514DFB"
          barSize={30}
          radius={[5, 5, 0, 0]} // Rounded corners at the top
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default PoolDetailPageGraph;
