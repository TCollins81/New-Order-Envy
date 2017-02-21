import React from 'react';
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'


export default React.createClass ({
  getDefaultProps(){
    return {

    }
  },
  render () {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1> DONT GET MAD... GET ENVY. </h1>
            <p>Have you ever placed an order at a restaurant and instantly felt regret when you see someone else's food arrive at their table? Let us, help you! Search for the most popular entrees at The Pearl Brewery and never have ORDER ENVY again... so what are you waiting for?</p>
            <br/>
            <p><Link className="btn btn-primary btn-lg" to="/searchpage">LETS GET STARTED »</Link></p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="glyphicon glyphicon-camera glyphicon-large" aria-hidden="true"></span>
              <h3>Entree Pics</h3>
              <p> See what your entree will look like BEFORE you order it.</p>
            </div>
            <div className="col-md-4">
              <span className="glyphicon glyphicon-leaf glyphicon-large" aria-hidden="true"></span>
              <h3> Special Dietary Restrictions </h3>
              <p> Search for Vegetarian and Gluten Friendly options.</p>
            </div>
            <div className="col-md-4">
              <span className="glyphicon glyphicon-globe glyphicon-large" aria-hidden="true"></span>
              <h3> Join Our Community </h3>
              <p>Sign up for special offers, invite only events, and more! </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
