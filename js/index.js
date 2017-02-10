import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import jquery from 'jquery'
import app from './app'
import database from './database'

render(
  (
    <Router history={hashHistory}>
      <Route component={app}>
        <Route path="/" component={ database } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
