import fetch from 'isomorphic-fetch'
import {
  SET_PROFILE,
  SET_EDITED_PROFILE,
  SET_PROFILE_CONTACTS
} from './constants'

const apiUrl = process.env.REACT_APP_API_URL
// console.log(process.env)

const getOptions = (token, method = 'GET', body = null) => {
  return {
    method,
    headers: {
      'Content-Type': 'application-json',
      authorization: 'Bearer ' + token
    },
    body: body && JSON.stringify(body)
  }
}

export const getProfile = profileId => (dispatch, getState) => {
  console.log('profile id', profileId)

  fetch(apiUrl + `profile/${profileId}`, getOptions)
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILE, payload: data }))
}

export const editProfile = history => (dispatch, getState) => {
  const profile = getState().profile
  fetch(apiUrl + 'profile/' + profile._id, getOptions('PUT', profile))
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: SET_EDITED_PROFILE,
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

export const getContacts = profileId => (dispatch, getState) => {
  console.log('profile id', profileId)

  fetch(apiUrl + `profile/${profileId}/contacts`, getOptions)
    .then(res => res.json())
    .then(data => dispatch({ type: SET_PROFILE_CONTACTS, payload: data }))
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
