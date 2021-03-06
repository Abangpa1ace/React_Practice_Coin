// API URI
export const COINS_API = 'https://api.coingecko.com/api/v3/coins';

// Select-Box List
export const selectList = {
  filter: ['전체', '북마크'],
  unit: ['krw', 'usd'],
  count: [50, 30, 10],
}

export const currencyRegex = {
  cryptocurrency: /^[0-9.]/g,
  currency: /^[0-9]/g,
}