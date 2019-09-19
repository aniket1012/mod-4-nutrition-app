import React from 'react'

export default class NavBar extends React.Component {

    render() {
        return (
            <div className='navbar'>
                
                    <header>
                        < img className = "logo"
                        src = "https://np.technology/img/NP-Small-Square-Trans-White.png"
                        alt = "logo" />
                        <nav>
                            <ul className="nav_links">
                                <li> <a id="create-meal-button" onClick={this.props.showCreateMeal} href="#">Create A Meal</a> </li>
                            </ul>
                        </nav>
                        <a className="cta" href="#"><button onClick={this.props.showSignUp}>Sign Up</button></a>
                        <a className="cta" href="#"><button onClick={this.props.showLogin}>Log In</button></a>
                        <a className="cta" href="#"><button onClick={this.props.showLanding}>Log Out</button></a>
                    </header>
                    {/* <h1>NUTRIPAL</h1>
                    <button>HOME</button>
                    <button>SIGN UP</button>
                    <button>LOG IN</button>
                    <button>LOG OUT</button> */}
                
            </div>
        )
    }
}

