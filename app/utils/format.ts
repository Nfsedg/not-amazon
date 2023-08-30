export function formatCurrency(paramNum: number): string {
  const formatNumber = paramNum.toLocaleString("en-US")
  return `$${formatNumber}`
}