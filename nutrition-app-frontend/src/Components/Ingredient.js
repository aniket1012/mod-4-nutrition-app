import React from 'react'


export default class Ingredient extends React.Component {

  
    


      
    render() {
        
        return(
        <p className = 'list-item' onClick={() => {this.props.handleClick(this.props.ingredient)}} > {this.props.ingredient.name}</p>
        )
    }
}