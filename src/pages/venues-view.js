import React from 'react'
import VenueListHeader from '../containers/venue-list-header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import Footer from '../containers/footer'

const Venues = function() {
  return (
    <div>
      <VenueListHeader />

      <main className="mw6 center">
        <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div className="dtc w2 w3-ns v-mid">
            <img
              src="https://image-ticketfly.imgix.net/00/01/67/95/31-og.png?w=300&h=214"
              className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
            />
          </div>
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw6 lh-title black mv0">
              Music Farm (Charleston)
            </h1>
            <h2 className="f6 fw4 mt0 mb0 black-60">Charleston, SC</h2>
          </div>
          <div className="dtc v-mid">
            <form className="w-100 tr">
              <Link className="link black-60" to="/venues/:id">
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
export default Venues
