// Dummy API to simulate stock fetching
export async function fetchStockPrice(symbol) {
  await new Promise((res) => setTimeout(res, 300)); // simulate network delay

  // randomly simulate an error 20% of the time
  if (Math.random() < 0.2) {
    throw new Error("Failed to fetch stock data");
  }

  const cmLTP = parseFloat((Math.random() * 1000).toFixed(2));
  const futLTP = parseFloat((Math.random() * 1000).toFixed(2));
  const prevClose = parseFloat((Math.random() * 1000).toFixed(2));

  return {
    symbol,
    cmLTP,
    futLTP,
    prevClose,
    updatedAt: new Date().toISOString(),
  };
}
