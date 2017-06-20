import React from 'react'
import Header from '../containers/header'
import Logo from '../containers/logo'
import BigButton from '../components/big-button'
import { Link } from 'react-router-dom'

const Home = function() {
  return (
    <div>
      <Header />
      <main>
        <Logo />
        <div className="mt5 tc">
          <Link to="/search">
            <BigButton>Get Started</BigButton>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
