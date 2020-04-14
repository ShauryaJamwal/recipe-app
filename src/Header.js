import React from 'react';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dish  : ''
        }
    }

    saveDishToState = (e) => {
        this.setState({
          dish : e.target.value
        })
      }


    render = () =>{
        return(
        <div className = "inputPanel">
          <div className = "inputSearch">
            <input className = "inputBar" value = {this.state.dish} type = "text" placeholder = "Enter the Name of the Dish" onChange = {this.saveDishToState}></input>
          </div>
          <div className = 'inputButton'>
            <button className = 'searchButton' onClick = {() =>this.props.getRecipe(this.state.dish)}>Get Recipes</button>
          </div>
        </div>
        )
    }

}

export default Header;