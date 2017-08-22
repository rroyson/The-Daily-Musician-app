import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ViewContactsHeader = props => {
  return (
    <header className="athelas flex flex-row justify-between items-center bg-dark-gray h3">
      <Link className="link black-60" to={`/profiles/${props.profiles._id}`}>
        <div className="ml2">
          <i className="f3 white-60 ion-chevron-left" />
        </div>
      </Link>
      <div className="white-60 athelas f4">Contacts</div>
      <div className="mr2">
        <Link
          className=" link white-60 ion-plus"
          to={`/profiles/${props.profileId}/contacts/new`}
        />
      </div>
    </header>
  )
}

const connector = connect(mapStateToProps)

function mapStateToProps(state) {
  return {
    profiles: state.profiles
  }
}

export default connector(ViewContactsHeader)
