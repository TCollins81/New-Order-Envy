import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import jquery from 'jquery'
import app from 'app'

render(
  (
    <Router history={hashHistory}>
      <Route component={app}>
        <Route path="/" component={ home } />
        <Route path="/searchpage" component={ searchpage } />
        <Route path="/resultspage" component={ resultspage } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
