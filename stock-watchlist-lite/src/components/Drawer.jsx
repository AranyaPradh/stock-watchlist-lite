import React from 'react'
import { calcPctChange } from '../utils'


export default function Drawer({ open, stock, onClose }) {
if (!open) return null
if (!stock) return (
<div className="drawer">
<button className="close" onClick={onClose}>Close</button>
<div className="drawer-body">No data available for this item.</div>
</div>
)


const { symbol, cmLTP, futLTP, prevClose, updatedAt } = stock
// dummy chart data: 30 points around cmLTP
const points = Array.from({ length: 30 }, (_, i) => (cmLTP * (0.97 + Math.random() * 0.06))).map(v => Number(v.toFixed(2)))


return (
<div className="drawer">
<button className="close" onClick={onClose}>Close</button>
<div className="drawer-body">
<h3>{symbol} — Details</h3>
<div className="chart" aria-hidden>
{points.map((p, i) => (
<div key={i} className="chart-bar" style={{height: `${Math.round((p / Math.max(...points)) * 100)}%`}} title={p}></div>
))}
</div>
<div className="detail-list">
<div>Capital Market LTP: {cmLTP.toFixed(2)}</div>
<div>Futures LTP: {futLTP.toFixed(2)}</div>
<div>Previous Close: {prevClose.toFixed(2)}</div>
<div>Change (CM): {calcPctChange(prevClose, cmLTP).toFixed(2)}%</div>
<div>Change (FUT): {calcPctChange(prevClose, futLTP).toFixed(2)}%</div>
<div>Last updated: {new Date(updatedAt).toLocaleString()}</div>
</div>
</div>
</div>
)
}