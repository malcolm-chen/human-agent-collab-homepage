export function formatDrawingAccuracy(value) {
  if (value == null || value === '') return null
  const n = Number(value)
  if (Number.isNaN(n)) return null
  return `${(n * 100).toFixed(1)}%`
}
