import React from 'react';
import './App.css';
import NavBar from './Containers/NavBar'
import MainContainer from './Containers/MainContainer'
import UserSignUp from './Containers/UserSignUp'
import UserLogin from './Containers/UserLogin'
// import CreateMealContainer from './Containers/CreateMealContainer'


class App extends React.Component {

  state = {
    user: null,
    landing: "landing",
    createMeal: true,
    ree: null,
    tdee: null 
  }

  showCreateMeal =() => {
    this.setState({
      createMeal: !this.state.createMeal
    })
  }

  setUserState = (user) => {
    this.setState({
      user: user
    //   user: {
    //     id: user.id,
    //     user_name: user.user_name,
    //     email: user.email,
    //     age: user.age,
    //     height: user.height,
    //     weight: user.weight,
    //     life_style: user.life_style,
    //     gender: user.gender
    //   }
    })
    this.userRee()
    this.userTdee()
  }

  addToUserMeals =(newMeal) => {
    this.setState({
      user: {...this.state.user, meals:[...this.state.user.meals, newMeal]}
    })
  }

  heightToCm =() => {
    let userHeightCm = this.state.user.height * 2.54
   return userHeightCm
  }

   weightToKg = () => {
     let userWeightKg = this.state.user.weight * 0.4536
     return userWeightKg
   }

   userRee = () => {
     let ree
     if (this.state.user.gender === 'male') {
        ree = (66.5 + (13.8 * (this.weightToKg()))) + (5 * this.heightToCm()) - (6.7 * this.state.user.age)
     } else if ( this.state.user.gender === 'female') {
       ree = (655.1 + (9.65 * (this.weightToKg()))) + (1.84 * this.heightToCm()) - (4.68 * this.state.user.age)
     }
     this.setState({
       ree: ree.toFixed(2)
     })
   }

   userTdee = () => {
     let tdee
     if (this.state.user.life_style === 'sedentary') {
       tdee = this.state.ree * 1.1
     } else if (this.state.user.life_style === 'light activity' && this.state.user.gender === 'male') {
       tdee = this.state.ree * 1.3
     } else if (this.state.user.life_style === 'light activity' && this.state.user.gender === 'female') {
       tdee = this.state.ree * 1.2
     } else if (this.state.user.life_style === 'moderate activity' && this.state.user.gender === 'male') {
      tdee = this.state.ree * 1.7
     } else if (this.state.user.life_style === 'moderate activity' && this.state.user.gender === 'female') {
      tdee = this.state.ree * 1.6
     } else if (this.state.user.life_style === 'very active' && this.state.user.gender === 'male') {
       tdee = this.state.ree * 1.9
     } else if (this.state.user.life_style === 'very active' && this.state.user.gender === 'female') {
       tdee = this.state.ree * 1.8
     }
     this.setState({
       tdee: tdee.toFixed(2)
     })
  }


  landingShow = () => {
    if (this.state.landing === "landing") {
      return <h1 className='landing'> WELCOME TO NUTRIPAL</h1>
    } else if (this.state.landing === "Sign Up") {
      return <UserSignUp setUserState={this.setUserState}/>
    } else if (this.state.landing === "Log In") {
      return <UserLogin setUserState={this.setUserState} />
    }
  }

  showSignUp = () => {
    this.setState({
      landing: "Sign Up"
    })
  }

  showLogin = () => {
    this.setState({
      landing: "Log In"
    })
  }

  showLanding = () => {
    this.setState({
      landing: "landing",
      user: null
    })
  }

  render() {
    return (
    <div className="App">
      <NavBar 
      showLanding={this.showLanding}
      showLogin={this.showLogin}
      showSignUp={this.showSignUp}
      showCreateMeal={this.showCreateMeal}
      
      />
      <MainContainer  
      user={this.state.user } 
      setUserState={this.setUserState}
      landingShow={this.landingShow}
      createMeal={this.state.createMeal}
      addToUserMeals={this.addToUserMeals}


      ree={this.state.ree}
      tdee={this.state.tdee}
      />
    </div>
    )
  }
}

export default App;

