import React from 'react'
import { render } from 'react-dom'
import Header from './Header'

export default React.createClass({
  render() {
    return (
    <main>
      <Header />
      {this.props.children}
    </main>
    )
  }
})
