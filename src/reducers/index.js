import { combineReducers } from 'redux'
import { fetchData, singleData, closeSingle } from '../actions'

export const gallery = (state = 'Start by clicking fetch data', action) => {
  switch (action.type) {
    case 'API_GET':
      return action.res
    default:
      return state
  }
}
export const single = (state = null, action) => {
  const single = { image: action.single, count: action.count }
  switch (action.type) {
    case 'SINGLE_DATA':
      return single
    case 'CLOSE_SINGLE':
      return action.close
    default:
      return state
  }
}

export const reducers = combineReducers({
  gallery,
  single
})

export { fetchData, singleData, closeSingle }
