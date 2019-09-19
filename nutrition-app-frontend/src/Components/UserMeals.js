import React from 'react';

class UserMeals extends React.Component {


    renderUserMeal =() => {
      return this.props.user.meals.map(meal => {
        return <li key={meal.id} meal={meal}> <u>{meal.name}</u> <h6>  <u>{meal.category}</u> </h6> </li>
      })
      
    }  

    render() {
      console.log(this.props.user.meals)
      
    return (
    <div className='User-Meals'>
        <div className="Meals">
          <h1> {this.props.user.user_name}'s Meals</h1>
            <ol> 
              {this.renderUserMeal()}
            </ol>
        </div>
        
          <div className="daily-totals">
            <p>Total Daily Calories :</p>
            <p>Total Daily Carbohydrates :</p>
            <p>Total Daily Protein :</p>
            <p>Total Daily Fat :</p>
          </div>
    </div>
  )
}
}

export default UserMeals