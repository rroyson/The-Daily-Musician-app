import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { merge } from 'ramda'
import logo from './logo.gif'

const store = createStore(
  combineReducers({
    app,
    counter,
    results,
    q
  }),
  applyMiddleware(thunk)
)

export default store

// reducers
function q(state = 'foo', action) {
  switch (action.type) {
    case 'SET_Q':
      return action.payload
    default:
      return state
  }
}

function results(state = [{ imdbID: 1, Title: 'Batman' }], action) {
  switch (action.type) {
    case 'SET_RESULTS':
      return action.payload
    default:
      return state
  }
}

function counter(state = 13, action) {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    default:
      return state
  }
}

function app(state = { title: 'Movie Search', logo }, action) {
  switch (action.type) {
    case 'SET_APP_TITLE':
      return merge(state, { title: action.payload })
    default:
      return state
  }
}

// const action = {type: 'SET_APP_TITLE', payload: 'Awesome Movie Search'}
// dispatch(action)
