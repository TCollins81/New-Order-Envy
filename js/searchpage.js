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
      <article>
        <h2>IS YOUR MOUTH WATERING YET?</h2>
        <p>Enter the name of a specific entree or whatever you have a taste for and the name of the restaurant below!</p>
        <div>
          <input onChange={this.onTextChange} className="entree" type="text" placeholder="Burger, Vegetarian..." ref="cuisine"/>
          <input onChange={this.onTextChange} className="restaurant" type="text" placeholder="Restaurant" ref="restaurant"/>
          <button onClick={this.onSubmit} className="btn btn-primary btn-lg">Lets Get Envious!</button>
        </div>
        <p>Please note... some menu items change daily.</p>
      </article>
    )
  }
})
