import React from 'react'
import EditContactHeader from '../containers/edit-contact-header'
import BackDeleteHeader from '../containers/back-delete-header'
import { Button, TextField } from 't63'
//import { TextField } from '../components/r-text-field'
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
        <div className="flex flex-column justify-start bg-light-gray w-100 avenir">

          <main className="overflow-scroll ph2 black-70">
            <h2 className="f4 f2-ns tc">
              {props._id ? 'Edit Contact' : 'New Contact'}
            </h2>
            <form
              onSubmit={props.submitContact(props._id, props.history)}
              className="ph2"
            >

              <div className="mt3">
                <label className="db fw6 black-70 lh-copy f6">First Name</label>
                <input
                  className="pa2 input-reset ba b--black-30 bg-white w-35 measure"
                  value={props.firstName}
                  onChange={props.handleFirstName}
                />
              </div>

              <div className="mt3">
                <label className="db fw6 black-70 lh-copy f6">Last Name</label>
                <input
                  className="pa2 input-reset b--black-30 ba bg-white w-40 measure"
                  value={props.lastName}
                  onChange={props.handleLastName}
                />
              </div>

              <div className="mt3">
                <label className="db fw6 black-70 lh-copy f6">Phone</label>
                <input
                  type="tel"
                  className="pa2 input-reset ba b--black-30 bg-white w-20 measure"
                  value={props.phone}
                  onChange={props.handlePhone}
                />
              </div>

              <div className="mt3">
                <label className="db fw6 black-70 lh-copy f6">Email</label>
                <input
                  type="email"
                  className="pa2 input-reset b--black-30 ba bg-white w-60 measure"
                  value={props.email}
                  onChange={props.handleEmail}
                />
              </div>

              <div className="mt3">
                <label className="db fw6 black-70  lh-copy f6">
                  Company
                </label>
                <input
                  className="pa2 input-reset ba b--black-30 bg-white w-50 measure"
                  value={props.company}
                  onChange={props.handleCompany}
                />
              </div>

              <div className="measure mt2">
                <label className="f6 fw6 black-70 b db pb0 mt4">
                  Photo (optional)
                </label>
                <div className="flex justify-left b--black-30 pv3">
                  <img
                    className="h3 w3 ba b--black-30 pa2 br2 mr2"
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
                      className="bg-green ba br2 b--green black"
                    >
                      Upload
                    </Button>
                  </FileInput>

                </div>
              </div>
              <div className="tc">
                <Button className="w-50  bg-green ba mt4 br2 b--light-green">
                  {props._id ? 'Update Contact' : 'Create Contact'}
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
