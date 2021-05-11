import react, { Component } from "react";
import propTypes from "prop-types";
import "./App.css";
import "./bartek.css";
import "./buttons.css"
import Click from "./buttons.jsx";
import Login from "./login.jsx"
function Huh (){
    return (<div>
        
<div className="title">
    Witaj w sklepie!
</div>
       <div className="login">
           
<Login/>
<button className="button" onClick={()=>Click()}>Zarejestruj się</button>
</div>

</div>

    )
}
export default Huh;