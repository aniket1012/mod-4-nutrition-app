import React from "react"

export default class Form extends React.Component {

    state = {
        user_name: "",
        email: "",
        password: "",
        age: null,
        height: null,
        weight: null,
        life_style: null,
        gender: null
    }
handleChange = (event) => {
    this.setState({
        [event.target.name]:event.target.value
    })
}



//    handleGoalChange = (event) => {
//        this.setState({
//            goal: event.target.value
//        })
//    }

handleUserSignUp = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                
                user_name: this.state.user_name,
                email: this.state.email,
                age: parseInt(this.state.age),
                height: parseInt(this.state.height),
                weight: parseInt(this.state.weight),
                life_style: this.state.life_style,
                gender: this.state.gender
                
            })
        })
        .then(resp => resp.json())
        .then(user => {
            this.props.setUserState(user)
        })

}


    render() {
        // console.log(this.props)
        return (
            <div className='Sign-Up-Form'>
               < h1 > NUTRI PAL SIGN UP </h1> 
                < form onSubmit= {this.handleUserSignUp} >
                        <input value={this.state.user_name} onChange={this.handleChange}name="user_name" placeholder="User Name"  />
                        <input value={this.state.email} onChange={this.handleChange}name="email" placeholder="Email"   />
                        <input value={this.state.age} onChange={this.handleChange}name="age" placeholder="Age" type = "text" />
                        <input value={this.state.height} onChange={this.handleChange}name="height" placeholder="Height (inches)" type = "text" />
                        <input value={this.state.weight} onChange={this.handleChange}name="weight" placeholder="Weight (lbs.)" type = "text" />
                        <select value={this.state.life_style} onChange={this.handleChange} name="life_style" >
                            <option value={this.state.gender} onChange= {this.handleChange} name="life_style" > - Select your Life Style </option>
                            <option>sedentary</option>
                            <option>light activity</option>
                            <option>moderate activity</option>
                            <option>very active</option>
                        </select>
                        <select onChange={this.handleChange} name="gender" >
                            <option value = {this.handleChange} name="gender" > - Gender </option>
                            <option>male</option>
                            <option>female</option>
                        </select>
                        <button type="Submit" name="Sign Up"> Sign Up </button>
                </form>
            </div>
        )
    }
}