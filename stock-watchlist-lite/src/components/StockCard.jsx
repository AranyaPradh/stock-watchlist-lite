import React from "react";
import { calcPctChange, formatAgo } from "../utils";

export default function StockCard({ stock, onClick }) {
  if (!stock) return null;

  const { symbol, cmLTP = 0, futLTP = 0, prevClose = 0, updatedAt } = stock;
  const cmPct = calcPctChange(prevClose, cmLTP);
  const futPct = calcPctChange(prevClose, futLTP);

  return (
    <div className="card" onClick={onClick}>
      <div className="card-top">
        <strong>{symbol}</strong>
      </div>

      <div className="prices">
        <div>CM: {cmLTP.toFixed(2)}</div>
        <div>FUT: {futLTP.toFixed(2)}</div>
      </div>

      <div className="pct-row">
        <div className={cmPct >= 0 ? "pct-positive" : "pct-negative"}>
          {cmPct.toFixed(2)}%
        </div>
        <div className="updated">{formatAgo(updatedAt)}</div>
      </div>
    </div>
  );
}
