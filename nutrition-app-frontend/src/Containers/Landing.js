import React from "react"
// import UserSignUp from './UserSignUp'
// import UserLogin from './UserLogin'

export default class Landing extends React.Component {

     

    render() {

        
        return (
            <div >
                    {this.props.showLanding()}
            </div>
        )
    }
}