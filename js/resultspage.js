import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'


export default React.createClass ({
  render () {
    return (
      <section>
      <article className="row featurette">
        <h2 className="featurette-heading"> Name of Entree </h2>
        <h2 className="text-muted"> Name of the Restaurant</h2>
          <img
            className="featurette-image  img-responsive center-block"
            src="http://images.media-allrecipes.com/images/51552.jpg"
            alt="shrimp"/>
          <p><Link className="btn btn-primary btn-lg" to=""> RESERVATIONS »</Link></p>
      </article>
    </section>
    )
  }
})
