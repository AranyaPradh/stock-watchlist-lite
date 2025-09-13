import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function StockChart({ stock }) {
  if (!stock) return null;

  const cmPrice = stock.cmLTP || 0;
  const futPrice = stock.futLTP || 0;

  const data = Array.from({ length: 10 }).map((_, i) => ({
    time: `T-${10 - i}`,
    CM: parseFloat((cmPrice + (Math.random() - 0.5) * 10).toFixed(2)),
    FUT: parseFloat((futPrice + (Math.random() - 0.5) * 10).toFixed(2)),
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="CM" stroke="#760707ff" />
          <Line type="monotone" dataKey="FUT" stroke="#300760ff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
