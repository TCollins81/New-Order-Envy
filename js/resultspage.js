import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Link } from 'react-router'
import { ajax } from 'jquery'


export default React.createClass ({
  getInitialState(){
    return {
      listings:[],
      entree: ""
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
  render () {
    return (
      <section>
        <article>
          <div>
            <input className="entree" type="text" placeholder="entree"/>
            <input className="restaurant" type="text" placeholder="restaurant"/>
            <button type="submit"></button>

            <img className="image" src="..." alt="..."/>
          </div>
        </article>
        <article className="row featurette">
      {
        this.state.listings.map((listing, i)=>{
          if (listing.entree === "Shrimp"){
            return (
                <div>
                  <h2 className="featurette-heading">{listing.entree}</h2>
                <h2 className="text-muted">{listing.restaurant}</h2>
                <h2 className="text-muted">{listing.cuisine}</h2>
                <img
                  className="featurette-image  img-responsive center-block"
                  src={listing.image}/>
                <p><Link className="btn btn-primary btn-lg" to=""> RESERVATIONS »</Link></p>
                </div>
            )
          }
        })
    }
  </article>
    </section>
  )
  }
})
