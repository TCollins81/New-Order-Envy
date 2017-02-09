import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'

export default React.createClass ({
  render () {
    return (
      <div>
        <a
          className="left carousel-control"
          data-slide="prev">
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true">
          </span>

          <span
            className="sr-only">Previous
          </span>
        </a>
        <a
          className="right carousel-control"
          data-slide="next">
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true">
          </span>

          <span
            className="sr-only">Next
          </span>
        </a>
      </div>
    )
  }
})
