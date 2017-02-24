import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"> ORDER ENVY </a>
          </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#/about">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
        </div>
      </nav>
    )
  }
})
