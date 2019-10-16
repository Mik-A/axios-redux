export const fetchData = res => ({
  type: 'API_GET',
  res
})

export const singleData = single => ({
  type: 'SINGLE_DATA',
  single
})

export const closeSingle = close => ({
  type: 'SINGLE_CLOSE',
  close
})
