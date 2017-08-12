import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const store = createStore(reducers, applyMiddleware(thunk))

export default store
