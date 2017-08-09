import React from 'react'
import { Link } from 'react-router-dom'

const ShowContactHeader = props => {
  return (
    <header className="athelas flex flex-row justify-between items-center bg-dark-gray h3">
      <div className="ml2">
        <i className="f3 white-60 ion-chevron-left" />
      </div>
      <div className="white-60">Contacts</div>
      <div className="mr2">
        <Link className="link white-60 ion-trash-a" to="/contacts" />
      </div>
    </header>
  )
}

export default ShowContactHeader
