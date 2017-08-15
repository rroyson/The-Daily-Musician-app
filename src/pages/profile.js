import React from 'react'
import HomeHeader from '../containers/home-header'

import Footer from '../containers/footer'
import { connect } from 'react-redux'

const Profile = function(props) {
  console.log('profile props', props)
  return (
    <div className="bg-light-gray">
      <div className="mb5">
        <HomeHeader />

      </div>

      <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="tc">

          <img
            src={props.profiles.photo}
            alt=""
            className="br4 h5 w5 dib ba b--black-05 pa2"
            title="Photo of a kitty staring at you"
          />
          <h1 className="f3 mb2">
            {props.profiles.firstName} {props.profiles.lastName}
          </h1>
          <h2 className="f5 fw4 gray mt0">
            Affiliate at {props.profiles.bandName}
          </h2>
        </div>

      </article>

      <h2 className="tc">Upcoming Events list including dates/locations</h2>
      <Footer />

    </div>
  )
}

function mapStateToProps(state) {
  console.log('profile state', state)
  return {
    profiles: state.profiles
  }
}

const connector = connect(mapStateToProps)

export default connector(Profile)
