import fetch from 'isomorphic-fetch'
import { SET_PROFILE } from './constants'
import { Redirect } from 'react-router-dom'
console.log('SET_PROFILE', SET_PROFILE)

const apiUrl = process.env.REACT_APP_API_URL

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

// export const getProfile = authProfileID => (dispatch, getState) => {
//   fetch(apiURL + `profiles/${authProfileID}`, getState())
//     .then(res => res.json())
//     .then(data => dispatch({ type: SET_PROFILE, payload: data }))
// }

// const profile = {
//   access_token: 'MfwYfskQTyGTXeEH',
//   id_token: '',
//   expires_at: null,
//   profile: {
//     name: 'Trip Ottinger',
//     given_name: 'Trip',
//     family_name: 'Ottinger',
//     nickname: 'tripott',
//     picture:
//       'https://lh6.googleusercontent.com/-hskkKrbgVew/AAAAAAAAAAI/AAAAAAAADvQ/0Ty55l0neis/photo.jpg',
//     gender: 'male',
//     locale: 'en',
//     updated_at: '2017-08-10T19:27:00.152Z',
//     sub: 'aaa111'
//   }
// }

export const getOrCreateProfile = (profile, history) => (
  dispatch,
  getState
) => {
  console.log('profile', profile)
  console.log('URL', apiUrl + `profiles/profile_${profile._id}`)
  fetch(apiUrl + `profiles/profile_${profile._id}`)
    .then(res => res.json())
    .then(data => {
      console.log('dispatchin to state', data)
      dispatch({ type: SET_PROFILE, payload: data })
      //history.push('/profile')
    })
    .catch(err => console.log(err))
}

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
