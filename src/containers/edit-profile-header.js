import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeProfile } from '../db'
import { Button } from 't63'

class EditProfileHeader extends React.Component {
  render() {
    return (
      <header className="athelas flex flex-row justify-between items-center bg-dark-gray h3">
        <div className="ml2">
          <Link className="Link white-60" to="/">
            <i className="f3 ion-chevron-left" />
          </Link>
        </div>
        <div className="white-60 athelas f4">Edit Profile</div>
        <div className="mr2">

          <i
            onClick={this.props.handleRemoveProfile(this.props.history)}
            className="f3 mr1 white-60 ion-trash-a"
          />

        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    profiles: state.profiles
  }
}

const mapActionsToProps = dispatch => {
  return {
    dispatch,
    handleRemoveProfile: history => e => {
      if (window.confirm('Are you sure?')) {
        dispatch(removeProfile(history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(EditProfileHeader)
