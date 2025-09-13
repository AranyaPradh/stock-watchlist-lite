export function calcPctChange(prev, current) {
  if (!prev || isNaN(prev) || !current || isNaN(current)) return 0;
  return ((current - prev) / prev) * 100;
}

export function formatAgo(timestamp) {
  if (!timestamp) return "";
  const diff = Date.now() - new Date(timestamp).getTime();
  if (diff < 1000) return "just now";
  if (diff < 60000) return `${Math.floor(diff / 1000)} sec ago`;
  if (diff < 3600000) return `${Math.floor(diff / 60000)} min ago`;
  return `${Math.floor(diff / 3600000)} hr ago`;
}
