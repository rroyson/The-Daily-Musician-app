import React from 'react'
import ShowContactHeader from '../containers/show-contact-header'
import Footer from '../containers/footer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getContact, getProfile } from '../db'

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
        <div className="mb5">
          <ShowContactHeader />
        </div>

        <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img
              src={props.contact.photo}
              alt=""
              className="br4 h5 w5 dib ba mt4 b--black-05 pa2"
              title="Photo of a kitty staring at you"
            />
            <h1 className="f3 mb2">
              {props.contact.firstName} {props.contact.lastName}
            </h1>
            <h2 className="f5 fw4 gray mt0">{props.contact.company}</h2>
          </div>
        </article>

        <main className="mw6 center">
          <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">

            <div className="dtc v-mid pl3">
              <h1 className="f6 f5-ns fw6 lh-title black mv0">
                Phone Number: {props.contact.phone}
              </h1>
              <h2 className="f6 fw4 mt0 mb0 black-60">
                {props.contact.email}
              </h2>
            </div>
            <div className="dtc v-mid">
              <form className="w-100 tr">
                <Link
                  className="link black-60"
                  to={`/profiles/${props.contact.profileId}/contacts/${props
                    .contact._id}/edit`}
                >
                  <button
                    className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                    type="submit"
                  >
                    Edit
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
}

function mapStateToProps(state) {
  return {
    contact: state.contact
  }
}

const connector = connect(mapStateToProps)

export default connector(ShowContact)
