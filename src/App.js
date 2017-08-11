import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import history from './history'
import Profile from './pages/home'
import Welcome from './pages/welcome'
import ProfileForm from './pages/create-profile'
// import Profile from './pages/view-profile'
import Contacts from './pages/view-contacts'
import EditProfile from './pages/edit-profile'
import ShowContact from './pages/show-contact'
import EditContact from './pages/edit-contact'
import AddContact from './pages/add-contact'
import VenueForm from './pages/venue-create'
import ShowVenue from './pages/venue-show'
import Venues from './pages/venues-view'
import Calendar from './pages/calender-view'
import EditVenueForm from './pages/venue-edit'
import Auth from './auth'

const auth = Auth()

const App = function(props) {
  return (
    <BrowserRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/signup" component={ProfileForm} />
          <Route path="/profile/:id/edit" component={EditProfile} />
          <Route path="/profile" component={Profile} />
          <Route path="/contacts/new" component={AddContact} />
          <Route path="/contacts/:id/edit" component={EditContact} />
          <Route path="/contacts/:id" component={ShowContact} />
          <Route path="/contacts/" component={Contacts} />
          <Route path="/venues/new" component={VenueForm} />
          <Route path="/venues/:id/edit" component={EditVenueForm} />
          <Route path="/venues/:id" component={ShowVenue} />
          <Route path="/venues" component={Venues} />
          <Route path="/calendar" component={Calendar} />

        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
