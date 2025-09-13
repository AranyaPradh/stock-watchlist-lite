import React, { useEffect, useState, useMemo } from "react";
import StockCard from "./components/StockCard";
import StockChart from "./components/StockChart";
import { fetchStockPrice } from "./api/stockApi";
import "./styles.css";

export default function App() {
  const [symbols] = useState(["AAPL", "MSFT", "GOOGL", "TSLA", "AMZN"]);
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortDir, setSortDir] = useState("asc");
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadStocks = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await Promise.all(
        symbols.map((s) =>
          fetchStockPrice(s).catch((err) => {
            console.error(err);
            return null;
          })
        )
      );
      setStocks(results.filter(Boolean));
    } catch (err) {
      setError("Error loading stocks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStocks();
    const interval = setInterval(loadStocks, 30000); // auto-refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const filteredAndSorted = useMemo(() => {
    let data = [...stocks];

    if (search) {
      data = data.filter((s) =>
        s.symbol.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy) {
      data.sort((a, b) => {
        let aVal = 0,
          bVal = 0;
        if (sortBy === "pct") {
          aVal = ((a.cmLTP - a.prevClose) / a.prevClose) * 100;
          bVal = ((b.cmLTP - b.prevClose) / b.prevClose) * 100;
        } else if (sortBy === "cm") {
          aVal = a.cmLTP;
          bVal = b.cmLTP;
        } else if (sortBy === "fut") {
          aVal = a.futLTP;
          bVal = b.futLTP;
        }
        return sortDir === "asc" ? aVal - bVal : bVal - aVal;
      });
    }

    return data;
  }, [stocks, search, sortBy, sortDir]);

  return (
    <div className="app">
      <header>
        <h1>📈 Stock Watchlist Lite</h1>
        <div className="controls">
          <input
            placeholder="Search symbol"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onChange={(e) => setSortBy(e.target.value || "")} value={sortBy}>
            <option value="">Sort by</option>
            <option value="pct">% Change (CM)</option>
            <option value="cm">Capital Market LTP</option>
            <option value="fut">Futures LTP</option>
          </select>
          <button onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}>
            {sortDir.toUpperCase()}
          </button>
          <button onClick={loadStocks}>🔄 Refresh</button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
      </header>

      <main>
        <div className="grid">
          {filteredAndSorted.map((stock) => (
            <StockCard
              key={stock.symbol}
              stock={stock}
              onClick={() => setSelected(stock)}
            />
          ))}
        </div>

        {/* Chart below grid */}
        {selected && (
          <div className="chart-container">
            <h2>{selected.symbol} Chart</h2>
            <StockChart stock={selected} />
          </div>
        )}
      </main>
    </div>
  );
}
