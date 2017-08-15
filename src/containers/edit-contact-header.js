import React from 'react'
import { Link } from 'react-router-dom'

const EditContactHeader = props => {
  return (
    <header className="athelas flex flex-row justify-between items-center bg-dark-gray h3">
      <div className="ml2">
        <Link className="Link white-60" to="/">
          <i className="f3 ion-chevron-left" />
        </Link>
      </div>
      <div className="white-60 athelas f4">Edit Contact</div>
      <div className="mr2">
        <Link className="link white-60" to="/home">
          <i className="f3 mr1 white-60 ion-trash-a" />
        </Link>
      </div>
    </header>
  )
}

export default EditContactHeader
