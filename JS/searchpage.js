import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'
import { ajax } from 'jquery'

export default React.createClass ({
  componentDidMount(){
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/terikaCollins-finalproject",
      dataType: "json",
      success: this.onInitialJsonLoadSuccess,
      error: this.onJsonLoadError
    })
  },
  getInitialState(){
    return{
      isTextValid: false,
      textValue: "",
      JsonData: ""
    }
  },
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
      url: "https://tiny-tiny.herokuapp.com/collections/terikaCollins-finalproject",
      dataType: "json",
      type: "post",
      data: {
        currentTextValue
      },
      success: this.onPostJsonLoadSuccess,
      error: this.onJsonLoadError
    })
  },

  render () {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="inner-cover">
              <h1 className="cover-heading"> ORDER ENVY </h1>
              <p className="lead">Enter your entree selection and name of restaurant below!</p>
              <p className="lead">
              <input type="text"
               placeholder="Entree Selection"
               value=""
               onChange={this.onTextChange}/>
              <input
                type="text"
                placeholder="Name of Restaurant"
                value=""
                onChange={this.onTextChange}/>
              <Link className="btn btn-lg bt-default" to="/resultspage" onClick={this.onSubmit} type="submit">GO!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
