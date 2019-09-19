import React from "react"
import Landing from './Landing'
import UserContainer from './UserContainer'
import CreateMealContainer from './CreateMealContainer'
// import bkg from '../'


export default class MainContainer extends React.Component {

     
   
    render() {
        
       

        return (
            <div >
                {
                this.props.user ? 
                < div className = "main-container" >
                    <UserContainer user={this.props.user} ree={this.props.ree} tdee={this.props.tdee} />
                   { this.props.createMeal ? null : <CreateMealContainer user={this.props.user} addToUserMeals={this.props.addToUserMeals}/> }
                    
                </div> 
                : 
                <div>
                {<Landing showLanding={this.props.landingShow} />}
                </div>
                }
            </div>
        )
    }
}