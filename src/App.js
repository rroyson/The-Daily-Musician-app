import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'

const App = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  )
}

export default App
