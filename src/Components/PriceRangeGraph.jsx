// import React from 'react';
// import { BarChart, Bar, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 1000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 1000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 4000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 4000,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 4000,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 3000,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3000,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     name: 'Page C',
//     uv: 3000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 4000,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 4000,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 3000,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3000,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const PriceRangeGraph = () => {
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <BarChart
//         width={150}
//         height={40}
//         data={data}
//         barCategoryGap="0%" 
//         barGap={0}       
//       >
//         <Bar dataKey="uv" fill="#514DFB" stroke='none' fill-opacity= '0.1' />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default PriceRangeGraph;




import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { name: '0', uv: 1000 },
  { name: '1000', uv: 1000 },
  { name: '2000', uv: 8000 },
  { name: '4000', uv: 8000 },
  { name: '6000', uv: 8000 },
  { name: '8000', uv: 6000 },
  { name: '10000', uv: 6000 },
  { name: '12000', uv: 6000 },
  { name: '14000', uv: 7000 },
  { name: '16000', uv: 7000 },
  { name: '18000', uv: 7000 },
  { name: '20000', uv: 3000 },
];

const PriceRangeGraph = () => {
  return (
    <div >
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          barCategoryGap="0%"
          barGap={0}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
          {/* XAxis for Labels */}
          <XAxis dataKey="name" hide={false} tick={{ fill: '#ffffff', fontSize: 12 }} />
          {/* Hide YAxis if not needed */}
          <YAxis hide={true} />
          {/* Bars */}
          <Bar dataKey="uv" fill="#514DFB" fillOpacity={0.5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceRangeGraph;