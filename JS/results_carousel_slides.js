import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'

export default React.createClass ({
  render () {
    return (
      <div
        className="carousel-inner"
        role="listbox">
        <div
          className="item active">
          <img
            src="..."
            alt="..."/>
          <div
            className="carousel-caption">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>

        <div
          className="item">
          <img
            src="..."
            alt="..."/>
          <div
            className="carousel-caption">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div
          className="item">
          <img
            src="..."
            alt="..."/>
          <div
            className="carousel-caption">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    )
  }
})
