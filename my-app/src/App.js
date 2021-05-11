import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Huh from "./Bartek.js"


export default function App() {
  return (
    <Router>
      <div>
       
        <nav>
           <ul className="header">
            <li>
              <Link to="/Dominik">Dominik</Link>
            </li>
            <li>
              <Link to="/Bartek">Bartek</Link>
            </li>
            <li>
              <Link to="/Dawid">Dawid</Link>
            </li>
          </ul>
        </nav>

      
        <Switch>
          <Route path="/Dominik">
           
          </Route>
          <Route >
          <Huh/>
          </Route>
          <Route path="/Dawid">
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

