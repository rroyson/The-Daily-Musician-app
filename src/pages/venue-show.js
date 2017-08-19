import React from 'react'
import EditContactHeader from '../containers/edit-contact-header'
import { Link } from 'react-router-dom'
import Footer from '../containers/footer'
import { Button } from 't63'
import { connect } from 'react-redux'
import { getVenue } from '../db'

class ShowVenue extends React.Component {
  componentDidMount() {
    const venueId = this.props.match.params.id
  }

  render() {
    return (
      <div className="bg-light-gray">
        <div>
          <EditContactHeader />
        </div>

        <article className="mw6 center bg-light-gray br3 pa3 pa4-ns mv3 ">
          <div className="tc ">
            <img
              src="https://image-ticketfly.imgix.net/00/01/67/95/31-og.png?w=300&h=214"
              alt=""
              className="br4 h5 w5 dib bg-white ba mt4 b--black-05 pa2"
              title="Venue Photo"
            />
            <h1 className="f3 mb2">Music Farm (Charleston)</h1>
            <h2 className="f5 fw4 gray mt0">321 Anne Street Charleston, SC</h2>

          </div>

        </article>
        <main className="mw6 center ba b--black-20 bg-white">
          <h2 className="tc flex-center ">Venue Contact</h2>
          <ul className="list pl0 mt0 measure center">
            <li className="flex items-center lh-copy pa3  ph0-l bb b--black-10">
              <img
                className="w2 h2 w3-ns h3-ns br-100"
                src="http://tachyons.io/img/avatar-mrmrs.jpg"
                alt=""
              />
              <div className="pl3 flex-auto">
                <span className="f6 db b black-70">Mike Rogers</span>
                <span className="f6 db black-70">mike@email.com</span>
              </div>
              <div>
                <a href="tel:" className="f6 link blue hover-dark-gray">
                  8012341234
                </a>
              </div>
            </li>
          </ul>
          <div className="tc">
            <Link className="link" to="/venues/:id/edit">
              <Button className="w-75 bg-green ba br2 b--light-green">
                Edit Venue
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
    findVenues: state.findVenues
  }
}

export default connector(ShowVenue)
