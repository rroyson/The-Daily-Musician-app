import { combineReducers } from 'redux'
import { merge } from 'ramda'
import {
  SET_APP,
  SET_PROFILE,
  SET_EDITED_PROFILE,
  SET_PROFILE_CONTACTS,
  SET_PROFILE_X,
  CLEAR_PROFILE,
  SET_CONTACT_X,
  SET_PROFILE_CONTACT
} from './constants'

function app(state = { title: 'The Daily Musician' }, action) {
  switch (action.type) {
    case SET_APP:
      return action.payload
    default:
      return state
  }
}

const profileDefault = {
  _id: 'profile_aaa111',
  _rev: '1-e6a2f0c8a5d1669baecab842c144a026',
  firstName: 'Donny',
  lastName: 'Goodman',
  email: 'Fatty@ChiliPeps.com',
  dob: '1/4/1995',
  gender: 'M',
  bandName: 'Rosanne',
  genre: 'hmmmmmm',
  phone: '(803)-727-1234',
  photo: 'https://www.fillmurray.com/100/100',
  contacts: [
    {
      contact_id: 'contact_profile_aaa222_daniel_maddox_dan@drums',
      venue_id: 'reds_icehouse_charleston_sc_234153452jlj'
    }
  ],
  type: 'profile'
}

const profiles = (state = profileDefault, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return action.payload
    case SET_PROFILE_X + '_ID':
      return merge(state, { _id: action.payload })
    case SET_PROFILE_X + 'FIRSTNAME':
      return merge(state, { firstName: action.payload })
    case SET_PROFILE_X + 'LASTNAME':
      return merge(state, { lastName: action.payload })
    case SET_PROFILE_X + 'DOB':
      return merge(state, { dob: action.payload })
    case SET_PROFILE_X + 'GENDER':
      return merge(state, { gender: action.payload })
    case SET_PROFILE_X + 'BANDNAME':
      return merge(state, { bandName: action.payload })
    case SET_PROFILE_X + 'GENRE':
      return merge(state, { genre: action.payload })
    case SET_PROFILE_X + 'PHOTO':
      return merge(state, { photo: action.payload })
    case SET_EDITED_PROFILE:
      return action.payload
    case CLEAR_PROFILE:
      return state

      return {}
    default:
      return state
  }
}

const profileEmptyDefault = {
  _id: '',
  _rev: '',
  firstName: '',
  lastName: '',
  email: '',
  dob: '',
  gender: '',
  bandName: '',
  genre: '',
  photo: '',
  contacts: [],
  type: ''
}

const contactDefault = [
  {
    _id: 'contact_profile_aaa111_daniel_maddox_dan@drums',
    _rev: '1-19996b1cc8b019fbf4fccf4b9ef000fb',
    firstName: 'Daniel',
    lastName: 'Maddox',
    email: 'dan@Drums.com',
    phone: '843-555-4444',
    company: 'fsons',
    photo: 'https://www.fillmurray.com/100/100',
    venueId: 'venue_fsons_charleston_sc_234jk24',
    profileId: 'profile_aaa111',
    type: 'contact'
  }
]

const contacts = (state = contactDefault, action) => {
  switch (action.type) {
    case SET_PROFILE_CONTACTS:
      return action.payload
    default:
      return state
  }
}

const contact = (state = contactDefault, action) => {
  switch (action.type) {
    case SET_PROFILE_CONTACT:
      return action.payload
    case SET_CONTACT_X + 'FIRSTNAME':
      return merge(state, { firstName: action.payload })
    case SET_CONTACT_X + 'LASTNAME':
      return merge(state, { lastName: action.payload })
    case SET_CONTACT_X + 'COMPANY':
      return merge(state, { company: action.payload })
    case SET_CONTACT_X + 'PHONE':
      return merge(state, { phone: action.payload })
    case SET_CONTACT_X + 'EMAIL':
      return merge(state, { email: action.payload })
    case SET_CONTACT_X + 'PHOTO':
      return merge(state, { photo: action.payload })
    default:
      return state
  }
}

export default combineReducers({
  app,
  profiles,
  contacts,
  contact
})
