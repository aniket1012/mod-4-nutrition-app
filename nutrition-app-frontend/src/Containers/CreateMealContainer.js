import React from "react"
import SearchFoods from '../Components/SearchFoods'
import CreateMeal from '../Components/CreateMeal'
// import Ingredient from "../Components/Ingredient";

export default class CreateMealContainer extends React.Component {

    state ={
        searchTerm: "",
        ingredients: [],

        my_ingredients: [],
    
        
        meal_calories: null,
        meal_carbohydrates: null,
        meal_protein: null,
        meal_fat: null,
    }

    componentDidMount() {
        fetch(`http://localhost:3000/ingredients`)
            .then(resp => resp.json())
            .then(ingredients => {
                this.setState({
                    ingredients: ingredients
                })
            })
    }

    handleOnChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    searchIngredients = () => {
        return this.state.ingredients.filter(ingredient => {
            return ingredient.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
    }

    

    addToCreateMeal = (foundIngredient) => {
        this.setState({
            my_ingredients: [...this.state.my_ingredients, foundIngredient], 
            }, () => {
                this.setState({
                    
                        // meal_name: this.handleMealName(),
                        meal_calories: this.getMealCalories(),
                        meal_carbohydrates: this.getMealCarbohydrates(),
                        meal_protein: this.getMealProtein(),
                        meal_fat: this.getMealFat(),
                        // meal_category: this.handleMealCategory

                })
            })
        
    }


    removeFromCreateMeal = (foundIngredient) => {
    this.setState({
      my_ingredients: this.state.my_ingredients.filter(ingredient => {
       return ingredient.id !== foundIngredient.id
      })
    }, this.setState({
        
            meal_calories: this.getMealCalories() - foundIngredient.calories,
            meal_carbohydrates: this.getMealCarbohydrates() - foundIngredient.carbohydrates,
            meal_protein: this.getMealProtein() - foundIngredient.protein,
            meal_fat: this.getMealFat() - foundIngredient.fat
        
    }))
  }



  getMealCalories = () => {
      return this.state.my_ingredients.map(ingredient => ingredient.calories).reduce((total, currentValue) => currentValue + total, 0)
  }
  getMealCarbohydrates = () => {
      return this.state.my_ingredients.map(ingredient => ingredient.carbohydrates).reduce((total, currentValue) => currentValue + total, 0)
  }
  getMealProtein = () => {
      return this.state.my_ingredients.map(ingredient => ingredient.protein).reduce((total, currentValue) => currentValue + total, 0)
  }
  getMealFat = () => {
      return this.state.my_ingredients.map(ingredient => ingredient.fat).reduce((total, currentValue) => currentValue + total, 0)
  }

  addNewMeal = (newMeal) => {
    //   this is where i will fetch with user id adn new meal id
    fetch(`http://localhost:3000/user_meals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            user_id: this.props.user.id,
            meal_id: newMeal.id
        })
    })
    .then(resp => resp.json())
    .then(json => {
        this.addMealIngredients(this.state.my_ingredients, newMeal)
    this.setState({
        meal_calories: null,
        meal_carbohydrates: null,
        meal_protein: null,
        meal_fat: null,
        my_ingredients: [],
        // user_meals: [...this.state.user_meals, newMeal]
        })
    })
 }

 addMealIngredients =(ingredients, newMeal) => {
     ingredients.forEach(ingredient => {
        fetch(`http://localhost:3000/meal_ingredients`, {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
         },
         body: JSON.stringify({
            meal_id: newMeal.id,
            ingredient_id: ingredient.id
         })
     }) 
     })
     
 }
    

    render() {
        return (
            < div className = 'Create-Meals-Container' >
                < SearchFoods 
                
                handleUserSignUp={this.handleUserSignUp} 
                addToCreateMeal={this.addToCreateMeal}
                ingredients={this.searchIngredients()}
                // searchIngredients={this.searchIngredients}
                handleOnChange={this.handleOnChange}
            
                />


                <CreateMeal 
                 
                my_ingredients={this.state.my_ingredients}
                meal_calories={this.state.meal_calories}
                meal_carbohydrates={this.state.meal_carbohydrates}
                meal_protein={this.state.meal_protein}
                meal_fat={this.state.meal_fat}
                removeFromCreateMeal={this.removeFromCreateMeal}
                addNewMeal={this.addNewMeal}
                addToUserMeals={this.props.addToUserMeals}

                
                
                />
            </div>
        )
    }
}