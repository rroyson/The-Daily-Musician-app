import { combineReducers } from 'redux'
import { merge } from 'ramda'
import { SET_PROFILE_X, SET_APP, SET_PROFILE } from './constants'

function app(state = { title: 'WoooHOOO' }, action) {
  switch (action.type) {
    case SET_APP:
      return action.payload
    default:
      return state
  }
}

const profileDefault = {
  _id: '',
  firstName: '',
  lastName: '',
  email: '',
  dob: '',
  gender: 'M',
  bandName: '',
  genre: 'Rock',
  type: 'profile',
  photo: '',
  contacts: []
}

function profile(state = profileDefault, action) {
  switch (action.type) {
    // case SET_PROFILE_X + 'FIRSTNAME':
    //   return merge(state, { firstName: action.payload })
    // case SET_PROFILE_X + 'LASTNAME':
    //   return merge(state, { lastName: action.payload })
    // case SET_PROFILE_X + 'COMPANY':
    //   return merge(state, { company: action.payload })
    // case SET_PROFILE_X + 'EMAIL':
    //   return merge(state, { email: action.payload })
    // case SET_PROFILE_X + 'PHOTO':
    //   return merge(state, { photo: action.payload })
    case SET_PROFILE:
      console.log('reducer state', state)
      return merge(state, action.payload)
    default:
      return state
  }
}

export default combineReducers({
  app,
  profile
})
