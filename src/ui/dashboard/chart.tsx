"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", visit: 4000, click: 2400 },
  { name: "Tue", visit: 3000, click: 1398 },
  { name: "Wed", visit: 2000, click: 9800 },
  { name: "Thu", visit: 2780, click: 3908 },
  { name: "Fri", visit: 1890, click: 4800 },
  { name: "Sat", visit: 2390, click: 3800 },
  { name: "Sun", visit: 3490, click: 4300 },
];

const Chart: React.FC = () => {
  return (
    <div className="h-72">
      <h1 className="text-2xl font-bold mb-4">Weekly Analysis</h1>
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#FF5733"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#33FF57"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
