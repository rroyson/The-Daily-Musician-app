import React from 'react'
import CalendarHeader from '../containers/calendar-header'
import Footer from '../containers/footer'
require('jquery')

export default class Calendar extends React.Component {
  componentDidMount() {
    const customBooking = {
      app: 'daily-musician',
      email: 'frontiersons@gmail.com',
      apiToken: 'H6KEqtzjTVzP8vP3Z9MJdEufBFeOYFEC',
      calendar: '58e308b6-3505-47a1-b642-17b121689b93',
      targetEl: this.refs.bookingjs,
      // availabilityView: 'listing',
      fullCalendar: {
        defaultView: 'agendaWeek',
        height: 500
      },

      bookingFields: {
        name: {
          placeholder: 'Venue Name'
        },
        email: {
          prefilled: 'Venue Email',
          disabled: true
        },
        comment: {
          enabled: true,
          prefilled: 'Say a few words'
        },
        phone: {
          enabled: true,
          required: true,
          prefilled: 'Event Phone'
        },

        location: {
          enabled: true,
          placeholder: 'location'
        }
      }
    }
    if (window.TimekitBooking) {
      var widget = new window.TimekitBooking()
      widget.init(customBooking)
    } else {
      document.addEventListener('DOMContentLoaded', e => {
        var widget = new window.TimekitBooking()
        widget.init(customBooking)
      })
    }
  }

  render() {
    return (
      <div>
        <CalendarHeader />
        <h1 className="avenir flex justify-center fw4">Calendar</h1>
        <div id="bookingjs" ref="bookingjs" />
        <Footer />
      </div>
    )
  }
}
