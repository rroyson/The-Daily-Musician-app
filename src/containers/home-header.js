import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const HomeHeader = props => {
  console.log('props header', props)
  console.log('id header', props._id)
  return (
    <header className="athelas flex flex-row justify-between items-center bg-dark-gray h3">
      <div className="ml2">
        <i className="f3 white-60 ion-log-out" />
      </div>
      <div className="white-60 athelas f4">Profile</div>
      <div className="mr2">
        <Link
          className="link white-60 ion-edit"
          to={`/profile/${props._id}/edit`}
        />
      </div>
    </header>
  )
}
function mapStateToProps(state) {
  console.log('header State', state)
  return {
    profiles: state.profiles,
    _id: state.profiles._id
  }
}

const connector = connect(mapStateToProps)

export default connector(HomeHeader)
