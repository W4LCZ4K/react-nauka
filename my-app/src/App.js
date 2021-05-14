import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./componentsDominik/layout/layout.js";
import Huh from "./Bartek.js";
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
                            <Link to="/Bartek.js">Bartek</Link>
                        </li>
                        <li>
                            <Link to="/Dawid">Dawid</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route>
                        <Layout />
                    </Route>
                    <Route path="/Dawid"></Route>
                    <Route>
                        <Huh />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
