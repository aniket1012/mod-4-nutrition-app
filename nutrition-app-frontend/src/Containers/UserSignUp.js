import React from "react"
import SingUpForm from '../Components/SingUpForm'

export default class UserSignUp extends React.Component {

     

    render() {

        // console.log(this.props)
        return (
            <div className="sign-up-page">
               < SingUpForm
               setUserState={this.props.setUserState}
                // handleChange={this.props.handleChange}
                // handleUserSignUp={this.props.handleUserSignUp}
                // name={this.propsname}
                // email={this.propsemail}
                // age={this.propsage}
                // height={this.propsheight}
                // weight={this.propsweight}
                // goal={this.propsgoal}
               />
            </div>
        )
    }
}