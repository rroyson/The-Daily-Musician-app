import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = props => {
  return (
    <header className="athelas flex flex-row justify-between items-center bg-dark-gray h3">
      <div className="ml2">
        <i className="f3 white-60 ion-log-out" />
      </div>
      <div className="white-60">Profile</div>
      <div className="mr2">
        <Link className="link white-60 ion-edit" to="/profile/:id/edit" />
      </div>
    </header>
  )
}

export default HomeHeader
