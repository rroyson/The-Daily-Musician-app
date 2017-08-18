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
  SET_PROFILE_CONTACT,
  SET_VENUES_SEARCH,
  SET_SEARCH_VENUES_X,
  SET_SEARCH_NAME_TEXT,
  SET_SEARCH_CITY_TEXT,
  SET_SEARCH_STATE_TEXT,
  SET_VENUES
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

const profiles = (state = profileEmptyDefault, action) => {
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

const contactDefault = []

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

const venueDefault = {
  address: '730 8th Ave S',
  city: 'Nashville',
  country: 'United States',
  formattedAddress: [
    '730 8th Ave S (Division St)',
    'Nashville, TN 37203',
    'United States'
  ],
  name: 'Pour House',
  phone: '(615) 736-5727',
  postalCode: '37203',
  state: 'TN',
  url: 'http://pourhousenashville.com'
}

const findVenues = (
  state = {
    results: [],
    name: '',
    city: '',
    venueState: ''
  },
  action
) => {
  switch (action.type) {
    case SET_VENUES_SEARCH:
      return merge(state, { results: action.payload })
    case SET_SEARCH_VENUES_X + 'NAME':
      return merge(state, { name: action.payload })
    case SET_SEARCH_VENUES_X + 'CITY':
      return merge(state, { city: action.payload })
    case SET_SEARCH_VENUES_X + 'VENUESTATE':
      return merge(state, { venueState: action.payload })
    // case SET_SEARCH_NAME_TEXT:
    //   return merge(state, { searchNameText: action.payload })
    // case SET_SEARCH_CITY_TEXT:
    //   return merge(state, { searchCityText: action.payload })
    // case SET_SEARCH_STATE_TEXT:
    //   return merge(state, { searchStateText: action.payload })
    default:
      return state
  }
}

const venues = (state = venueDefault, action) => {
  switch (action.type) {
    case SET_VENUES:
      return action.payload

    default:
      return state
  }
}

// {
//     "meta": {
//         "code": 200,
//         "requestId": "5995e5549fb6b72fced3c007"
//     },
//     "response": {
//         "venues": [
//             {
//                 "id": "4b57b6bdf964a520523d28e3",
//                 "name": "Music Farm",
//                 "contact": {
//                     "phone": "8435776969",
//                     "formattedPhone": "(843) 577-6969"
//                 },
//                 "location": {
//                     "address": "32 Ann St",
//                     "lat": 32.7898180155028,
//                     "lng": -79.9379825592041,
//                     "labeledLatLngs": [
//                         {
//                             "label": "display",
//                             "lat": 32.7898180155028,
//                             "lng": -79.9379825592041
//                         }
//                     ],
//                     "postalCode": "29403",
//                     "cc": "US",
//                     "city": "Charleston",
//                     "state": "SC",
//                     "country": "United States",
//                     "formattedAddress": [
//                         "32 Ann St",
//                         "Charleston, SC 29403",
//                         "United States"
//                     ]
//                 },
//                 "categories": [
//                     {
//                         "id": "4bf58dd8d48988d1e9931735",
//                         "name": "Rock Club",
//                         "pluralName": "Rock Clubs",
//                         "shortName": "Rock Club",
//                         "icon": {
//                             "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_rockclub_",
//                             "suffix": ".png"
//                         },
//                         "primary": true
//                     }
//                 ],
//                 "verified": true,
//                 "stats": {
//                     "checkinsCount": 3740,
//                     "usersCount": 2048,
//                     "tipCount": 26
//                 },
//                 "url": "http://www.musicfarm.com",
//                 "allowMenuUrlEdit": true,
//                 "beenHere": {
//                     "lastCheckinExpiredAt": 0
//                 },
//                 "specials": {
//                     "count": 0,
//                     "items": []
//                 },
//                 "venuePage": {
//                     "id": "45833027"
//                 },
//                 "storeId": "",
//                 "hereNow": {
//                     "count": 0,
//                     "summary": "Nobody here",
//                     "groups": []
//                 },
//                 "referralId": "v-1502995796",
//                 "venueChains": [],
//                 "hasPerk": false
//             }
//         ],
//         "geocode": {
//             "what": "",
//             "where": "charleston sc",
//             "feature": {
//                 "cc": "US",
//                 "name": "Charleston",
//                 "displayName": "Charleston, SC, United States",
//                 "matchedName": "Charleston, SC, United States",
//                 "highlightedName": "<b>Charleston</b>, <b>SC</b>, United States",
//                 "woeType": 7,
//                 "slug": "charleston-south-carolina",
//                 "id": "geonameid:4574324",
//                 "longId": "72057594042502260",
//                 "geometry": {
//                     "center": {
//                         "lat": 32.77657,
//                         "lng": -79.93092
//                     },
//                     "bounds": {
//                         "ne": {
//                             "lat": 32.973515,
//                             "lng": -79.79706399999999
//                         },
//                         "sw": {
//                             "lat": 32.668504999999996,
//                             "lng": -80.145104
//                         }
//                     }
//                 }
//             },
//             "parents": []
//         }
//     }
// }

export default combineReducers({
  app,
  profiles,
  contacts,
  contact,
  findVenues,
  venues
})
