import React from 'react'
import ShowContactHeader from '../containers/show-contact-header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import Footer from '../containers/footer'

const ShowContact = function() {
  return (
    <div className="bg-light-gray">
      <div classNameName="mb5">
        <ShowContactHeader />
      </div>

      <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="tc">
          <img
            src="https://s-media-cache-ak0.pinimg.com/736x/a6/64/0b/a6640be3553f29c9b0605052b1e938e9--guitar-players-rockstars.jpg"
            className="br4 h5 w5 dib ba b--black-05 pa2"
            title="Photo of a kitty staring at you"
          />
          <h1 className="f3 mb2">Angus Young W.</h1>
          <h2 className="f5 fw4 gray mt0">Guitartist at (AC/DC)</h2>
        </div>
      </article>
      <h1 className="tc">Show The Rest of the Data</h1>
      <Footer />
    </div>
  )
}
export default ShowContact
