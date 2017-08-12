import React from 'react'
import Header from '../containers/header'
import { Link } from 'react-router-dom'
import Footer from '../containers/footer'
import { connect } from 'react-redux'
import { map } from 'ramda'
import { getContacts } from '../db'

const li = props => {
  console.log('props', props)
  return (
    <main className="mw6 center">
      <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
        <div className="dtc w2 w3-ns v-mid">
          <img
            src=""
            alt=""
            className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
          />
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">
            console.log('props', props.contacts)

          </h1>
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
  )
}

class Contacts extends React.Component {
  componentDidMount() {
    const profileId = this.props.match.params.id
    this.props.dispatch(getContacts(profileId))
  }

  render() {
    return (
      <div>
        <Header />

        <list>
          {/*{map(li, this.props.contacts)}*/}
        </list>

        <Footer />

      </div>
    )
  }
}
// const mapStateToProps = state => {
//   console.log('state', state)
//   const profileContacts = state.profile.contacts
//   return {
//     contacts: profileContacts
//   }
// }
function mapStateToProps(state) {
  console.log('state', state)
  return {
    contacts: state.contacts
  }
}

const connector = connect(mapStateToProps)

export default connector(Contacts)
