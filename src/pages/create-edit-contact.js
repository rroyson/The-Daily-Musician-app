import React from 'react'
import EditContactHeader from '../containers/edit-contact-header'
import BackDeleteHeader from '../containers/back-delete-header'
import { TextField, Button } from 't63'
import Footer from '../containers/footer'
import { getContact, editContact, createContact } from '../db'
import {
  SET_PROFILE_CONTACT,
  SET_CONTACT_X,
  SET_PROFILE_CONTACTS
} from '../constants'
import { pathOr, toUpper, compose, path, head } from 'ramda'
import { connect } from 'react-redux'
import FileInput from '../components/file-input'

class ContactForm extends React.Component {
  componentDidMount() {
    const profileId = pathOr(
      null,
      ['props', 'match', 'params', 'profileId'],
      this
    )
    const contactId = pathOr(
      null,
      ['props', 'match', 'params', 'contactId'],
      this
    )

    if (profileId && contactId) {
      this.props.dispatch(getContact(profileId, contactId))
    } else {
      this.props.dispatch({
        type: SET_PROFILE_CONTACT,
        payload: {
          profileId: profileId,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          gender: '',
          company: '',
          genre: '',
          photo: ''
        }
      })
    }
  }

  render() {
    const props = this.props
    return (
      <div>

        <div>
          <BackDeleteHeader
            profileId={props.match.params.profileId}
            contactId={props.match.params.contactId}
            history={props.history}
          />
        </div>
        <div className="flex flex-column justify-start w-100 avenir">

          <main className="overflow-scroll ph2 black-70">
            <h2 className="f4 f2-ns tc">
              {props._id ? 'Edit Contact' : 'New Contact'}
            </h2>
            <form
              onSubmit={props.submitContact(props._id, props.history)}
              className="ph2"
            >
              <TextField
                name="First Name"
                helptxt="First Name"
                value={props.firstName}
                onChange={props.handleFirstName}
              />
              <TextField
                name="Last Name"
                value={props.lastName}
                onChange={props.handleLastName}
              />
              <TextField
                name="Phone Number"
                placeholder="(888)-888-8888"
                value={props.phone}
                onChange={props.handlePhone}
              />
              <TextField
                name="E-mail"
                placeholder="you@email.com"
                value={props.email}
                onChange={props.handleEmail}
              />
              <TextField
                name="Company"
                placeholder="venue, band, etc."
                value={props.company}
                onChange={props.handleCompany}
              />

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
                    alt=""
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
                  {props._id ? 'Update Contact' : 'Create Contact'}
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
      type: SET_CONTACT_X + toUpper(field),
      payload: value
    })
  }
  return {
    dispatch,
    submitContact: (_id, history) => e => {
      e.preventDefault()
      if (_id) {
        dispatch(editContact(history))
      } else {
        dispatch(createContact(history))
      }

      //  history.push(`profiles/${id}/contacts`)
    },
    handleFirstName: e => doDispatch('FIRSTNAME', e.target.value),
    handleBandName: e => doDispatch('BANDNAME', e.target.value),
    handleLastName: e => doDispatch('LASTNAME', e.target.value),
    handlePhone: e => doDispatch('PHONE', e.target.value),
    handleEmail: e => doDispatch('EMAIL', e.target.value),
    handleCompany: e => doDispatch('COMPANY', e.target.value),

    handlePhoto: (e, results) => {
      const blob = compose(path(['target', 'result']), head, head)(results)
      doDispatch('PHOTO', blob)
    }
  }
}

function mapStateToProps(state) {
  return {
    _id: state.contact._id,
    firstName: state.contact.firstName,
    lastName: state.contact.lastName,
    phone: state.contact.phone,
    email: state.contact.email,
    photo: state.contact.photo,
    company: state.contact.company
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ContactForm)
