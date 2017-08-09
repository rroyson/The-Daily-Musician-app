import React from 'react'
import EditProfileHeader from '../containers/edit-profile-header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import LoginHeader from '../containers/login-header'
import { TextField, Button } from 't63'
import Footer from '../containers/footer'

const EditProfile = function() {
  return (
    <div>
      <EditProfileHeader />
      <div className="flex flex-column justify-start w-100 avenir">

        <main className="overflow-scroll ph2 black-70">
          <h2 className="f4 f2-ns tc">Edit Profile</h2>
          <form className="ph2">
            <TextField name="First Name" helptxt="First Name" />
            <TextField name="Last Name" />
            <TextField name="Birth Date" placeholder="MM/DD/YYYY" />
            <TextField name="Band Name" placeholder="You're band here" />
            <TextField name="Genre" placeholder="rock, indie, country, etc." />
            <div className="measure mt2">
              <label className="f6 b db mb2">Gender</label>
              <div className="flex justify-center">

                <div className="ba br2 pa2 b--black black mr1">
                  Male
                </div>
                <div className="ba br2 pa2 b--black">
                  Female
                </div>
              </div>
            </div>
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

export default EditProfile
