import React from 'react';
import { render } from 'react-dom'

export default React.createClass ({
  render () {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"> ORDER ENVY </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="jumbotron">
        <div className="container">
          <h1> DONT GET MAD... GET ENVY. </h1>
          <p>Have you ever placed an order at a restaurant and instantly felt regret when you see someone else's food arrive at their table? Let us, help you! Search for the most popular entrees where you are dining and never have ORDER ENVY again... so what are you waiting for?</p>
          <br>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">LETS GET STARTED »</a></p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <span className="glyphicon glyphicon-camera" aria-hidden="true"></span>
            <h3>Entree Pics</h3>
            <p> See what your entree will look like BEFORE you order it.</p>
          </div>
          <div className="col-md-4">
            <span className="glyphicon glyphicon-leaf" aria-hidden="true"></span>
            <h3> Special Dietary Restrictions </h3>
            <p> Notifications for vegetarian and gluten free options.</p>
          </div>
          <div className="col-md-4">
            <span className="glyphicon glyphicon-globe" aria-hidden="true"></span>
            <h3> Join Our Community </h3>
            <p>Sign up for special offers, invite only events, and more! </p>
          </div>
        </div>
      </div>
    )
  }
})
