import React from 'react'
import EditProfileHeader from '../containers/edit-profile-header'
import { TextField, Button } from 't63'
import Footer from '../containers/footer'
import { connect } from 'react-redux'
import { SET_PROFILE_X, SET_EDITED_PROFILE, SET_PROFILE } from '../constants'
import { toUpper, compose, head, path, pathOr } from 'ramda'
import { editProfile, getProfile } from '../db'
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
        <EditProfileHeader />
        <div className="flex flex-column justify-start w-100 avenir">

          <main className="overflow-scroll ph2 black-70">
            <h2 className="f4 f2-ns tc">Edit Profile</h2>
            <form
              className="ph2 flex flex-column"
              onSubmit={props.submitProfile(props._id, props.history)}
            >
              <TextField
                className=""
                value={props.firstName}
                onChange={props.handleFirstName}
                name="First Name"
                helptxt="First Name"
              />
              <TextField
                value={props.lastName}
                onChange={props.handleLastName}
                name="Last Name"
              />
              <TextField
                value={props.dob}
                onChange={props.handleDob}
                name="Birth Date"
                placeholder="MM/DD/YYYY"
              />
              <TextField
                value={props.bandName}
                onChange={props.handleBandName}
                name="Band Name"
                placeholder="You're band here"
              />
              <TextField
                value={props.genre}
                onChange={props.handleGenre}
                name="Genre"
                placeholder="rock, indie, country, etc."
              />
              <div className="measure mt2">
                <label className="f6 b db mb2">Gender</label>
                <div className="flex justify-center">

                  <div
                    className={`ba br2 pa2 b--black black mr1 ${props.gender ===
                      'M'
                      ? 'bg-green'
                      : 'bg-white'}`}
                    onClick={props.handleGender('M')}
                  >
                    Male
                  </div>
                  <div
                    className={`ba br2 pa2 b--black ${props.gender === 'F'
                      ? 'bg-green'
                      : 'bg-white'} black ml1`}
                    onClick={props.handleGender('F')}
                  >
                    Female
                  </div>
                </div>
              </div>
              <div className="measure mt2">
                <label className="f6 b db mb2">Photo (optional)</label>
                <div className="flex justify-center pv4">
                  <img
                    className="h3 w3 ba pa2 br2 mr2"
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
                <Button className="w-75  bg-green ba br2 b--light-green">
                  Update Profile
                </Button>
              </div>
              <div className="tc mb2">
                <Button className="w-75  bg-light-red ba br2 b--light-green">
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
    submitProfile: history => id => e => {
      e.preventDefault()
      // if (_id) {
      //       dispatch(editProfile(history))
      //     } else {
      //       dispatch(createProfile(history))
      //     }
      dispatch(editProfile)
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
