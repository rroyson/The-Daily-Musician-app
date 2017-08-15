import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeContact } from '../db'

class ShowContactHeader extends React.Component {
  render() {
    return (
      <header className="athelas flex flex-row justify-between items-center bg-dark-gray h3">
        <div className="ml2">
          <Link className="Link white-60" to="profile/:id/contacts">
            <i className="f3 ion-chevron-left" />
          </Link>
        </div>
        <div className="white-60 athelas f4">Contacts</div>
        <div className="mr2">
          <Link
            onClick={this.props.handleRemoveContact(this.props.history)}
            className="link white-60"
            to="profile/:id/contacts"
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

const mapActionsToProps = dispatch => {
  return {
    dispatch,
    handleRemoveContact: history => e => {
      if (window.confirm('Are you sure?')) {
        dispatch(removeContact(history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowContactHeader)
