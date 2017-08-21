import React from 'react'
import ViewContactsHeader from '../containers/view-contacts-header'
import Footer from '../containers/footer'
import TimekitBooking from 'timekit-booking'
require('jquery')

export default class Calendar extends React.Component {
  componentDidMount() {
    var widget = new window.TimekitBooking()
    widget.init({
      app: 'daily-musician',
      email: 'frontiersons@gmail.com',
      apiToken: 'H6KEqtzjTVzP8vP3Z9MJdEufBFeOYFEC',
      calendar: '58e308b6-3505-47a1-b642-17b121689b93',
      targetEl: this.refs.bookingjs
    })
  }

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <div id="bookingjs" ref="bookingjs" />
      </div>
    )
  }
}
