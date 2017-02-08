import React from 'react'
import { render } from 'react-dom'

export default React.createClass ({
  render () {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="inner-cover">
              <h1 className="cover-heading"> ORDER ENVY </h1>
              <p className="lead">Enter your entree selection and name of restaurant below!</p>
              <p className="lead">
              <input type="text"
               placeholder="Entree Selection"
               value="">
              <input
                type="text"
                placeholder="Name of Restaurant"
                value="">
              <a href="#" className="btn btn-lg bt-default">GO!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
