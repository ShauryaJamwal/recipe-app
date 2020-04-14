import React from 'react';
import RenderIngredientList from './RenderIngredientList';


const RenderMealsPanel = (props) => {
    let recipe = props.recipe;

    let panelUi =  <div key = {recipe.idMeal} className = 'mealPanel' >
          
        <div className = 'panelHeading'>
          <div className = "heading" onClick = {() => {window.location.href = recipe.strSource}}>{recipe.strMeal}</div>
          <div className = "likeHeading">{
            recipe.isLiked
              ? <i className="far fa-heart heartColor" onClick = {() => props.likeChange(recipe.idMeal)}></i>
              : <i className="far fa-heart " onClick = {() =>props.likeChange(recipe.idMeal)}></i>}
          </div>
        </div>
        
        <div className = 'panelBody'>

          <div className = 'imageContainer'>
            <img  className = 'thumbnailImage' alt = {`Image of `+ recipe.strMeal} src = {recipe.strMealThumb}></img>
          </div>

          <div className = 'mealHeader'>

            <div className = 'mealHead'>
              <div className = 'lessPanel'>
                <div className = "heading-small">Category of Meal -  </div>
                <div className = "data">{recipe.strCategory}</div>
              </div>
              <div className = 'lessPanel'>
                <div className = "heading-small">Area of the Meal -  </div>
                <div className = "data">{recipe.strArea}</div>
              </div>
            </div>

            <div className = 'mealHead'>
            <div className = "ingredient heading-small"> Ingredients</div>
              <div className = 'listPanel'>
                {/* {this.renderIngredientList(recipe)} */}
                <RenderIngredientList recipe = {recipe} />
              </div>
            </div>

            <div className = 'mealBody'>
              <div className = "heading-small recipe">Recipes </div>
              <div className = "recipe-data">{recipe.strInstructions}</div>
            </div>

          </div>

      </div>  

      </div>

    return(panelUi)
  }

export default RenderMealsPanel;