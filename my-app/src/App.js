import React from "react";
import Layout from "./componentsDominik/layout/layout.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
<<<<<<< HEAD
              <Link to="/Dominik">Dominik</Link>
=======
              <Link to="/dominik">dominik</Link>
>>>>>>> feature/add-new-page-Dominik
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
<<<<<<< HEAD
          <Route path="/Dominik">
           
          </Route>
          <Route path="/Bartek">
           
          </Route>
          <Route path="/Dawid">
          
=======
          <Route path="/" exact={true} />
          <Route path="/about"></Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/dominik" exact={true}>
            <Layout
              link1={<Link to="/dominik">dominik</Link>}
              link2={<Link to="/about">The best</Link>}
              link3={<Link to="/users">Users</Link>}
            />
>>>>>>> feature/add-new-page-Dominik
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

<<<<<<< HEAD
=======
function Users() {
  return <h2>asdsas</h2>;
}
>>>>>>> feature/add-new-page-Dominik
