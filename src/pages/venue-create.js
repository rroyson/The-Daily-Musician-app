import React from 'react'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import EditContactHeader from '../containers/edit-contact-header'
import { TextField, Button } from 't63'
import Footer from '../containers/footer'

const VenueForm = function() {
  return (
    <div>
      <EditContactHeader />
      <div className="flex flex-column justify-start w-100 avenir">

        <main className="overflow-scroll ph2 black-70">
          <h2 className="f4 f2-ns tc">Create Venue</h2>
          <form className="ph2">
            <TextField name="Venue Name" />
            <TextField name="Contact Name" />
            <TextField name="Address" />
            <TextField name="Phone Number" />
            <TextField name="E-mail" />

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
              <Button className="w-75 bg-green ba br2 b--light-green">
                Save Venue
              </Button>
            </div>
            <div className="tc">
              <Button className="w-75 bg-light-red ba br2 b--light-green">
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

export default VenueForm
