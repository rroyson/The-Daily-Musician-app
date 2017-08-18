import React from 'react'
import ViewContactsHeader from '../containers/view-contacts-header'
import Footer from '../containers/footer'
import TimekitBooking from 'timekit-booking'
require('jquery')

// Booking.js is now available as local var TimekitBooking instead of global window.timekitBooking
var widget = new TimekitBooking()
console.log('widget', widget)
class Calendar extends React.Component {
  render() {
    return (
      <div>
        <ViewContactsHeader />
        <div />
        <h1 className="tc">Calender entered here</h1>
        <Footer />
      </div>
    )
  }
}

export default Calendar
