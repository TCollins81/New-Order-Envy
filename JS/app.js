import React from 'react'
import { render } from 'react-dom'

export default React.createClass({
  render() {
    return (
    <main>
      {this.props.children}
    </main>
    )
  }
})
