import React from 'react'
import NewContactHeader from '../containers/new-contact-header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import LoginHeader from '../containers/login-header'
import { TextField, Button } from 't63'
import Footer from '../containers/footer'

const AddContact = function() {
  return (
    <div>
      <NewContactHeader />
      <div className="flex flex-column justify-start w-100 avenir">

        <main className="overflow-scroll ph2 black-70">
          <h2 className="f4 f2-ns tc">New Contact</h2>
          <form className="ph2">
            <TextField name="First Name" helptxt="First Name" />
            <TextField name="Last Name" />
            <TextField name="Phone Number" placeholder="(888)-888-8888" />
            <TextField name="E-mail" placeholder="you@email.com" />
            <TextField name="Company" placeholder="venue, band, etc." />

            <div className="measure mt2">
              <label className="f6 b db mb2">Photo (optional)</label>
              <div className="flex justify-center pv4">
                <img
                  className="h3 w3 ba pa2 br2 mr2"
                  src="https://placehold.it/64x64?text='photo'"
                />

                <Button
                  type="button"
                  className="bg-green ba br2 b--light-green black"
                >
                  Upload
                </Button>

              </div>
            </div>
            <div className="tc">
              <Button className="w-75  bg-green ba br2 b--light-green">
                Save Contact
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

export default AddContact
