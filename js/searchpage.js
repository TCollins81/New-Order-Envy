import React from 'react'
import { Render } from 'react'
import jquery from 'jquery'

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
    e.preventDefault()
    var currentTextValue = this.state.textValue
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/terikaCollins-finalprojectdatabase",
      dataType: "json",
      type: "post",
      data: {
          entree: "",
          image: "",
          restaurant: ""
      },
      success: this.onPostJsonLoadSuccess,
      error: this.onJsonLoadError
    })
  },

  render () {
    return (
      <article>
        <div>
          <input className="entree" type="text" placeholder="entree"/>
          <input className="restaurant" type="text" placeholder="restaurant"/>
          <button type="submit"></button>

          <img className="image" src="..." alt="..."/>
        </div>
      </article>
    )
  }
})
