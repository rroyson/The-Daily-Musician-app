import fetch from 'isomorphic-fetch'
import {
  SET_PROFILE,
  SET_PROFILE_CONTACTS,
  SET_PROFILE_CONTACT
} from './constants'
import { assoc, pathOr } from 'ramda'
const apiUrl = process.env.REACT_APP_API_URL
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

export const editProfile = history => (dispatch, getState) => {
  console.log('editProfile')
  const profile = getState().profile
  console.log('getState', getState().profile)
  console.log('options', getOptions())
  fetch(apiUrl + 'profiles/' + profile._id, getOptions('PUT', profile))
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
    .then(() => history.push('/profile'))
}

export const removeProfile = history => (dispatch, getState) => {
  const profiles = getState().profiles
  fetch(apiUrl + 'profiles/' + profiles._id, getOptions(getState(), 'DELETE'))
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
  fetch(apiUrl + `profiles/${profileId}/contacts`, getOptions)
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILE_CONTACTS, payload: data }))
}

export const getContact = (profileId, contactId, history) => (
  dispatch,
  getState
) => {
  const contact = getState().contact
  const options = getOptions(getState())

  fetch(apiUrl + `profiles/${profileId}/contacts/${contactId}`)
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILE_CONTACT, payload: data }))
    .catch(err => console.log(err))
}

export const removeContact = (profileId, contactId, history) => (
  dispatch,
  getState
) => {
  console.log(profileId, 'profileId')
  console.log(contactId, 'contactId')

  const contact = getState().contact
  fetch(
    apiUrl + `profiles/${profileId}/contacts/${contactId}`,
    getOptions(),
    'DELETE'
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
  //.then(() => history.push('/login'))
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
  }
}

export const editContact = history => (dispatch, getState) => {
  const contact = getState().contact

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
    .then(() => history.push('/contacts'))
    .catch(err => console.log(err))
}

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
