import React from 'react'
import { Link } from 'react-router-dom'

const Footer = props => {
  return (
    <footer className="h3 flex flex-row justify-between items-center bg-dark-gray">
      <div className="ml3 white">
        <Link className="link white-60" to="/profile">
          <i className="db tc ion-person" />
          Home
        </Link>
      </div>
      <div className="ml2 white">
        <Link className="link white-60" to="/calendar">
          <i className="db tc ion-ios-calendar-outline" />
          Calendar
        </Link>
      </div>
      <div>
        <Link className="link white-60" to="/profile/:id/contacts">
          <i className="db tc ion-person-stalker" />
          Contacts
        </Link>
      </div>
      <Link className="link white-60" to="/venues">
        {' '}    {' '}
        <div className="mr3">
          <i className="db tc ion-radio-waves" />
          Venues
        </div>
      </Link>
    </footer>
  )
}

export default Footer
