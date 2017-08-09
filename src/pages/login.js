import React from 'react'
import LoginHeader from '../containers/login-header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import { Button } from 't63'

const Login = function() {
  return (
    <div className="bg-light-gray">
      <LoginHeader />

      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Email</label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-light-gray w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6">Password</label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-light-gray w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer">
              <input type="checkbox" /> Remember me
            </label>
          </fieldset>
          <div className="">
            <Button className="w-100 bg-green ba br2 b--light-green">
              Sign In
            </Button>
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">Sign up</a>
            <a href="#0" className="f6 link dim black db">
              Forgot your password?
            </a>
          </div>
        </form>
      </main>

    </div>
  )
}

export default Login
