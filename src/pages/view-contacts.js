import React from 'react'
import Header from '../containers/header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import Footer from '../containers/footer'

const Contacts = function() {
  return (
    <div>
      <Header />

      <main className="mw6 center">
        <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div className="dtc w2 w3-ns v-mid">
            <img
              src="https://s-media-cache-ak0.pinimg.com/736x/a6/64/0b/a6640be3553f29c9b0605052b1e938e9--guitar-players-rockstars.jpg"
              className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
            />
          </div>
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw6 lh-title black mv0">Angus Young </h1>
            <h2 className="f6 fw4 mt0 mb0 black-60">AC/DC</h2>
          </div>
          <div className="dtc v-mid">
            <form className="w-100 tr">
              <Link className="link black-60" to="/contacts/:id">
                <button
                  className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                  type="submit"
                >
                  Details
                </button>
              </Link>
            </form>
          </div>
        </article>
      </main>

      <Footer />

    </div>
  )
}
export default Contacts
