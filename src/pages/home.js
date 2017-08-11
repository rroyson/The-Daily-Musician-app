import React from 'react'
import HomeHeader from '../containers/home-header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import Footer from '../containers/footer'
import { connect } from 'react-redux'
import { getOrCreateProfile } from '../db'

class Profile extends React.Component {
  componentDidMount() {
    if (this.props.session) {
      this.props.dispatch(getOrCreateProfile)
    }
  }

  render() {
    return (
      <div className="bg-light-gray">
        <div className="mb5">
          <HomeHeader />

        </div>

        <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">

            <img
              src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/16683989_10154223366415143_3361905094158948931_n.jpg?oh=851e97232516d9ba3244cee2fd099bdf&oe=59F2BBE1"
              className="br4 h5 w5 dib ba b--black-05 pa2"
              title="Photo of a kitty staring at you"
            />
            <h1 className="f3 mb2">
              {this.props.firstName}{this.props.lastName}
            </h1>
            <h2 className="f5 fw4 gray mt0">{this.props.company}</h2>
          </div>

        </article>

        <h2 className="tc">Upcoming Events list including dates/locations</h2>
        <Footer />

      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    profile: state.profile
  }
}

const connector = connect(mapStateToProps)

export default connector(Profile)
