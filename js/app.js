import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
    <main>
      <Header />
      {this.props.children}
      <Footer />
    </main>
    )
  }
})
