import React from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../db'
import { Link } from 'react-router-dom'

class Welcome extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <article className="athelas">
          <div>

            <div
              className="vh-100 dt w-100 tc bg-black-80 white-30 cover o-90"
              style={{
                'background-image':
                  'url("http://www.iheartberlin.de/wp-content/uploads/2016/02/Live-Concert-Berlin-640x425.jpg")'
              }}
            >

              <div className="dtc v-mid">
                <h1 className="f1 f-headline-l fw3 i  green">
                  {this.props.app.title}
                </h1>
                <blockquote className="ph0 mh0 measure f4 lh-copy center">
                  <p className="mb6 fw1 white-90">
                    The space between the notes that make the music.
                  </p>
                  <div>
                    <Link to={`/profiles/${this.props.profiles._id}`}>
                      <button className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3">
                        Login
                      </button>
                    </Link>

                  </div>

                </blockquote>
              </div>
            </div>
          </div>

        </article>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.app,
    profile: state.profile,
    logo: state.app.logo,
    profiles: state.profiles
  }
}

function mapActionsToProps(dispatch) {
  return {
    handleClick: history => e => {
      e.preventDefault()
      dispatch(getProfile())
      dispatch(
        profile =>
          profile
            ? history.push(`/profiles/${profile._id}`)
            : history.push('/profiles/new')
      )
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Welcome)
