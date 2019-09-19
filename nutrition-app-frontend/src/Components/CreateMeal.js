import React from 'react';
import Ingredient from './Ingredient';
// import Ingredient from "../Components/Ingredient"


class CreateMeal extends React.Component {

  state = {
    meal_name: "",
    meal_category:""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createUserMeal = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/meals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: this.state.meal_name,
                calories: parseInt(this.props.meal_calories),
                carbohydrates: parseInt(this.props.meal_carbohydrates),
                protein: parseInt(this.props.meal_protein),
                fat: parseInt(this.props.meal_fat),
                category: this.state.meal_category
                
            })
        })
        .then(resp => resp.json())
        .then(newMeal => {
          this.setState({
            meal_name: "",
            meal_category: "",
          }, () => {
            this.props.addNewMeal(newMeal)
            this.props.addToUserMeals(newMeal)
            // fetch for user again and set state of user with new meals 
          })
        })
       
    }
  
  renderMyIngredients =() => {
        return this.props.my_ingredients.map(ingredient => {
            return (
            <Ingredient 
              key={ingredient.id} 
              ingredient={ingredient} 
              handleClick={this.props.removeFromCreateMeal}
            />
            )
        })
    }

  

    

  render() {
    return (
      <div className='Create-Meal'>
        <div>
          <h1 className="title">Create a Meal</h1>
          <form className="create-meal-form" onSubmit={this.createUserMeal}>
              <input onChange={this.handleChange} name="meal_name" placeholder="Name Your Meal       ⌨️" value={this.state.meal_name}></input>
              <select  onChange={this.handleChange} name="meal_category" value={this.state.meal_category}>
                <option>  - Meal Type  </option>
                <option> breakfest </option>
                <option> lunch </option>
                <option> dinner </option>
                <option> snack </option>
              </select>
              <button type="Submit" >Create Meal</button>
          </form>
            < ul className = "my-ingredients-container" >
              {this.renderMyIngredients()}
            </ul>
        
            <div className="Create-Meal-Totals">
              <h4> Meal Total Calories:  {this.props.meal_calories} Calories </h4>
              <h4> Meal Total Carbohydrates:  {this.props.meal_carbohydrates} Grams</h4>
              <h4> Meal Total Protein:  {this.props.meal_protein} Grams</h4>
              <h4> Meal Total Fats:  {this.props.meal_fat} Grams</h4>
            </div>
          </div>
      </div>
    )
  }
}

export default CreateMeal