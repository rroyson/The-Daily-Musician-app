import React from 'react'
import Header from '../containers/header'
import Logo from '../containers/logo'
import BigButton from '../components/big-button'

const Home = function() {
  return (
    <div>
      <Header />
      <main>
        <Logo />
        <div className="mt5 tc">
          <BigButton onClick={openDocs}>Get Started</BigButton>
        </div>
      </main>
    </div>
  )
}

export default Home

function openDocs(e) {
  window.location = 'http://localhost:5000'
}
