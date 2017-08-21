import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeProfile, removeContact, getContact } from '../db'

class BackDeleteHeader extends React.Component {
  componentDidMount() {
    // const profileId = this.props.profileId
    // // this.props.dispatch(getProfile(profileId))
    //
    // const contactId = this.props.contactId
    // this.props.dispatch(getContact(profileId, contactId))
  }

  render() {
    console.log(this.props)
    return (
      <header className="athelas flex flex-row justify-between items-center bg-dark-gray h3">
        <div className="ml2">
          <Link className="Link white-60" to="profile/:id/contacts">
            <i className="f3 ion-chevron-left" />
          </Link>
        </div>
        <div className="white-60 athelas f4">
          {this.props.contactId ? 'Contacts' : 'Profile'}
        </div>
        <div className="mr2">
          <Link
            onClick={this.props.handleRemoveContact(
              this.props.profileId,
              this.props.contactId,
              this.props.history
            )}
            className="link white-60"
            to={`profile/${this.props.profileId}/contacts`}
          >
            <i className="f3 mr1 white-60 ion-trash-a" />
          </Link>
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contact,
    profiles: state.profiles
  }
}

function mapActionsToProps(dispatch) {
  return {
    dispatch,
    handleRemoveContact: (profileId, contactId, history) => e => {
      if (contactId) {
        if (window.confirm('Are you sure you want to delete?')) {
          dispatch(removeContact(profileId, contactId, history))
        }
      } else {
        dispatch(removeProfile(profileId, history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(BackDeleteHeader)
