import React from 'react'
import BackDeleteHeader from '../containers/back-delete-header'
import Footer from '../containers/footer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getContact } from '../db'
import { Button } from 't63'

class ShowContact extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.profileId
    // this.props.dispatch(getProfile(profileId))

    const contactId = this.props.match.params.contactId
    this.props.dispatch(getContact(profileId, contactId))
  }

  render() {
    const props = this.props

    return (
      <div className="bg-light-gray">
        <div>
          <BackDeleteHeader
            profileId={props.match.params.profileId}
            contactId={props.match.params.contactId}
            history={props.history}
          />
        </div>

        <article className="mw6 center bg-light-gray br3 pa3 pa4-ns mv3 ">
          <div className="tc">
            <img
              src={props.contact.photo}
              alt=""
              className="br4 h5 w5 dib bg-white ba mt4 b--black-05 pa2"
              title="Contact Photo"
            />
            <h1 className="f3 mb2">
              {props.contact.firstName} {props.contact.lastName}
            </h1>
            <h2 className="f5 fw4 gray mt0">{props.contact.company}</h2>
          </div>
        </article>

        <main className="mw6 center ba b--black-20 bg-white">

          <h2 className="tc flex-center">Contact Info</h2>
          <ul className="list pl0 mt0 measure center">
            <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
              <img
                className="w2 h2 w3-ns h3-ns br-100"
                src={[props.contact.companyPhoto]}
                alt=""
              />

              <div className="pl3 flex-auto">
                <span className="f6 db b black-70">
                  {props.contact.firstName} {props.contact.lastName}
                </span>
                <span className="f6 db black-70">{props.contact.email}</span>
              </div>
              <div>
                <a href="tel:" className="f6 link blue hover-dark-gray">
                  {props.contact.phone}
                </a>
              </div>
            </li>
          </ul>
          <div className="tc">
            <Link
              className="link"
              to={`/profiles/${props.contact.profileId}/contacts/${props.contact
                ._id}/edit`}
            >
              <Button className="w-75 bg-green ba br2 b--light-green">
                Edit Contact
              </Button>
            </Link>
          </div>

        </main>

        <Footer />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contact
  }
}

const connector = connect(mapStateToProps)

export default connector(ShowContact)
