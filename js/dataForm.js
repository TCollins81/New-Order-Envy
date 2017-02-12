import React from 'react'
import { render } from 'react-dom'
import { ajax } from 'jquery'

export default React.createClass({
  getInitialState(){
    return{
      restaurant:"",
      cuisine: "",
      category: "",
      entree:"",
      image:"",
      itemId:""
    }
  },
  componentDidMount(){

  },
  restaurantData(e){
    this.setState({restaurant:e.target.value})
  },
  cuisineData(e){
    this.setState({cuisine:e.target.value})
  },
  categoryData(e){
    this.setState({category:e.target.value})
  },
  entreeData(e){
    this.setState({entree:e.target.value})
  },
  imageData(e){
    this.setState({image:e.target.value})
  },
  itemID(e){
    this.setState({itemId:e.target.value})
    console.log(this.state.itemId);
  },
  onSubmit(){
    ajax({
      url:"https://tiny-tiny.herokuapp.com/collections/terikaCollins-finalprojectdatabase",
      type:"POST",
      datatype:"json",
      data: {
        restaurant:this.state.restaurant,
        cuisine:this.state.cuisine,
        category: this.state.category,
        entree:this.state.entree,
        image:this.state.image
      }
    })
  },
  deleteRecord(){
    var itemId = this.state.itemId
    ajax({
      url:"https://tiny-tiny.herokuapp.com/collections/terikaCollins-finalprojectdatabase/"+itemId,
      type:"DELETE",
      dataType:"json"
    })
  },
  render() {
    return (
    <main>
      <form>
        <input className="formInput" placeholder="Restaurant" onChange={this.restaurantData}></input>
        <input className="formInput" placeholder="Cuisine" onChange={this.cuisineData}></input>
        <input className="formInput" placeholder="Category" onChange={this.categoryData}></input>
        <input className="formInput" placeholder="Entree" onChange={this.entreeData}></input>
        <input className="formInput" placeholder="Image URL" onChange={this.imageData}></input>
        <button className="formInput" onClick={this.onSubmit}>submit</button>
        <input className="formInput" placeholder="enter item ID" onChange={this.itemID}></input>
        <button className="formInput" onClick={this.deleteRecord}>delete</button>
      </form>
      <div>
      </div>
    </main>
    )
  }
})
