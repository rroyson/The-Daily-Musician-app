import React from 'react'
import Header from '../containers/header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'

const Welcome = function() {
  return (
    <div>

      <article className="athelas">
        <div
          className="vh-100 dt w-100 tc bg-dark-gray white cover"
          background="url('http://mrmrs.github.io/photos/u/009.jpg) no-repeat center'"
        >
          <div className="dtc v-mid">

            <h1 className="f1 f-headline-l fw1 i white-60">
              The Daily Musician
            </h1>
            <blockquote className="ph0 mh0 measure f4 lh-copy center">
              <p className="mb6 fw1 white-70">
                Its the space you put between the notes that make the music.
              </p>
              <div>
                <Link to="/login">
                  <button
                    className="f3 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
                    href="#"
                  >
                    Log In
                  </button>
                </Link>
                <Link to="/signup">
                  <button
                    className="f3 br-pill dark-green no-underline ba grow pv2 ph3 dib"
                    href="#"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>

            </blockquote>
          </div>
        </div>

      </article>

    </div>
  )
}

export default Welcome
