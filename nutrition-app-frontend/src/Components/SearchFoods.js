import React from 'react';
import Ingredient from './Ingredient'

class SearchFoods extends React.Component {

  

  renderIngredients = () => {
         return this.props.ingredients.map(ingredient => {
           return  (
                <Ingredient 
                key={ingredient.id} 
                ingredient={ingredient}
                handleClick={this.props.addToCreateMeal} 
                
                /> 
          )
         })
    }

  

    render() {
    return (
    <div className='Search-Food'> 
        <h1 className="title" >Search Foods To Create a Meal</h1>
      <form className="search-ingredioents-form" onSubmit= {this.props.handleUserSignUp}>
        <input onChange={this.props.handleOnChange} name="searchfoods" placeholder="Search Foods 🔍"  /> 
      </form>
      
      < ul className = "ingredients-container" >
        {this.renderIngredients()}
      </ul>
       
  
    </div>
  )
}
}

export default SearchFoods