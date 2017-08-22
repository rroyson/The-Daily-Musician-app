import React from 'react'
import VenueHeader from '../containers/venue-header'
import { Link } from 'react-router-dom'
import Footer from '../containers/footer'
import { Button } from 't63'
import { connect } from 'react-redux'
import { getVenue } from '../db'

class ShowVenue extends React.Component {
  componentDidMount() {
    const venueId = this.props.match.params.id
    this.props.dispatch(getVenue(venueId))
  }

  render() {
    return (
      <div className="bg-light-gray">
        <div>
          <VenueHeader />
        </div>

        <article className="mw6 center bg-light-gray br3 pa3 pa4-ns mv3 ">
          <div className="tc ">
            <img
              src={
                this.props.venues.photo
                  ? this.props.venues.photo
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8r-xoWVzfquxXxVjc5in7zMvwVeAjj9QwEz2lffms8WdvP3d3'
              }
              alt=""
              className="br4 h5 w5 dib bg-white ba mt4 b--black-05 pa2"
              title="Venue Photo"
            />
            <h1 className="f3 mb2">
              {this.props.venues.name}
            </h1>
            <h2 className="f5 fw4 gray mt0">
              {this.props.venues.address +
                ' ' +
                this.props.venues.city +
                ', ' +
                this.props.venues.state +
                ' ' +
                this.props.venues.postalCode +
                ' ' +
                this.props.venues.country}
            </h2>

          </div>

        </article>
        <main className="mw6 center ba b--black-20 bg-white">
          <h2 className="tc flex-center ">Venue Contact</h2>
          <ul className="list pl0 mt0 measure center">
            <li className="flex items-center lh-copy pa3  ph0-l bb b--black-10">
              <img
                className="w2 h2 w3-ns h3-ns br-100"
                src={
                  this.props.venues.photo
                    ? this.props.venues.photo
                    : 'https://aciappcenter.cisco.com/skin/frontend/ciscopackage/system/images/avatar.png'
                }
                alt=""
              />
              <div className="pl3 flex-auto">
                <span className="f6 db b black-70">
                  {this.props.venues.contact
                    ? this.props.venues.contact
                    : 'No contact name available'}
                </span>
                <span className="f6 db black-70">
                  {this.props.venues.url
                    ? this.props.venues.url
                    : 'No contact email available'}
                </span>
              </div>
              <div>
                <a href="tel:" className="f6 link blue hover-dark-gray">
                  {this.props.venues.phone
                    ? this.props.venues.phone
                    : 'No contact phone available'}
                </a>
              </div>
            </li>
          </ul>
          <div className="tc">
            <Link className="link" to="/venues/:id/edit">
              <Button className="w-75 bg-green ba br2 b--light-green">
                Add Venue
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

const connector = connect(mapStateToProps)

function mapStateToProps(state) {
  return {
    findVenues: state.findVenues,
    venues: state.venues
  }
}

export default connector(ShowVenue)
