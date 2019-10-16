import { combineReducers, createStore } from 'redux'

// /actions/actions.js
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

// /reducers/reducers.js
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
      console.log('action.single', action.single)
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

// /store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState)
  return store
}

export const store = configureStore()
