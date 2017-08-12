import React from 'react'
import LoginHeader from '../containers/login-header'
import { TextField, Button } from 't63'

const ProfileForm = function() {
  return (
    <div>
      <LoginHeader />
      <div className="flex flex-column justify-start w-100 avenir">

        <main className="overflow-scroll ph2 black-70">
          <h2 className="f4 f2-ns tc">Create Profile</h2>
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
                  alt=""
                />

                <Button
                  type="button"
                  className="bg-green ba br2 b--light-green black"
                >
                  Upload
                </Button>

              </div>
            </div>
            <div className="">
              <Button className="w-100 bg-green ba br2 b--light-green">
                Create Profile
              </Button>
            </div>
          </form>

        </main>
      </div>

    </div>
  )
}

export default ProfileForm
