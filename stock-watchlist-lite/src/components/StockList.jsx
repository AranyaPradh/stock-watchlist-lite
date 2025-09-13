// import React from 'react';

// const StockList = ({ stocks }) => {
//   return (
//     <div className="stock-list">
//       {stocks.map((stock, index) => (
//         <div key={index} className="stock-card">
//           <h3>{stock.symbol}</h3>
//           <p>Capital Market: {stock.capitalMarketPrice}</p>
//           <p>Futures: {stock.futuresPrice}</p>
//           <p
//             style={{
//               color: stock.percentageChange >= 0 ? 'green' : 'red'
//             }}
//           >
//             {stock.percentageChange}%
//           </p>
//           <p>Last Updated: {new Date(stock.lastUpdated).toLocaleTimeString()}</p>
//           {stock.error && <p style={{ color: 'red' }}>⚠ {stock.error}</p>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StockList;
