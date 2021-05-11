import react, { Component, useState } from "react";

import propTypes from "prop-types";

class Login extends Component{

    state ={
        isActive:false
    }
    handleLogin = ()=>{
        this.setState({
            isActive: true
        })
    }
  
    handleLogout = () =>{
        this.setState({
            isActive: false
        })
    }
  
     render(){
         return(
             <div>
             {this.state.isActive ?(<button className="button"  onClick={this.handleLogout}>Wyloguj</button>) : (<button className="button"  onClick={this.handleLogin}>Zaloguj</button>) }
            
               
             </div>
         )
     }
    
}
export default Login;