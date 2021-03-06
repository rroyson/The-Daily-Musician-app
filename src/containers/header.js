import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = props => {
  return (
    <header className="athelas flex flex-row justify-between items-center bg-dark-gray h3">
      <Link className="link black-60" to="/home/:id">
        <div className="ml2">
          <i className="f3 white-60 ion-chevron-left" />
        </div>
      </Link>
      <div className="white-60">Contacts</div>
      <div className="mr2">
        <Link className="link white-60" to="/contacts/new">
          new
        </Link>
      </div>
    </header>
  )
}

export default MainHeader
