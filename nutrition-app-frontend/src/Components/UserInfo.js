import React from 'react';

const UserInfo = props => {


  


    return (
      <div className='User-Info'>
        <div className='info'>
          <h1>Hello {props.user.user_name}</h1>
          <p> < strong > REE(Resting Engery Expenditure): </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>{props.ree} Calories</u></p>
          <p><strong>TDEE (Total Daily Engery Expenditure):</strong> &nbsp;&nbsp;<u>{props.tdee} Calories</u></p>
          <p><strong>Carbohydrates:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>{(props.user.weight * 0.825).toFixed(2)} Grams </u> </p>
          <p><strong>Protein:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>{(props.user.weight * 0.825).toFixed(2)} Grams </u> </p>
          <p><strong>Fats:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>{(((props.user.weight * 0.25)/9)).toFixed(2)} Grams </u> </p>
        </div>
        {/* < div className = "chart" >
          chart will go here
        </div> */}
      </div>
  )
}

export default UserInfo

