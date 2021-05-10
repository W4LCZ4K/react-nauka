import React from "react";
import Dawid from "./Dawid.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
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
          <Route path="/Bartek">
           
          </Route>
          <Route path="/Dawid">
            <Dawid />
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

