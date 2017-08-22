import fetch from 'isomorphic-fetch'
import {
  SET_PROFILE,
  SET_PROFILE_CONTACTS,
  SET_PROFILE_CONTACT,
  SET_VENUES,
  SET_VENUES_SEARCH
} from './constants'
import { pathOr, map, pick, compose } from 'ramda'
const apiUrl = process.env.REACT_APP_API_URL
const venueUrl = process.env.REACT_APP_API_VENUE_URL
// console.log(process.env)

// const getOptions = (token, method = 'GET', body = null) => {
//   return {
//     method,
//     headers: {
//       'Content-Type': 'application-json',
//       authorization: 'Bearer ' + token
//     },
//     body: body && JSON.stringify(body)
//   }
// }
const getOptions = (method = 'GET', body = null) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body && JSON.stringify(body)
  }
}

export const getProfile = profileId => (dispatch, getState) => {
  fetch(apiUrl + `profiles/${profileId}`, getState())
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILE, payload: data }))
}

export const createProfile = history => (dispatch, getState) => {
  const profileId = pathOr(null, ['profileId'], getState().contact)
  if (profileId) {
    fetch(
      apiUrl + `profiles/${profileId}`,
      getOptions('POST', getState().contact)
    )
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: SET_PROFILE,
          payload: {
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
            contacts: []
          }
        })
      )
      .then(() => history.push(`/profiles/${profileId}`))
      .catch(err => console.log(err))
  }
}

export const editProfile = history => (dispatch, getState) => {
  const profiles = getState().profiles
  fetch(apiUrl + `profiles/${profiles._id}`, getOptions('PUT', profiles))
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SET_PROFILE,
        payload: {
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
          contacts: []
        }
      })
    )
    .then(() => history.push(`profiles/${profiles._id}`))
}

export const removeProfile = history => (dispatch, getState) => {
  const profiles = getState().profiles
  fetch(apiUrl + 'profiles/' + profiles._id, getOptions('DELETE'))
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SET_PROFILE,
        payload: {
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
          contacts: []
        }
      })
    )
    .then(() => history.push('/login'))
}

export const getContacts = profileId => (dispatch, getState) => {
  fetch(apiUrl + `profiles/${profileId}/contacts?limit=10`, getOptions)
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILE_CONTACTS, payload: data }))
}

export const getContact = (profileId, contactId, history) => (
  dispatch,
  getState
) => {
  fetch(apiUrl + `profiles/${profileId}/contacts/${contactId}`)
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILE_CONTACT, payload: data }))
    .catch(err => console.log(err))
}

export const removeContact = (profileId, contactId, history) => (
  dispatch,
  getState
) => {
  fetch(
    apiUrl + `profiles/${profileId}/contacts/${contactId}`,
    getOptions('DELETE')
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SET_PROFILE_CONTACT,
        payload: {
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
      })
    )
    .then(() => history.push(`/profiles/${profileId}/contacts`))
}

export const createContact = history => (dispatch, getState) => {
  const profileId = pathOr(null, ['profileId'], getState().contact)
  if (profileId) {
    fetch(
      apiUrl + `profiles/${profileId}/contacts`,
      getOptions('POST', getState().contact)
    )
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: SET_PROFILE_CONTACT,
          payload: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            company: '',
            photo: ''
          }
        })
      )
      .then(() => history.push(`/profiles/${profileId}/contacts`))
      .catch(err => console.log(err))
  }
}

export const editContact = history => (dispatch, getState) => {
  const contact = getState().contact
  const profileId = pathOr(null, ['profileId'], getState().contact)
  console.log('contact', contact)
  console.log('profileId', profileId)
  console.log('getOptions', getOptions('PUT', contact))
  console.log(
    'url',
    apiUrl + `profiles/${contact.profileId}/contacts/${contact._id}`
  )

  fetch(
    apiUrl + `profiles/${contact.profileId}/contacts/${contact._id}`,
    getOptions('PUT', contact)
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SET_PROFILE_CONTACT,
        payload: {
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
          contacts: []
        }
      })
    )
    .then(() => history.push(`/profiles/${profileId}/contacts/${contact._id}`))
    .catch(err => console.log(err))
}

/////////////////////
//////////VENUES
////////////////////

export const getVenues = history => (dispatch, getState) => {
  const findVenues = getState().findVenues
  const city = pathOr('', ['city'], findVenues)
  const state = pathOr('', ['venueState'], findVenues)
  const name = pathOr('', ['name'], findVenues)

  fetch(
    venueUrl +
      `search?v=20161016&near=${city},${state}&query=${name}&intent=checkin&client_id=CRGE3AWBRW02MKXCUKGN0RSQ30TYL22YSD02FMVIZV4YCPE2&client_secret=VZQGJ14JP4JENDQD4VHGVABVUY4HJF3J5C0B1DWVHVAHCXLD`,
    getOptions
  )
    .then(res => res.json())
    .then(data =>
      compose(
        map(v => ({
          _id: v.id,
          name: v.name,
          phone: v.contact.formattedPhone,
          city: v.location.city,
          state: v.location.state,
          address: v.location.address,
          postalCode: v.location.postalCode,
          country: v.location.country,
          formattedAddress: v.location.formattedAddress,

          url: v.url
        })),
        map(v => pick(['name', 'location', 'url', 'contact', 'id'], v)),
        pathOr([], ['response', 'venues'])
      )(data)
    )
    .then(composedResult =>
      dispatch({ type: SET_VENUES_SEARCH, payload: composedResult })
    )
}

