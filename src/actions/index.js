export const fetchData = res => ({
  type: 'API_GET',
  res
})

export const singleData = (single, count) => ({
  type: 'SINGLE_DATA',
  single,
  count
})

export const closeSingle = close => ({
  type: 'SINGLE_CLOSE',
  close
})
