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
  if (/localhost/.test(window.location.href)) {
    window.location = 'http://localhost:5000'
  } else {
    window.location =
      'https://github.com/jrs-innovation-center/jrscode-react-starter#jrs-react-starter-kit'
  }
}