export const getVenue = (venueId, history) => (dispatch, getState) => {
  fetch(
    venueUrl +
      `${venueId}?v=20161016&m=foursquare&client_id=CRGE3AWBRW02MKXCUKGN0RSQ30TYL22YSD02FMVIZV4YCPE2&client_secret=VZQGJ14JP4JENDQD4VHGVABVUY4HJF3J5C0B1DWVHVAHCXLD`,
    getOptions
  )
    .then(res => res.json())
    .then(data => {
      return compose(
        v => ({
          _id: v.id,
          name: v.name,
          phone: v.contact.formattedPhone,
          city: v.location.city,
          state: v.location.state,
          address: v.location.address,
          postalCode: v.location.postalCode,
          country: v.location.country,
          formattedAddress: v.location.formattedAddress,

          url: v.url
        }),
        pick(['name', 'location', 'url', 'contact', 'id']),
        pathOr([], ['response', 'venue'])
      )(data)
    })
    .then(result => dispatch({ type: SET_VENUES, payload: result })) //console.log('composed result', composedResult)
    .catch(err => console.log(err))
}

// export const getVenue = (venueId, history) => (dispatch, getState) => {
//   const venue = getState().findVenues
//   console.log('db venueId', venueId)
//   console.log('venue db', venue)
//   const options = getOptions()
//   // console.log('options', options)
//   console.log(
//     'url',
//     venueUrl +
//       `${venueId}?v=20161016&m=foursquare&client_id=CRGE3AWBRW02MKXCUKGN0RSQ30TYL22YSD02FMVIZV4YCPE2&client_secret=VZQGJ14JP4JENDQD4VHGVABVUY4HJF3J5C0B1DWVHVAHCXLD`
//   )
//   fetch(
//     venueUrl +
//       `${venueId}?v=20161016&m=foursquare&client_id=CRGE3AWBRW02MKXCUKGN0RSQ30TYL22YSD02FMVIZV4YCPE2&client_secret=VZQGJ14JP4JENDQD4VHGVABVUY4HJF3J5C0B1DWVHVAHCXLD`,
//     getOptions
//   )
//     .then(res => res.json())
//     .then(data => {
//       const transform = venueBasic => ({
//         _id: venueBasic.id,
//         name: venueBasic.name,
//         phone: venueBasic.contact.formattedPhone,
//         city: venueBasic.location.city,
//         state: venueBasic.location.state,
//         address: venueBasic.location.address,
//         postalCode: venueBasic.location.postalCode,
//         country: venueBasic.location.country,
//         formattedAddress: venueBasic.location.formattedAddress,
//         url: venueBasic.url
//       })
//
//       const result = compose(
//         transform,
//         pick(['id', 'name', 'location', 'contact', 'url']),
//         pathOr({}, ['response', 'venue'])
//       )(data)
//     })
//     .then(composedResult => //console.log('composed result', composedResult)
//        dispatch({ type: SET_VENUES, payload: composedResult })
//     )
//     .catch(err => console.log(err))
// }

// export const getOrCreateProfile = (authResult, history) => (
//   dispatch,
//   getState
// ) => {
//   console.log('AuthURL', apiUrl + `profiles/profile_${authResult.profile.sub}`)
//   fetch(apiUrl + `profiles/profile_${authResult.profile.sub}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log('dispatchin to state', data)
//       dispatch({ type: SET_PROFILE, payload: data })
//       history.push('/profile')
//     })
//     .catch(err => console.log(err))
// }

// hey api, ive got the authProfileID, does this person exist in the db?
// export const getOrCreateProfile = (profile) => (dispatch, getState) => {
//   fetch(apiURL + `profiles/${authProfileID}`, getState())
//     .then(res => res.json())
//     .then(data => {
//       console.log("data", data)
//       // did I get a 404 not found?  if so, no profile in db
//       // fetch(apiURL + `profiles`)
//       fetch(apiURL + 'profiles', getOptions(authResult.id_token, 'POST', {
//         _id: 'profile_' + profile.sub,
//         firstName: 'Garret',
//         lastName: 'Eanes',
//         email: 'frontiersons@gmail.com',
//         dob: '1/2/1987',
//         gender: propOr('M', 'gender', profile),
//         bandName: '',
//         genre: 'Rock',
//         type: 'profile',
//         photo: 'https://fillmurray/200/200',
//         contacts: []
//       }))
//       dispatch({type: SET_PROFILE, payload: data})
//     })
//
// }

//
// export const getAuthProfile = authProfileID => (dispatch, getState) => {
//   fetch(apiURL + `profiles?filter=authProfileID:${authProfileID}&limit=1`, getState())
//     .then(res => res.json())
//     .then(docs => dispatch({type: SET_PROFILE, payload: head(docs)}))
// }
