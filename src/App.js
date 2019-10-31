import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import "./App.css";

const Home = () => <h1>Strona startowa</h1>;
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt do nas</h1>;

const ErrorPage = () => <h1>Strona nie istnieje 404</h1>;

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Start
                </NavLink>
              </li>
              <li>
                <NavLink to="/news">Aktualności</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Kontakt</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
