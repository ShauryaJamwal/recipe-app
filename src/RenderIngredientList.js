import React from 'react';




const RenderIngredientList = (props) => {
    let recipe = props.recipe;
    let ingredients = [];
    let measure = [];
    for(let i = 1 ; i <= 20; i++){
      if(recipe[`strIngredient${i}`] !== '' && recipe[`strIngredient${i}`] !== null){
        ingredients.push(recipe[`strIngredient${i}`]);
        measure.push(recipe[`strMeasure${i}`])
      }
    }

    return(<div className = "ingredientList">
                    {ingredients.map((ingredient,i) => {
                      return(
                        <ul key = {`recipe-${recipe.idMeal}+${i}`}>
                          {ingredient} ---- {measure[i]}
                        </ul>
                      )
                    })}
                </div>)
}

export default RenderIngredientList;