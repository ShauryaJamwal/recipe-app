import React, { Component } from 'react';
import './App.css';
import RenderMealsPanel from './RenderPanel';
import Header from './Header';

class App extends Component {

  constructor(){
    super()
    this.state = {
      dish : '',
      recievedData : {
        meals : null
      },
      isPageLoad : false
    }
  }

  

  componentDidMount(){
      this.setState({
      isPageLoad : true
    })
  }

  // This function changes the particular recipe to liked.
  likeChange = (recipeId) => {
    let recipes = this.state.recievedData;
    recipes.meals.forEach((recipe) => {
      if(recipe.idMeal === recipeId){
        recipe.isLiked = !recipe.isLiked;
      }
    })

    this.setState({
      recievedData : recipes
    })
  }



  

  renderMealsUI = () => {
    let recipes = this.state.recievedData.meals
    let ui = recipes.map((recipe) => {
      return <RenderMealsPanel  key = {`recipeKey + ${recipe.idMeal}`}recipe = {recipe} likeChange = {this.likeChange}/>
    })

    return (<div className = 'panel'>{ui}</div>);
  }

  // This function calls the API for a particular call
  getRecipe = (dish) => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`;
    url = encodeURI(url);
    fetch(url)
    .then((res) => res.json())
    .then((res) => {this.setState({
      recievedData : res,
      isPageLoad : false
    })})
  }


  render() {
    return (
      <div className="App">
        <div className = "pageTitle">
          Recipe Finder
        </div>
       <Header dish = {this.state} saveDishToState = {this.saveDishToState} getRecipe = {this.getRecipe}/>
        { this.state.isPageLoad 
        ? <div><h1>Type a Dish Name to Search for its ingredient</h1></div>
        : 
        <div>
        {this.state.recievedData.meals === null ? <div> No data Has been recieved</div> :
          this.renderMealsUI()
        }
        </div>
      
      }
      </div>
      
    );
  }
}
export default App;