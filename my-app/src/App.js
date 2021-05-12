import React from "react";
import Layout from "./layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dominik">dominik</Link>
            </li>
            <li>
              <Link to="/about">The best</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>asdsas</h2>;
}
