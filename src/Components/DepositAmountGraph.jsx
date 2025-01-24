import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, ReferenceLine, Dot } from 'recharts';

const data = [
  { name: 'Point 1', value: 400 },
  { name: 'Point 2', value: 300 },
  { name: 'Point 3', value: 200 },
  { name: 'Point 4', value: 250 },
  { name: 'Point 5', value: 400 }, // Adjust data as needed
];

const CustomDot = (props) => {
  const { cx, cy } = props;
  return (
    <circle cx={cx} cy={cy} r={5} fill="#FF4D4D" stroke="none" />
  );
};

const DepositAmountGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis hide />
        <YAxis hide />
        <ReferenceLine y={300} stroke="#FF4D4D" strokeDasharray="3 3" />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#FF4D4D"
          strokeWidth={2}
          dot={<CustomDot />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DepositAmountGraph;