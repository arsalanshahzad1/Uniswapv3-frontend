import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 80 },
  { name: "Feb", value: 75 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 40 },
  { name: "May", value: 70 },
  { name: "Jun", value: 65 },
  { name: "Jul", value: 90 },
  { name: "Aug", value: 80 },
  { name: "Sep", value: 75 },
  { name: "Oct", value: 60 },
  { name: "Nov", value: 40 },
  { name: "May", value: 70 },
  { name: "Dec", value: 65 },
  { name: "Jan", value: 90 },
];

const TokenDetailPageGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={400} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <AreaChart data={data}>
        {/* Background grid */}
        <CartesianGrid strokeDasharray="3 3" />
        {/* X and Y Axes */}
        <XAxis dataKey="name" />
        <YAxis />
        {/* Tooltip */}
        <Tooltip />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Area with smooth curve */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TokenDetailPageGraph;