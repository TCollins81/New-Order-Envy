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
      <div className="bodyBackground">
        <div className="jumbotron">
          <div className="container">
            <h1 className="homeTitle"> DONT GET MAD... GET ORDER ENVY. </h1>
            <br/>
            <p><Link className="btn btn-primary btn-lg" to="/searchpage">LETS GET STARTED »</Link></p>
          </div>
        </div>
        <div className="homeContainer">
          <div className="homeRow">
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
