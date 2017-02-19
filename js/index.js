import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import jquery from 'jquery'
import app from './app'
import resume from './resume'


render(
  (
    <Router history={hashHistory}>
      <Route component={app}>
        <Route path="/" component={ resume } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
