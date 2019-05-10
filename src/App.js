import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch } from "react-router-dom";

import Category from "./Category";
import Products from "./Products";

const Home = () => (
  <div>
    <h2>HOME PAGE</h2>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <nav clasName="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    );
  }
}

export default App;
