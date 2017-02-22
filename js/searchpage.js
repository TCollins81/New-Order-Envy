import React from 'react'
import { Render } from 'react'
import jquery from 'jquery'
import { hashHistory, Link } from 'react-router'

export default React.createClass ({
  ComponentDidMount(){
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/terikaCollins-finalprojectdatabase",
      dataType: "json",
      success: this.onInitialJsonLoadSuccess,
      error: this.onJsonLoadError
    })
  },
  getInitialState(){
    return{
      isTextValid: false,
      textValue: "",
      JsonData: []
    }
  },
  // TODO: need to figure out how to have both inputs send information to database at the same time??
  // if both inputs are receiving data, the default behavior is the the second input will trigger ajax call.
  onTextChange(e){
    //when the text is inputed set state changes
    var currentTextInput = e.target.value
    console.log("currentTextInput");
    this.setState({
      textValue: currentTextInput
    })
  },

  onSubmit(e){
    hashHistory.push({
      pathname: "/resultspage",
      search: "?cuisine="+ this.refs.cuisine.value + "&" + "restaurant=" + this.refs.restaurant.value
    })
  },

  // get the value of the search inputs into the results page map if statements
  render () {
    return (
      <article className="search">
        <div className="searchContent">
        <h2 className="searchTitle">IS YOUR MOUTH WATERING YET?</h2>
        <p className="searchDescription">Enter the name of a specific entree or cuisine and/or the name of your favorite Pearl Brewery restaurant below!</p>
        <div>
          <input className="entreeInput" onChange={this.onTextChange} type="text" placeholder="BURGER, TACOS, VEGETARIAN, ECT..." ref="cuisine"/>
          <input className="restaurantInput" onChange={this.onTextChange} type="text" placeholder="NAME OF RESTAURANT" ref="restaurant"/>
          <button className="searchButton" onClick={this.onSubmit} className="btn btn-primary btn-lg">GO!</button>
        </div>
        <p>Please note... some menu items change daily.</p>
        <p> For educational purposes only</p>
        </div>
      </article>
    )
  }
})
