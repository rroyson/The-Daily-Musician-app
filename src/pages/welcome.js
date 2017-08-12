import React from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../db'

class Welcome extends React.Component {
  componentDidMount() {
    console.log('props', this.props)
    // const profileId = this.props.match.params.id
    // this.props.dispatch(getProfile(profileId))
  }
  render() {
    return (
      <div>

        <article className="athelas">
          <div className="vh-100 dt w-100 tc bg-dark-gray white cover">
            <div className="dtc v-mid">

              <h1 className="f1 f-headline-l fw1 i white-60">
                {this.props.app.title}
              </h1>
              <blockquote className="ph0 mh0 measure f4 lh-copy center">
                <p className="mb6 fw1 white-70">
                  Its the space you put between the notes that make the music.
                </p>
                <div>

                  <button
                    className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
                    onClick={this.props.handleClick(this.props.history)}
                  >
                    Login
                  </button>

                </div>

              </blockquote>
            </div>
          </div>

        </article>

      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    app: state.app,
    profile: state.profile
  }
}

function mapActionsToProps(dispatch) {
  return {
    handleClick: history => e => {
      e.preventDefault()
      // dispatch(getProfile())
      history.push('/profile')
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Welcome)
