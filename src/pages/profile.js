import React from 'react'
import HomeHeader from '../containers/home-header'
import { getProfile } from '../db'
import Footer from '../containers/footer'
import { connect } from 'react-redux'

class Profile extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.id
    this.props.dispatch(getProfile(profileId))
    console.log('profileId', profileId)
  }

  render() {
    const props = this.props
    console.log('props', props)
    return (
      <div className="bg-light-gray">
        <div className="mb5">
          <HomeHeader />

        </div>

        <article className="mw6 avenir center bg-white mv3 ">
          <div className="tc bg-light-gray">

            <img
              src={props.profiles.photo}
              alt=""
              className="br-100 h5 w5 dib ba bg-white b--black-10 "
              title="Photo of a kitty staring at you"
            />
            <h1 className="f2 fw3 ">
              {props.profiles.firstName} {props.profiles.lastName}
            </h1>
            <h2 className="f5 fw6 gray mt0 mb0">
              Affiliate at {props.profiles.bandName}
            </h2>
          </div>

        </article>
        <hr />
        <h2 className="avenir f3 fw4 tc">
          Upcoming Events list including dates/locations
        </h2>

        <Footer />

      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state.profiles)
  return {
    profiles: state.profiles
  }
}

const connector = connect(mapStateToProps)

export default connector(Profile)
