import React from "react"
import LoginForm from '../Components/LoginForm'

export default class UserLogin extends React.Component {

     

    render() {

        // console.log(this.props)
        return (
            < div className = "login-page" >
               <LoginForm 
               setUserState={this.props.setUserState}
               />
            </div>
        )
    }
}