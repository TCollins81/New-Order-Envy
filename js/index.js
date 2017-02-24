import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import jquery from 'jquery'
import app from './app'
import home from './home'
import searchpage from './searchpage'
import resultspage from './resultspage'
import dataForm from './dataForm'
import carousel from './carousel'
import about from './about'


render(
  (
    <Router history={hashHistory}>
      <Route component={app}>
        <Route path="/" component={ home } />
        <Route path="/searchpage" component={ searchpage } />
        <Route path="/resultspage" component={ resultspage } />
        <Route path="/dataForm" component={ dataForm }/>
        <Route path="/carousel" component={ carousel }/>
        <Route path="/about" component={ about }/>
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
