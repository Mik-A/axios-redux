import { combineReducers } from 'redux'
import { fetchData, singleData, closeSingle } from '../actions'

export { fetchData, singleData, closeSingle }

export const gallery = (state = 'Start by clicking fetch data', action) => {
  switch (action.type) {
    case 'API_GET':
      return action.res
    default:
      return state
  }
}
export const single = (state = null, action) => {
  switch (action.type) {
    case 'SINGLE_DATA':
      return action.single
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
