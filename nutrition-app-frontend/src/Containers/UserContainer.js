import React from 'react'
import UserInfo from '../Components/UserInfo'
import UserMeals from '../Components/UserMeals'


export default class UserContainer extends React.Component {

   



    render(){
        return (
            <div className='User-Info-Container'>
                <UserInfo user={this.props.user} ree={this.props.ree} tdee={this.props.tdee} />
                <UserMeals user={this.props.user}/>
            </div>
        )
    }
}