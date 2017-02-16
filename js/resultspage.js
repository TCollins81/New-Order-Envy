import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'
import { ajax } from 'jquery'


export default React.createClass ({
  getInitialState(){
    return {
      listings:[],
      cuisine: "",
      entree: "",
      restaurant: ""
    }
  },

  componentDidMount(){
    var newEntree = this.props.location.query.cuisine
    var newRest = this.props.location.query.restaurant
    this.setState(
      {
        cuisine: newEntree,
        restaurant:newRest
      }
    )
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
          cuisine: "",
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
            <p><Link className="btn btn-primary btn-lg" to="/searchpage">BACK</Link></p>
            {this.state.listings.map((listing, i)=>{
              console.log(listing.restaurant);
              if(listing.restaurant.toLowerCase() == this.state.restaurant.toLowerCase()
                && listing.cuisine.toLowerCase().indexOf(this.state.cuisine.toLowerCase()) > -1) {
                return (
                  <article className="row featurette" key={i}>
                    <h2
                      className="featurette-heading">{listing.entree}</h2>
                    <h2
                      className="text-muted">{listing.restaurant}</h2>
                    <img
                      className="featurette-image img-responsive center-block"
                      src={listing.image}/>
                  </article>
          )
        }if(this.state.restaurant == ""
          && listing.cuisine.toLowerCase().indexOf(this.state.cuisine.toLowerCase()) > -1){
          return (
            <article className="row featurette" key={i}>
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
