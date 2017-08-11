//import auth0 from 'auth0-js'
import history from './history'

import { SET_SESSION } from './constants'
import store from './store'
import { getOrCreateProfile } from './db'

export default () => {
  //const auth0 = new window.auth0.WebAuth({
  //   domain: 'twilson63.auth0.com',
  //   clientID: 'jhDY5x3bi6GWmGjUsbIA4owva0jEmjKf',
  //   redirectUri: 'https://healthy-io.glitch.me/callback',
  //   audience: 'https://twilson63.auth0.com/userinfo',
  //   responseType: 'token id_token',
  //   scope: 'profile openid'
  // })

  //   if (isAuthenticated()) {
  //     // dispatch our session
  // //     store.dispatch(getOrCreateUser({
  // //       access_token: localStorage.getItem('access_token'),
  // //       id_token: localStorage.getItem('id_token'),
  // //       expires_at: localStorage.getItem('expiresAt'),
  // //       profile: JSON.parse(localStorage.getItem('profile') || {})
  // //     }))
  //
  //     store.dispatch({
  //       type: SET_SESSION,
  //       payload: {
  //         access_token: localStorage.getItem('access_token'),
  //         id_token: localStorage.getItem('id_token'),
  //         expires_at: localStorage.getItem('expiresAt'),
  //         profile: JSON.parse(localStorage.getItem('profile') || {})
  //       }
  //     })
  //
  //   }

  return {
    login
    // handleAuthentication,
    // setSession,
    // logout,
    // isAuthenticated
  }

  function login() {
    const profile = {
      access_token: 'MfwYfskQTyGTXeEH',
      id_token: '',
      expires_at: null,
      profile: {
        name: 'Trip Ottinger',
        given_name: 'Trip',
        family_name: 'Ottinger',
        nickname: 'tripott',
        picture:
          'https://lh6.googleusercontent.com/-hskkKrbgVew/AAAAAAAAAAI/AAAAAAAADvQ/0Ty55l0neis/photo.jpg',
        gender: 'male',
        locale: 'en',
        updated_at: '2017-08-10T19:27:00.152Z',
        sub: 'aaa111'
      }
    }

    console.log('profile', profile)
    store.dispatch(getOrCreateProfile(profile, history))
    //auth0.authorize()
  }

  // function handleAuthentication() {
  //   auth0.parseHash((err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       setSession(authResult)
  //       console.log('set access')
  //       //history.push('/profiles');
  //     } else if (err) {
  //       history.replace('/');
  //       console.log(err);
  //     }
  //   });
  // }

  // function setSession(authResult) {
  //   // Set the time that the access token will expire at
  //   //Makeauth0s a call to the /userinfo endpoint and returns the user profile.
  //   auth0.client.userInfo(authResult.accessToken, (err, profile) => {
  //     if (err) return console.log(err)
  //
  //     let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  //     localStorage.setItem('access_token', authResult.accessToken)
  //     localStorage.setItem('id_token', authResult.idToken)
  //     localStorage.setItem('expires_at', expiresAt)
  //     localStorage.setItem('profile', JSON.stringify(profile))
  //
  //     // tell redux
  //     store.dispatch({
  //       type: SET_SESSION,
  //       payload: {profile: profile, access_token: authResult.accessToken, id_token: authResult.idToken, expires_at: expiresAt}
  //
  //     })
  //
  //
  //
  //     // navigate to the home route
  //     history.push('/profiles');
  //
  //
  //   })
  //
  // }

  function logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    store.dispatch({
      type: SET_SESSION,
      payload: { access_token: '' }
    })

    // navigate to the login route
    //history.replace('/');
  }

  // function isAuthenticated() {
  //   // Check whether the current time is past the
  //   // access token's expiry time
  //   let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
  //   return new Date().getTime() < expiresAt
  // }
}
