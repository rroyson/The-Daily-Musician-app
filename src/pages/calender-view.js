import React from 'react'
import Header from '../containers/header'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'
import LoginHeader from '../containers/login-header'
import { TextField, Button } from 't63'
import Footer from '../containers/footer'

const Calendar = function() {
  return (
    <div>
      <Header />
      <h1 className="tc">Calender entered here</h1>
      <Footer />
    </div>
  )
}

export default Calendar
