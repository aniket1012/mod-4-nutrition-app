import React from "react"

export default class Form extends React.Component {

    state = {
        user_name: null,
        email: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUserLogin = (event) => {
        event.preventDefault()
        fetch(`http://localhost:3000/users`)
        .then(resp => resp.json())
        .then(users => {
              let returningUser =  users.find(user => {
                return user.user_name === this.state.user_name && user.email === this.state.email
            }) 
            if (returningUser) {
                this.props.setUserState(returningUser)
            } else {
                alert("User Not Found, Please Try Again Or Create An Account ")
            }
        })
        
    }

    
    

    render() {
        // console.log(this.props)
        return (
            <div className='Sign-Up-Form'>
               < h1 > NUTRI PAL LOGIN UP </h1> 
                <form onSubmit= {this.handleUserLogin} >
                        <input onChange={this.handleChange} name="user_name" placeholder="User Name" value={this.state.user_name} />
                        <input onChange={this.handleChange} name="email" placeholder="Email" value={this.state.email} />
                        <button type="Submit"> Log In </button>
                </form>
            </div>
        )
    }
}


// set state of user in app to null,
// set state of user_name and email to null 
// write a function to capture state change of name and email 
// wrtite a fetch to pull the write email ...see below 

// fetch
//     .then
//     .then
// array of objects of users
// array.find(user => {
//     return user.email === this.state.email

// })