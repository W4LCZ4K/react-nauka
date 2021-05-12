import React from "react";
import App1 from "./App1.jsx"

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
            <App1 />
          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

