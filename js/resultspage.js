import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'
import { ajax } from 'jquery'


export default React.createClass ({
  getInitialState(){
    return {
      listings:[],
      entree: "",
      restaurant: ""
    }
  },
  componentWillMount(){
    return {
      this.setState({entree: this.props.location.query.entree,
          restaurant:this.props.location.query.restaurant})
    }
  },

  componentDidMount(){
    ajax({
      url:"https://tiny-tiny.herokuapp.com/collections/terikaCollins-finalprojectdatabase",
      datatype:"json",
      success:this.dataLoaded,
      error: this.error
    })
  },
  dataLoaded(results){
    this.setState({listings:results})
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
          restaurant: "",
          image: ""
      },
      success: this.dataLoaded,
      error: this.error
    })
  },
  render () {
    return (
          <div>
            {this.state.listings.map((listing, i)=>{
              if(listing.restaurant === ""){
                return (
                  <article className="row featurette">
                    <h2
                      className="featurette-heading">{listing.entree}</h2>
                    <h2
                      className="text-muted">{listing.restaurant}</h2>
                    <img
                      className="featurette-image img-responsive center-block"
                      src={listing.image}/>
                  </article>
          )

        }
      })}
    </div>
    )
  }
})
