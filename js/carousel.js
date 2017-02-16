import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'
import { ajax } from 'jquery'
import { carousel } from 'nuka-carousel'

export default React.createClass({
  setDefaultProps(){
    return {
      image: [],
      index: 0
    }
  }

  handleChange(e) {
    this.setState({index: e.activeIndex});
  },

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Carousel</div>
      </Ons.Toolbar>
    );
  },

  setIndex(index) {
    this.setState({index: index});
  },

  render: function() {
    return (
    <Ons.Page renderToolbar={this.renderToolbar}>
        <Ons.Carousel onPostChange={this.handleChange} index={this.state.index} fullscreen swipeable autoScroll overscrollable>
          {this.state.image.map((image, index) => (
            <Ons.CarouselItem key={index} style={{background: image}}>
              <div style={{marginTop: '50%', textAlign: 'center'}}>
              </div>
            </Ons.CarouselImage>
          ))}
        </Ons.Carousel>

        <div style={{
          textAlign: 'center',
          fontSize: '20px',
          position: 'absolute',
          bottom: '36px',
          left: '0px',
          right: '0px'
        }}>
          {this.state.items.map((image, index) => (
            <span key={index} style={{cursor: 'pointer'}} onClick={this.setIndex.bind(this, index)}>
              {this.state.index === index ? '\u25CF' : '\u25CB'}
            </span>
          ))}
        </div>
      </Ons.Page>
    );
  }
});

})
