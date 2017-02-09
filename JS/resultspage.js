import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'
import results_carousel_controls from './results_carousel_controls'
import results_carousel_indicators from './results_carousel_indicators'
import results_carousel_slides from './results_carousel_slides'

export default React.createClass ({
  render () {
    return (
        <div
          className="carousel slide"
          data-ride="carousel">
        </div>
    )
  }
})
