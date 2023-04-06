import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

export default function Routing() {
  return (
    <div>
      <Router>
          <Route exact path='/'>Home</Route>
          <Route exact path='/about'>About</Route>
          <Route exact path='/contact'>Contact</Route>
      </Router>
      </div>
  )
}
