import React from 'react'
import BackDeleteHeader from '../containers/back-delete-header'
import { Button } from 't63'
import Footer from '../containers/footer'
import { connect } from 'react-redux'
import { SET_PROFILE_X, SET_PROFILE } from '../constants'
import { toUpper, compose, head, path, pathOr } from 'ramda'
import { editProfile, getProfile, createProfile } from '../db'
import FileInput from '../components/file-input'

class ProfileForm extends React.Component {
  componentDidMount() {
    const id = pathOr(null, ['props', 'match', 'params', 'id'], this)
    if (id) {
      this.props.dispatch(getProfile(id))
    } else {
      this.props.dispatch({
        type: SET_PROFILE,
        payload: {
          _id: '',
          _rev: '',
          firstName: '',
          lastName: '',
          email: '',
          dob: '',
          gender: '',
          bandName: '',
          genre: '',
          photo: '',
          contacts: []
        }
      })
    }
  }

  render() {
    const props = this.props
    return (
      <div>
        <BackDeleteHeader
          profileId={props.match.params.profileId}
          contactId={props.match.params.contactId}
          history={props.history}
        />
        <div className="flex flex-column justify-start bg-light-gray w-100 avenir">

          <main className="overflow-scroll ph2 black-70">
            <h2 className="f4 f2-ns tc">Edit Profile</h2>
            <form
              className="ph2 flex flex-column"
              onSubmit={props.submitProfile(props._id, props.history)}
            >

              <div className="mt3">
                <label className="db fw6 black-70 lh-copy f6 ">
                  First Name
                </label>
                <input
                  className="pa2 input-reset ba b--black-30 bg-white w-20 measure"
                  value={props.firstName}
                  onChange={props.handleFirstName}
                  placeholder="Tom"
                />
              </div>

              <div className="mt3">
                <label className="db fw6 black-70 lh-copy f6">Last Name</label>
                <input
                  className="pa2 input-reset ba b--black-30 bg-white w-25 measure"
                  value={props.lastName}
                  onChange={props.handleLastName}
                  placeholder="Morello"
                />
              </div>

              <div className="mt3">
                <label className="db fw6 black-70 lh-copy f6">Birth Date</label>
                <input
                  className="pa2 input-reset ba b--black-30 bg-white w-10 measure"
                  value={props.dob}
                  onChange={props.handleDob}
                  placeholder="dd/mm/yyyy"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 black-70 lh-copy f6">Band Name</label>
                <input
                  className="pa2 input-reset ba b--black-30 bg-white w-30 measure"
                  value={props.bandName}
                  onChange={props.handleBandName}
                  placeholder="Rage Against The Machine"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 black-70 lh-copy f6">Genre</label>
                <input
                  className="pa2 input-reset ba b--black-30 bg-white w-20 measure"
                  value={props.genre}
                  onChange={props.handleGenre}
                  placeholder="rock, indie, country, etc."
                />
              </div>

              <div className="measure mt2">
                <label className="f6 b db pb2 pt3">Gender</label>
                <div className="flex justify-left">

                  <div
                    className={`ba br2 pa2 b--black black mr1 ${props.gender ===
                      'M'
                      ? 'bg-green white'
                      : 'bg-white black'}`}
                    onClick={props.handleGender('M')}
                  >
                    Male
                  </div>
                  <div
                    className={`ba br2 pa2 b--black ${props.gender === 'F'
                      ? 'bg-green white'
                      : 'bg-white black'} black ml1`}
                    onClick={props.handleGender('F')}
                  >
                    Female
                  </div>
                </div>
              </div>
              <div className="measure mt2">
                <label className="f6 fw6 black-70 b db pb0 mt4">
                  Photo (optional)
                </label>
                <div className="flex justify-left b--black-30 pv3">
                  <img
                    className="h3 w3 ba pa2 br2 mr2"
                    alt=""
                    src={
                      props.photo
                        ? props.photo
                        : "https://placehold.it/64x64?text='photo'"
                    }
                  />
                  <FileInput className="pv3 ml2" onChange={props.handlePhoto}>
                    <Button
                      type="button"
                      className="bg-green ba br2 b--light-green black"
                    >
                      Upload
                    </Button>
                  </FileInput>
                </div>

              </div>
              <div className="tc">
                <Button className="w-50  bg-green ba mt4 br2 b--light-green">
                  Update Profile
                </Button>
              </div>
              <div className="tc mb2">
                <Button className="w-50  bg-gray ba br2 b--light-gray">
                  Cancel
                </Button>
              </div>
            </form>

          </main>
          <Footer />
        </div>

      </div>
    )
  }
}

function mapActionsToProps(dispatch) {
  const doDispatch = (field, value) => {
    dispatch({
      type: SET_PROFILE_X + toUpper(field),
      payload: value
    })
  }
  return {
    dispatch,
    submitProfile: (_id, history) => e => {
      e.preventDefault()
      if (_id) {
        dispatch(editProfile(history))
      } else {
        dispatch(createProfile(history))
      }
      //history.push(`profiles/${id}`)
    },
    handleFirstName: e => doDispatch('FIRSTNAME', e.target.value),
    handleBandName: e => doDispatch('BANDNAME', e.target.value),
    handleLastName: e => doDispatch('LASTNAME', e.target.value),
    handleDob: e => doDispatch('DOB', e.target.value),
    handleGenre: e => doDispatch('GENRE', e.target.value),
    handleGender: gender => e => doDispatch('GENDER', gender),

    handlePhoto: (e, results) => {
      const blob = compose(path(['target', 'result']), head, head)(results)
      doDispatch('PHOTO', blob)
    }
  }
}

function mapStateToProps(state) {
  return {
    _id: state.profiles._id,
    firstName: state.profiles.firstName,
    lastName: state.profiles.lastName,
    dob: state.profiles.dob,
    genre: state.profiles.genre,
    photo: state.profiles.photo,
    gender: state.profiles.gender,
    bandName: state.profiles.bandName
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ProfileForm)
