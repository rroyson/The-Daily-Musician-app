import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Search from './pages/search'

const App = function(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </div>
    </BrowserRouter>
  )
}

export default App
