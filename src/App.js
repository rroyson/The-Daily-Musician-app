import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import history from './history'
import Profile from './pages/profile'
import Welcome from './pages/welcome'
import Contacts from './pages/view-contacts'
import ProfileForm from './pages/create-edit-profile'
import ShowContact from './pages/show-contact'
import ContactForm from './pages/create-edit-contact'
import VenueForm from './pages/venue-create'
import ShowVenue from './pages/venue-show'
import Venues from './pages/venues-view'
import Calendar from './pages/calender-view'
import EditVenueForm from './pages/venue-edit'

const App = function(props) {
  return (
    <BrowserRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route
            path="/profiles/:profileId/contacts/new"
            component={ContactForm}
          />
          <Route
            path="/profiles/:profileId/contacts/:contactId/edit"
            component={ContactForm}
          />
          <Route
            path="/profiles/:profileId/contacts/:contactId"
            component={ShowContact}
          />
          <Route path="/profiles/:id/edit" component={ProfileForm} />
          <Route path="/profiles/new" component={ProfileForm} />
          <Route path="/profiles/:id/contacts" component={Contacts} />

          <Route path="/profiles/:id" component={Profile} />
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
